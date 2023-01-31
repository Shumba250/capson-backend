"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCount = exports.updateUser = exports.retrieveAllUses = exports.retireveSingleUser = exports.deleteUser = exports.createUser = void 0;
var _signupModule = _interopRequireDefault(require("../models/signupModule.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function cov_2m3g51evx1() {
  var path = "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\signupController.js";
  var hash = "99f36aac61549c22e9b79b47f09034dac84222df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\signupController.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 24
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 7,
          column: 46
        }
      },
      "3": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 12,
          column: 7
        }
      },
      "4": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 17,
          column: 7
        }
      },
      "5": {
        start: {
          line: 21,
          column: 18
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "6": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "7": {
        start: {
          line: 23,
          column: 20
        },
        end: {
          line: 23,
          column: 46
        }
      },
      "8": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 28,
          column: 7
        }
      },
      "9": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "10": {
        start: {
          line: 37,
          column: 27
        },
        end: {
          line: 51,
          column: 1
        }
      },
      "11": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 50,
          column: 3
        }
      },
      "12": {
        start: {
          line: 39,
          column: 18
        },
        end: {
          line: 39,
          column: 62
        }
      },
      "13": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 44,
          column: 7
        }
      },
      "14": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 49,
          column: 7
        }
      },
      "15": {
        start: {
          line: 53,
          column: 19
        },
        end: {
          line: 79,
          column: 1
        }
      },
      "16": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 78,
          column: 3
        }
      },
      "17": {
        start: {
          line: 55,
          column: 53
        },
        end: {
          line: 55,
          column: 61
        }
      },
      "18": {
        start: {
          line: 56,
          column: 21
        },
        end: {
          line: 56,
          column: 52
        }
      },
      "19": {
        start: {
          line: 57,
          column: 20
        },
        end: {
          line: 62,
          column: 6
        }
      },
      "20": {
        start: {
          line: 63,
          column: 27
        },
        end: {
          line: 63,
          column: 73
        }
      },
      "21": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 68,
          column: 5
        }
      },
      "22": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 67,
          column: 78
        }
      },
      "23": {
        start: {
          line: 69,
          column: 17
        },
        end: {
          line: 69,
          column: 37
        }
      },
      "24": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 72,
          column: 80
        }
      },
      "25": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 77,
          column: 7
        }
      },
      "26": {
        start: {
          line: 82,
          column: 19
        },
        end: {
          line: 106,
          column: 1
        }
      },
      "27": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 105,
          column: 3
        }
      },
      "28": {
        start: {
          line: 84,
          column: 17
        },
        end: {
          line: 84,
          column: 61
        }
      },
      "29": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 87,
          column: 5
        }
      },
      "30": {
        start: {
          line: 86,
          column: 6
        },
        end: {
          line: 86,
          column: 42
        }
      },
      "31": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 90,
          column: 5
        }
      },
      "32": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 89,
          column: 40
        }
      },
      "33": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 93,
          column: 5
        }
      },
      "34": {
        start: {
          line: 92,
          column: 6
        },
        end: {
          line: 92,
          column: 34
        }
      },
      "35": {
        start: {
          line: 94,
          column: 18
        },
        end: {
          line: 94,
          column: 35
        }
      },
      "36": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 99,
          column: 7
        }
      },
      "37": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 104,
          column: 7
        }
      },
      "38": {
        start: {
          line: 108,
          column: 19
        },
        end: {
          line: 122,
          column: 1
        }
      },
      "39": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 121,
          column: 3
        }
      },
      "40": {
        start: {
          line: 110,
          column: 20
        },
        end: {
          line: 110,
          column: 66
        }
      },
      "41": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 115,
          column: 7
        }
      },
      "42": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 120,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 25
          }
        },
        loc: {
          start: {
            line: 5,
            column: 44
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 18
          },
          end: {
            line: 21,
            column: 19
          }
        },
        loc: {
          start: {
            line: 21,
            column: 38
          },
          end: {
            line: 35,
            column: 1
          }
        },
        line: 21
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 37,
            column: 27
          },
          end: {
            line: 37,
            column: 28
          }
        },
        loc: {
          start: {
            line: 37,
            column: 47
          },
          end: {
            line: 51,
            column: 1
          }
        },
        line: 37
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 53,
            column: 19
          },
          end: {
            line: 53,
            column: 20
          }
        },
        loc: {
          start: {
            line: 53,
            column: 39
          },
          end: {
            line: 79,
            column: 1
          }
        },
        line: 53
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 82,
            column: 19
          },
          end: {
            line: 82,
            column: 20
          }
        },
        loc: {
          start: {
            line: 82,
            column: 39
          },
          end: {
            line: 106,
            column: 1
          }
        },
        line: 82
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 108,
            column: 19
          },
          end: {
            line: 108,
            column: 20
          }
        },
        loc: {
          start: {
            line: 108,
            column: 39
          },
          end: {
            line: 122,
            column: 1
          }
        },
        line: 108
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 64
      },
      "1": {
        loc: {
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 85,
            column: 4
          },
          end: {
            line: 87,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 85
      },
      "2": {
        loc: {
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 88,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 88
      },
      "3": {
        loc: {
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 93,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 4
          },
          end: {
            line: 93,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 91
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "99f36aac61549c22e9b79b47f09034dac84222df"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2m3g51evx1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2m3g51evx1();
cov_2m3g51evx1().s[0]++;
//retrieve all users
const retrieveAllUses = async (req, res) => {
  cov_2m3g51evx1().f[0]++;
  cov_2m3g51evx1().s[1]++;
  try {
    const signups = (cov_2m3g51evx1().s[2]++, await _signupModule.default.find().exec());
    cov_2m3g51evx1().s[3]++;
    res.status(200).json({
      status: 'success',
      message: 'all users retieved',
      data: {
        userCount: signups.length,
        users: signups
      }
    });
  } catch (error) {
    cov_2m3g51evx1().s[4]++;
    res.status(404).json({
      status: 'error',
      message: 'failed to retrieve all users information'
    });
  }
};
//retieve the number of users
exports.retrieveAllUses = retrieveAllUses;
cov_2m3g51evx1().s[5]++;
const userCount = async (req, res) => {
  cov_2m3g51evx1().f[1]++;
  cov_2m3g51evx1().s[6]++;
  try {
    const signups = (cov_2m3g51evx1().s[7]++, await _signupModule.default.find().exec());
    cov_2m3g51evx1().s[8]++;
    res.status(200).json({
      status: 'success',
      message: 'number of users retreived',
      data: {
        users: signups.length
      }
    });
  } catch (error) {
    cov_2m3g51evx1().s[9]++;
    res.status(404).json({
      status: 'error',
      message: 'users not found'
    });
  }
};
//retireve a single user
exports.userCount = userCount;
cov_2m3g51evx1().s[10]++;
const retireveSingleUser = async (req, res) => {
  cov_2m3g51evx1().f[2]++;
  cov_2m3g51evx1().s[11]++;
  try {
    const signs = (cov_2m3g51evx1().s[12]++, await _signupModule.default.findOne({
      _id: req.params.id
    }));
    cov_2m3g51evx1().s[13]++;
    res.status(200).json({
      status: 'success',
      message: 'user retrieved',
      data: {
        user: signs
      }
    });
  } catch (error) {
    cov_2m3g51evx1().s[14]++;
    res.status(500).json({
      status: 'error',
      message: 'failed to retrieve user information'
    });
  }
};
//add a user
exports.retireveSingleUser = retireveSingleUser;
cov_2m3g51evx1().s[15]++;
const createUser = async (req, res) => {
  cov_2m3g51evx1().f[3]++;
  cov_2m3g51evx1().s[16]++;
  try {
    const {
      firstName,
      lastName,
      email,
      password
    } = (cov_2m3g51evx1().s[17]++, req.body);
    const hashPass = (cov_2m3g51evx1().s[18]++, await _bcrypt.default.hash(password, 10));
    const signups = (cov_2m3g51evx1().s[19]++, new _signupModule.default({
      firstName,
      lastName,
      email,
      password: hashPass
    }));
    const userRegistered = (cov_2m3g51evx1().s[20]++, await _signupModule.default.findOne({
      email: signups.email
    }));
    cov_2m3g51evx1().s[21]++;
    if (userRegistered) {
      cov_2m3g51evx1().b[0][0]++;
      cov_2m3g51evx1().s[22]++;
      return res.status(400).json({
        status: 'User not created',
        message: 'user already exists'
      });
    } else {
      cov_2m3g51evx1().b[0][1]++;
    }
    const user = (cov_2m3g51evx1().s[23]++, await signups.save());
    cov_2m3g51evx1().s[24]++;
    return res.status(200).json({
      status: 'success',
      message: 'user added',
      data: {
        user: user
      }
    });
  } catch (error) {
    cov_2m3g51evx1().s[25]++;
    return res.status(400).json({
      status: 'error',
      message: 'failed to add a user information'
    });
  }
};

// update users information
exports.createUser = createUser;
cov_2m3g51evx1().s[26]++;
const updateUser = async (req, res) => {
  cov_2m3g51evx1().f[4]++;
  cov_2m3g51evx1().s[27]++;
  try {
    const user = (cov_2m3g51evx1().s[28]++, await _signupModule.default.findOne({
      _id: req.params.id
    }));
    cov_2m3g51evx1().s[29]++;
    if (req.body.firstName) {
      cov_2m3g51evx1().b[1][0]++;
      cov_2m3g51evx1().s[30]++;
      user.firstName = req.body.firstName;
    } else {
      cov_2m3g51evx1().b[1][1]++;
    }
    cov_2m3g51evx1().s[31]++;
    if (req.body.lastName) {
      cov_2m3g51evx1().b[2][0]++;
      cov_2m3g51evx1().s[32]++;
      user.lastName = req.body.lastName;
    } else {
      cov_2m3g51evx1().b[2][1]++;
    }
    cov_2m3g51evx1().s[33]++;
    if (req.body.email) {
      cov_2m3g51evx1().b[3][0]++;
      cov_2m3g51evx1().s[34]++;
      user.email = req.body.email;
    } else {
      cov_2m3g51evx1().b[3][1]++;
    }
    const users = (cov_2m3g51evx1().s[35]++, await user.save());
    cov_2m3g51evx1().s[36]++;
    res.status(200).json({
      status: 'success',
      message: 'user information updated',
      data: {
        user: users
      }
    });
  } catch (error) {
    cov_2m3g51evx1().s[37]++;
    res.status(404).json({
      status: 'error',
      message: 'failed to update users information'
    });
  }
};
// delete a user
exports.updateUser = updateUser;
cov_2m3g51evx1().s[38]++;
const deleteUser = async (req, res) => {
  cov_2m3g51evx1().f[5]++;
  cov_2m3g51evx1().s[39]++;
  try {
    const signups = (cov_2m3g51evx1().s[40]++, await _signupModule.default.deleteOne({
      _id: req.params.id
    }));
    cov_2m3g51evx1().s[41]++;
    res.status(200).json({
      status: 'success',
      message: 'user deleted',
      data: {
        user: signups
      }
    });
  } catch (error) {
    cov_2m3g51evx1().s[42]++;
    res.status(404).json({
      status: 'success',
      message: 'user not found'
    });
  }
};
exports.deleteUser = deleteUser;