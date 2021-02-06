const AuthProvider = require('./provider');

class DatabaseProvider extends AuthProvider {

    constructor(app, opts, name) {
        super(app, opts, name);
        this.users = opts.users;
        this.perms = opts.permissions;
        this.db = app.getDbConnection(opts.connection);
    }

    async validate(username, password) {
        if (!username) return false;
        if (!password) password = '';

        let results = await this.db
            .select(this.users.identity, this.users.username, this.users.password)
            .from(this.users.table)
            .where(this.users.username, username);

        for (let result of results) {
            if (result[this.users.username] == username && result[this.users.password] == password) {
                return result[this.users.identity];
            }
        }
        
        return false;
    }

    async permissions(identity, permissions) {
        for (let permission of permissions) {
            if (!this.perms[permission]) return false;

            let perm = this.perms[permission];
            let table = perm.table || this.users.table;
            let ident = perm.identity || this.users.identity;

            let results = await this.db
                .select(ident)
                .from(table)
                .where(ident, identity)
                .where(function() {
                    for (let condition of perm.conditions) {
                        this.where(condition.column, condition.operator, condition.value);
                    }
                });

            if (!results.length) return false;
        }

        return true;
    }

}

module.exports = DatabaseProvider;