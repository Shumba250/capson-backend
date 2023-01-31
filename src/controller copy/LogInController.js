"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logIn = void 0;
var _tokenEncoded = _interopRequireDefault(require("../helper/tokenEncoded.js"));
function cov_22dxpg4f3q() {
  var path = "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\LogInController.js";
  var hash = "9cdd9d9402c2cf0489c89077eba12e3c73a5fbdb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\LogInController.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 18
        },
        end: {
          line: 5,
          column: 50
        }
      },
      "3": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 8,
          column: 68
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 10,
          column: 72
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 14
          },
          end: {
            line: 3,
            column: 15
          }
        },
        loc: {
          start: {
            line: 3,
            column: 34
          },
          end: {
            line: 12,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9cdd9d9402c2cf0489c89077eba12e3c73a5fbdb"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22dxpg4f3q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_22dxpg4f3q();
cov_22dxpg4f3q().s[0]++;
const logIn = async (req, res) => {
  cov_22dxpg4f3q().f[0]++;
  cov_22dxpg4f3q().s[1]++;
  try {
    const token = (cov_22dxpg4f3q().s[2]++, await (0, _tokenEncoded.default)(req.user._id));
    cov_22dxpg4f3q().s[3]++;
    res.status(200).json({
      status: 'success',
      message: 'login success',
      token
    });
  } catch (error) {
    cov_22dxpg4f3q().s[4]++;
    res.status(500).json({
      status: 'failed',
      message: 'login failed'
    });
  }
};
exports.logIn = logIn;