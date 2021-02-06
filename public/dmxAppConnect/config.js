dmx.config({
  "UserOffers": {
    "pendingOffers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "pending": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "isPosted",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        }
      ],
      "outputType": "array"
    },
    "offers": {
      "meta": [
        {
          "name": "offers",
          "type": "array",
          "sub": [
            {
              "name": "$index",
              "type": "number"
            },
            {
              "name": "$key",
              "type": "text"
            },
            {
              "name": "$value",
              "type": "object"
            },
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "takeCategory",
              "type": "text"
            },
            {
              "name": "giveCategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "stars",
              "type": "text"
            },
            {
              "name": "isApproved",
              "type": "text"
            },
            {
              "name": "isPending",
              "type": "text"
            },
            {
              "name": "isPosted",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "image2",
              "type": "text"
            },
            {
              "name": "image3",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "comments",
          "type": "array",
          "sub": [
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            }
          ]
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "pendingOffersrepeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "UserPage": {
    "postedoffers": {
      "meta": [
        {
          "name": "fromUsernameToID",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            }
          ]
        },
        {
          "name": "offers",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "takeCategory",
              "type": "text"
            },
            {
              "name": "giveCategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "stars",
              "type": "text"
            },
            {
              "name": "isApproved",
              "type": "text"
            },
            {
              "name": "isPending",
              "type": "text"
            },
            {
              "name": "isPosted",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "image2",
              "type": "text"
            },
            {
              "name": "image3",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "query": [
      {
        "type": "text",
        "name": "id"
      }
    ],
    "useroffersrepeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "comments",
          "type": "array",
          "sub": [
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            }
          ]
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "userpostedoffers": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "comments": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "usercomment",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "usercomment",
              "type": "array",
              "sub": [
                {
                  "name": "username",
                  "type": "text"
                },
                {
                  "name": "avatar",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "Home": {
    "popularoffers": {
      "meta": [
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "takeCategory",
              "type": "text"
            },
            {
              "name": "giveCategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "stars",
              "type": "text"
            },
            {
              "name": "isApproved",
              "type": "text"
            },
            {
              "name": "isPending",
              "type": "text"
            },
            {
              "name": "isPosted",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "image2",
              "type": "text"
            },
            {
              "name": "image3",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "newoffers": {
      "meta": [
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "takeCategory",
              "type": "text"
            },
            {
              "name": "giveCategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "stars",
              "type": "text"
            },
            {
              "name": "isApproved",
              "type": "text"
            },
            {
              "name": "isPending",
              "type": "text"
            },
            {
              "name": "isPosted",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "image2",
              "type": "text"
            },
            {
              "name": "image3",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "usercomment",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "newoffersrepeat": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "usercomment",
              "type": "array",
              "sub": [
                {
                  "name": "username",
                  "type": "text"
                },
                {
                  "name": "avatar",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "popularOffersRepeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "comments",
          "type": "array",
          "sub": [
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "popularoffersrepeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "comments",
          "type": "array",
          "sub": [
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "query": [
      {
        "type": "text",
        "name": "offerid"
      }
    ],
    "resultsrepeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "results": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "usercomment",
              "type": "array",
              "sub": [
                {
                  "name": "username",
                  "type": "text"
                },
                {
                  "name": "avatar",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "comments": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "usercomment",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "usercomment",
              "type": "array",
              "sub": [
                {
                  "name": "username",
                  "type": "text"
                },
                {
                  "name": "avatar",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "AdminRequests": {
    "offersforreview": {
      "meta": [
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "takeCategory",
              "type": "text"
            },
            {
              "name": "giveCategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "stars",
              "type": "text"
            },
            {
              "name": "isApproved",
              "type": "text"
            },
            {
              "name": "isPending",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "image2",
              "type": "text"
            },
            {
              "name": "image3",
              "type": "text"
            },
            {
              "name": "status",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "repeat1": {
      "meta": [
        {
          "name": "offers",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "takeCategory",
              "type": "text"
            },
            {
              "name": "giveCategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "stars",
              "type": "text"
            },
            {
              "name": "isApproved",
              "type": "text"
            },
            {
              "name": "isPending",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "image2",
              "type": "text"
            },
            {
              "name": "image3",
              "type": "text"
            },
            {
              "name": "status",
              "type": "text"
            }
          ]
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "reviewOffers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "OfferCard": {
    "displaycomments": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        }
      ],
      "outputType": "array"
    }
  },
  "Main": {
    "repeat2": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "newoffersrepeat": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "resultoffers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "image2",
          "type": "text"
        },
        {
          "name": "image3",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "takecat"
      }
    ],
    "results": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "usercomment",
              "type": "array",
              "sub": [
                {
                  "name": "username",
                  "type": "text"
                },
                {
                  "name": "avatar",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "usercomment",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "takeCategory",
          "type": "text"
        },
        {
          "name": "giveCategory",
          "type": "text"
        },
        {
          "name": "takeSubcategory",
          "type": "text"
        },
        {
          "name": "giveSubcategory",
          "type": "text"
        },
        {
          "name": "takeLevel",
          "type": "text"
        },
        {
          "name": "giveLevel",
          "type": "text"
        },
        {
          "name": "stars",
          "type": "text"
        },
        {
          "name": "isApproved",
          "type": "text"
        },
        {
          "name": "isPending",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "image1",
          "type": "text"
        },
        {
          "name": "status",
          "type": "text"
        },
        {
          "name": "numOfRates",
          "type": "text"
        },
        {
          "name": "user",
          "type": "array",
          "sub": [
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "usercomment",
              "type": "array",
              "sub": [
                {
                  "name": "username",
                  "type": "text"
                },
                {
                  "name": "avatar",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "Comments": {
    "pendingOffers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "userinfo",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        },
        {
          "name": "offer",
          "type": "array",
          "sub": [
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "id",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "commentsOffers": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "userinfo",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            }
          ]
        },
        {
          "name": "offer",
          "type": "array",
          "sub": [
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "id",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "ocomuser",
          "type": "array",
          "sub": [
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "username",
              "type": "text"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "name": "id",
          "type": "text"
        },
        {
          "name": "datetime",
          "type": "text"
        },
        {
          "name": "userId",
          "type": "text"
        },
        {
          "name": "offerId",
          "type": "text"
        },
        {
          "name": "comment",
          "type": "text"
        },
        {
          "name": "userinfo",
          "type": "array",
          "sub": [
            {
              "name": "username",
              "type": "text"
            },
            {
              "name": "avatar",
              "type": "text"
            },
            {
              "name": "name",
              "type": "text"
            },
            {
              "name": "surname",
              "type": "text"
            }
          ]
        },
        {
          "name": "offer",
          "type": "array",
          "sub": [
            {
              "name": "giveSubcategory",
              "type": "text"
            },
            {
              "name": "takeSubcategory",
              "type": "text"
            },
            {
              "name": "takeLevel",
              "type": "text"
            },
            {
              "name": "giveLevel",
              "type": "text"
            },
            {
              "name": "image1",
              "type": "text"
            },
            {
              "name": "description",
              "type": "text"
            },
            {
              "name": "id",
              "type": "text"
            }
          ]
        },
        {
          "name": "takesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "givesubcat",
          "type": "array",
          "sub": [
            {
              "name": "description",
              "type": "text"
            }
          ]
        },
        {
          "name": "repeat1",
          "type": "array",
          "sub": [
            {
              "name": "id",
              "type": "text"
            },
            {
              "name": "datetime",
              "type": "text"
            },
            {
              "name": "userId",
              "type": "text"
            },
            {
              "name": "offerId",
              "type": "text"
            },
            {
              "name": "comment",
              "type": "text"
            },
            {
              "name": "ocomuser",
              "type": "array",
              "sub": [
                {
                  "name": "avatar",
                  "type": "text"
                },
                {
                  "name": "username",
                  "type": "text"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    }
  }
});
