"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveAllAdmins = exports.removeAdmin = exports.createAdmin = void 0;
var _signupModule = _interopRequireDefault(require("../models/signupModule.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
function cov_2798en4xmb() {
  var path = "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\AdminController.js";
  var hash = "a8957cc4ea5c35a26a967db9a1917a8456585699";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\AdminController.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 1
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "2": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 6,
          column: 59
        }
      },
      "3": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "4": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 15,
          column: 76
        }
      },
      "5": {
        start: {
          line: 19,
          column: 20
        },
        end: {
          line: 48,
          column: 1
        }
      },
      "6": {
        start: {
          line: 20,
          column: 1
        },
        end: {
          line: 47,
          column: 2
        }
      },
      "7": {
        start: {
          line: 21,
          column: 51
        },
        end: {
          line: 21,
          column: 59
        }
      },
      "8": {
        start: {
          line: 22,
          column: 19
        },
        end: {
          line: 22,
          column: 50
        }
      },
      "9": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 29,
          column: 4
        }
      },
      "10": {
        start: {
          line: 30,
          column: 28
        },
        end: {
          line: 30,
          column: 72
        }
      },
      "11": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 35,
          column: 3
        }
      },
      "12": {
        start: {
          line: 32,
          column: 3
        },
        end: {
          line: 34,
          column: 68
        }
      },
      "13": {
        start: {
          line: 37,
          column: 23
        },
        end: {
          line: 37,
          column: 41
        }
      },
      "14": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "15": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 46,
          column: 66
        }
      },
      "16": {
        start: {
          line: 50,
          column: 20
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "17": {
        start: {
          line: 51,
          column: 1
        },
        end: {
          line: 60,
          column: 2
        }
      },
      "18": {
        start: {
          line: 52,
          column: 16
        },
        end: {
          line: 52,
          column: 62
        }
      },
      "19": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 57,
          column: 5
        }
      },
      "20": {
        start: {
          line: 59,
          column: 2
        },
        end: {
          line: 59,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 26
          },
          end: {
            line: 4,
            column: 27
          }
        },
        loc: {
          start: {
            line: 4,
            column: 46
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 19,
            column: 20
          },
          end: {
            line: 19,
            column: 21
          }
        },
        loc: {
          start: {
            line: 19,
            column: 40
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 50,
            column: 20
          },
          end: {
            line: 50,
            column: 21
          }
        },
        loc: {
          start: {
            line: 50,
            column: 40
          },
          end: {
            line: 61,
            column: 1
          }
        },
        line: 50
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 35,
            column: 3
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
        line: 31
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
      "20": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a8957cc4ea5c35a26a967db9a1917a8456585699"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2798en4xmb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2798en4xmb();
cov_2798en4xmb().s[0]++;
const retrieveAllAdmins = async (req, res) => {
  cov_2798en4xmb().f[0]++;
  cov_2798en4xmb().s[1]++;
  try {
    const Admin = (cov_2798en4xmb().s[2]++, await _signupModule.default.find({
      role: "admin"
    }).exec());
    cov_2798en4xmb().s[3]++;
    res.status(200).json({
      status: "success",
      message: "list of all Admins",
      data: {
        adminCount: Admin.length,
        Admin
      }
    });
  } catch (error) {
    cov_2798en4xmb().s[4]++;
    res.status(400).json({
      status: "error",
      message: "failed to retrieve list of admins"
    });
  }
};
exports.retrieveAllAdmins = retrieveAllAdmins;
cov_2798en4xmb().s[5]++;
const createAdmin = async (req, res) => {
  cov_2798en4xmb().f[1]++;
  cov_2798en4xmb().s[6]++;
  try {
    const {
      firstName,
      lastName,
      email,
      password
    } = (cov_2798en4xmb().s[7]++, req.body);
    const hashPass = (cov_2798en4xmb().s[8]++, await _bcrypt.default.hash(password, 10));
    const Admin = (cov_2798en4xmb().s[9]++, new _signupModule.default({
      firstName,
      lastName,
      email,
      password: hashPass,
      role: "admin"
    }));
    const alreadyRegistered = (cov_2798en4xmb().s[10]++, await _signupModule.default.findOne({
      email: Admin.email
    }));
    cov_2798en4xmb().s[11]++;
    if (alreadyRegistered) {
      cov_2798en4xmb().b[0][0]++;
      cov_2798en4xmb().s[12]++;
      return res.status(400).json({
        status: "Not added",
        message: "admin already exists"
      });
    } else {
      cov_2798en4xmb().b[0][1]++;
    }
    const adminCreated = (cov_2798en4xmb().s[13]++, await Admin.save());
    cov_2798en4xmb().s[14]++;
    res.status(200).json({
      status: "success",
      message: "Admin created",
      data: {
        Admin: adminCreated
      }
    });
  } catch (error) {
    cov_2798en4xmb().s[15]++;
    res.status(500).json({
      status: "error",
      message: "unexpected server error"
    });
  }
};
exports.createAdmin = createAdmin;
cov_2798en4xmb().s[16]++;
const removeAdmin = async (req, res) => {
  cov_2798en4xmb().f[2]++;
  cov_2798en4xmb().s[17]++;
  try {
    const Admin = (cov_2798en4xmb().s[18]++, await _signupModule.default.deleteOne({
      _id: req.params.id
    }));
    cov_2798en4xmb().s[19]++;
    res.status(200).json({
      status: " success",
      message: "Admin deleted",
      data: {
        Admins: Admin
      }
    });
  } catch (error) {
    cov_2798en4xmb().s[20]++;
    res.status(400).json({
      status: "error",
      message: "admin not found"
    });
  }
};
exports.removeAdmin = removeAdmin;