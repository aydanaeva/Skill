const reGrouping = /(\d+)(\d{3})/;

function clone(o) {
    if (Array.isArray(o)) {
        return o.map(clone);
    }

    if (typeof o == 'object') {
        let oo = {};
        for (let key in o) {
            oo[key] = clone(o[key]);
        }
        return oo;
    }

    return o;
}

module.exports = {

    clone,

    keysToLowerCase: function(o) {
        return Object.keys(o).reduce((c, k) => (c[k.toLowerCase()] = o[k], c), {});
    },

    padNumber: function(num, digids, trim) {
        let sign = '';

        if (num < 0) {
            sign = '-';
            num = -num;
        }

        num = String(num);

        while (num.length < digids) {
            num = '0' + num;
        }

        if (trim) {
            num = num.substr(num.length - digids);
        }

        return sign + num;
    },

    formatNumber: function(num, decimals, decimalSeparator, groupingSeparator) {
        num = Number(num);

        if (isNaN(num) || !isFinite(num)) return '';

        decimalSeparator = typeof decimalSeparator == 'string' ? decimalSeparator : '.';
        groupingSeparator = typeof groupingSeparator == 'string' ? groupingSeparator : '';
        precision = typeof precision == 'number' ? Math.abs(precision) : null;

        let minus = num < 0;
        let parts = (decimals == null ? String(Math.abs(num)) : Math.abs(num).toFixed(decimals)).split('.');
        let wholePart = parts[0];
        let decimalPart = parts.length > 1 ? decimalSeparator + parts[1] : '';

        if (groupingSeparator) {
            while (reGrouping.test(wholePart)) {
                wholePart = wholePart.replace(reGrouping, '$1' + groupingSeparator + '$2');
            }
        }

        return (minus ? '-' : '') + wholePart + decimalPart;
    },

    parseDate: function(obj) {
        if (Object.prototype.toString.call(obj) == '[object Date]') return obj;

        let date = new Date(obj);

        if (typeof obj == 'number') {
            date = new Date(obj * 1000);
        }

        if (date.toString() == 'Invalid Date') {
            return undefined;
        }

        return date;
    },

    formatDate: function(date, format, locale) {
        date = module.exports.parseDate(date);
        if (date == null) return date;
        locale = typeof locale == 'string' ? locale : 'en-US';
        const lang = require('../locale/' + locale);
        const pad = (v, n) => `0000${v}`.substr(-n);

        let y = date.getFullYear(),
            n = date.getMonth(),
            d = date.getDate(),
            w = date.getDay(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds(),
            v = date.getMilliseconds();
        
        return format.replace(/([yMdHhmsaAv])(\1+)?/g, part => {
            switch (part) {
                case 'yyyy': return pad(y, 4);
                case 'yy': return pad(y, 2);
                case 'y': return y;
                case 'MMMM': return lang.months[n];
                case 'MMM': return lang.monthsShort[n];
                case 'MM': return pad(n + 1, 2);
                case 'M': return n + 1;
                case 'dddd': return lang.days[w];
                case 'ddd': return lang.daysShort[w];
                case 'dd': return pad(d, 2);
                case 'd': return d;
                case 'HH': return pad(h, 2);
                case 'H': return h;
                case 'hh': return pad((h % 12) || 12, 2);
                case 'h': return (h % 12) || 12;
                case 'mm': return pad(m, 2);
                case 'm': return m;
                case 'ss': return pad(s, 2);
                case 's': return s;
                case 'a': return h < 12 ? 'am' : 'pm';
                case 'A': return h < 12 ? 'AM' : 'PM';
                case 'v': return v;
            }
        });
    }

};