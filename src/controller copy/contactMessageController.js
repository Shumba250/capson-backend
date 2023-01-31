"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveSingleMessage = exports.retrieveAllMessages = exports.deleteMessage = exports.createMessage = void 0;
var _contactMessageModule = _interopRequireDefault(require("../models/contactMessageModule.js"));
function cov_o8yq99111() {
  var path = "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\contactMessageController.js";
  var hash = "9ba11bfc15d8cb94a92381c6160cb05daf4811a8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\contactMessageController.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 28
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "2": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 56
        }
      },
      "3": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 11,
          column: 7
        }
      },
      "4": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 15,
          column: 73
        }
      },
      "5": {
        start: {
          line: 19,
          column: 30
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "6": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "7": {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 21,
          column: 74
        }
      },
      "8": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "9": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 76
        }
      },
      "10": {
        start: {
          line: 32,
          column: 22
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "11": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "12": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 39,
          column: 6
        }
      },
      "13": {
        start: {
          line: 40,
          column: 21
        },
        end: {
          line: 40,
          column: 41
        }
      },
      "14": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 45,
          column: 7
        }
      },
      "15": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 75
        }
      },
      "16": {
        start: {
          line: 51,
          column: 22
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "17": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 61,
          column: 3
        }
      },
      "18": {
        start: {
          line: 53,
          column: 21
        },
        end: {
          line: 53,
          column: 76
        }
      },
      "19": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 58,
          column: 7
        }
      },
      "20": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 78
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 28
          },
          end: {
            line: 4,
            column: 29
          }
        },
        loc: {
          start: {
            line: 4,
            column: 48
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
            column: 30
          },
          end: {
            line: 19,
            column: 31
          }
        },
        loc: {
          start: {
            line: 19,
            column: 50
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 19
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 22
          },
          end: {
            line: 32,
            column: 23
          }
        },
        loc: {
          start: {
            line: 32,
            column: 42
          },
          end: {
            line: 49,
            column: 1
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 51,
            column: 22
          },
          end: {
            line: 51,
            column: 23
          }
        },
        loc: {
          start: {
            line: 51,
            column: 42
          },
          end: {
            line: 62,
            column: 1
          }
        },
        line: 51
      }
    },
    branchMap: {},
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
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9ba11bfc15d8cb94a92381c6160cb05daf4811a8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_o8yq99111 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_o8yq99111();
cov_o8yq99111().s[0]++;
//retrieve all messages
const retrieveAllMessages = async (req, res) => {
  cov_o8yq99111().f[0]++;
  cov_o8yq99111().s[1]++;
  try {
    const messages = (cov_o8yq99111().s[2]++, await _contactMessageModule.default.find().exec());
    cov_o8yq99111().s[3]++;
    res.status(200).json({
      status: 'success',
      message: 'all messages retireved',
      data: {
        messageCount: messages.length,
        messages: messages
      }
    });
  } catch (error) {
    cov_o8yq99111().s[4]++;
    res.status(404).json({
      status: 'error',
      message: 'failed to retrieve messages'
    });
  }
};
//retrieve a single message
exports.retrieveAllMessages = retrieveAllMessages;
cov_o8yq99111().s[5]++;
const retrieveSingleMessage = async (req, res) => {
  cov_o8yq99111().f[1]++;
  cov_o8yq99111().s[6]++;
  try {
    const messages = (cov_o8yq99111().s[7]++, await _contactMessageModule.default.findOne({
      _id: req.params.id
    }));
    cov_o8yq99111().s[8]++;
    res.status(200).json({
      status: 'success',
      message: 'message retireved',
      data: {
        messages: messages
      }
    });
  } catch (error) {
    cov_o8yq99111().s[9]++;
    res.status(404).json({
      status: 'error',
      message: 'message not found'
    });
  }
};
//add a message
exports.retrieveSingleMessage = retrieveSingleMessage;
cov_o8yq99111().s[10]++;
const createMessage = async (req, res) => {
  cov_o8yq99111().f[2]++;
  cov_o8yq99111().s[11]++;
  try {
    const message = (cov_o8yq99111().s[12]++, new _contactMessageModule.default({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    }));
    const messages = (cov_o8yq99111().s[13]++, await message.save());
    cov_o8yq99111().s[14]++;
    res.status(200).json({
      status: 'success',
      message: 'message was sent successfully',
      data: {
        messages: messages
      }
    });
  } catch (error) {
    cov_o8yq99111().s[15]++;
    res.status(404).json({
      status: 'error',
      message: 'message not sent'
    });
  }
};
//delete a message
exports.createMessage = createMessage;
cov_o8yq99111().s[16]++;
const deleteMessage = async (req, res) => {
  cov_o8yq99111().f[3]++;
  cov_o8yq99111().s[17]++;
  try {
    const messages = (cov_o8yq99111().s[18]++, await _contactMessageModule.default.deleteOne({
      _id: req.params.id
    }));
    cov_o8yq99111().s[19]++;
    res.status(200).json({
      status: 'success',
      message: 'message deleted successfully',
      data: {
        messages: messages
      }
    });
  } catch (error) {
    cov_o8yq99111().s[20]++;
    res.status(404).json({
      status: 'error',
      message: 'message not deleted'
    });
  }
};
exports.deleteMessage = deleteMessage;