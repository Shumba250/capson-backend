"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSingleArticle = exports.retrieveSingleArticle = exports.retrieveAllArticles = exports.deleteSingleArticle = exports.createComment = exports.createArticle = exports.articleCount = void 0;
var _blogmodules = require("../models/blogmodules.js");
var _cloudinary = _interopRequireDefault(require("../helper/cloudinary.js"));
function cov_19aqxkkawa() {
  var path = "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\blogController.js";
  var hash = "28b60b596ecfa864e3a164d0589fd90ac8abd790";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\TGT\\Desktop\\capson-backend\\src\\controller\\blogController.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 22
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 19
        },
        end: {
          line: 9,
          column: 6
        }
      },
      "3": {
        start: {
          line: 10,
          column: 17
        },
        end: {
          line: 14,
          column: 6
        }
      },
      "4": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 15,
          column: 35
        }
      },
      "5": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 20,
          column: 7
        }
      },
      "6": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 74
        }
      },
      "7": {
        start: {
          line: 26,
          column: 28
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "8": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "9": {
        start: {
          line: 28,
          column: 17
        },
        end: {
          line: 28,
          column: 44
        }
      },
      "10": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 33,
          column: 7
        }
      },
      "11": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 74
        }
      },
      "12": {
        start: {
          line: 39,
          column: 21
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "13": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 49,
          column: 3
        }
      },
      "14": {
        start: {
          line: 41,
          column: 18
        },
        end: {
          line: 41,
          column: 45
        }
      },
      "15": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 46,
          column: 7
        }
      },
      "16": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 74
        }
      },
      "17": {
        start: {
          line: 52,
          column: 30
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "18": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 62,
          column: 3
        }
      },
      "19": {
        start: {
          line: 54,
          column: 17
        },
        end: {
          line: 54,
          column: 62
        }
      },
      "20": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 59,
          column: 7
        }
      },
      "21": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 73
        }
      },
      "22": {
        start: {
          line: 65,
          column: 28
        },
        end: {
          line: 91,
          column: 1
        }
      },
      "23": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 90,
          column: 3
        }
      },
      "24": {
        start: {
          line: 67,
          column: 17
        },
        end: {
          line: 67,
          column: 62
        }
      },
      "25": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 70,
          column: 5
        }
      },
      "26": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 34
        }
      },
      "27": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 74,
          column: 5
        }
      },
      "28": {
        start: {
          line: 73,
          column: 6
        },
        end: {
          line: 73,
          column: 46
        }
      },
      "29": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 79,
          column: 5
        }
      },
      "30": {
        start: {
          line: 76,
          column: 21
        },
        end: {
          line: 76,
          column: 69
        }
      },
      "31": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 45
        }
      },
      "32": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 41
        }
      },
      "33": {
        start: {
          line: 80,
          column: 18
        },
        end: {
          line: 80,
          column: 35
        }
      },
      "34": {
        start: {
          line: 81,
          column: 4
        },
        end: {
          line: 85,
          column: 7
        }
      },
      "35": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 89,
          column: 71
        }
      },
      "36": {
        start: {
          line: 93,
          column: 28
        },
        end: {
          line: 104,
          column: 1
        }
      },
      "37": {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 103,
          column: 3
        }
      },
      "38": {
        start: {
          line: 95,
          column: 17
        },
        end: {
          line: 95,
          column: 64
        }
      },
      "39": {
        start: {
          line: 96,
          column: 4
        },
        end: {
          line: 100,
          column: 7
        }
      },
      "40": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 75
        }
      },
      "41": {
        start: {
          line: 106,
          column: 22
        },
        end: {
          line: 121,
          column: 1
        }
      },
      "42": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 120,
          column: 3
        }
      },
      "43": {
        start: {
          line: 108,
          column: 24
        },
        end: {
          line: 108,
          column: 32
        }
      },
      "44": {
        start: {
          line: 109,
          column: 21
        },
        end: {
          line: 112,
          column: 6
        }
      },
      "45": {
        start: {
          line: 113,
          column: 24
        },
        end: {
          line: 113,
          column: 45
        }
      },
      "46": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 116,
          column: 7
        }
      },
      "47": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 38
        }
      },
      "48": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 32
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 22
          },
          end: {
            line: 5,
            column: 23
          }
        },
        loc: {
          start: {
            line: 5,
            column: 42
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 28
          },
          end: {
            line: 26,
            column: 29
          }
        },
        loc: {
          start: {
            line: 26,
            column: 48
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 21
          },
          end: {
            line: 39,
            column: 22
          }
        },
        loc: {
          start: {
            line: 39,
            column: 41
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 39
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 52,
            column: 30
          },
          end: {
            line: 52,
            column: 31
          }
        },
        loc: {
          start: {
            line: 52,
            column: 50
          },
          end: {
            line: 63,
            column: 1
          }
        },
        line: 52
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 65,
            column: 28
          },
          end: {
            line: 65,
            column: 29
          }
        },
        loc: {
          start: {
            line: 65,
            column: 48
          },
          end: {
            line: 91,
            column: 1
          }
        },
        line: 65
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 93,
            column: 28
          },
          end: {
            line: 93,
            column: 29
          }
        },
        loc: {
          start: {
            line: 93,
            column: 48
          },
          end: {
            line: 104,
            column: 1
          }
        },
        line: 93
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 106,
            column: 22
          },
          end: {
            line: 106,
            column: 23
          }
        },
        loc: {
          start: {
            line: 106,
            column: 42
          },
          end: {
            line: 121,
            column: 1
          }
        },
        line: 106
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 68,
            column: 4
          },
          end: {
            line: 70,
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
        line: 68
      },
      "1": {
        loc: {
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 74,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 72,
            column: 4
          },
          end: {
            line: 74,
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
        line: 72
      },
      "2": {
        loc: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 79,
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
        line: 75
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
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "28b60b596ecfa864e3a164d0589fd90ac8abd790"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19aqxkkawa = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19aqxkkawa();
cov_19aqxkkawa().s[0]++;
//post a blog
const createArticle = async (req, res) => {
  cov_19aqxkkawa().f[0]++;
  cov_19aqxkkawa().s[1]++;
  try {
    const result = (cov_19aqxkkawa().s[2]++, await _cloudinary.default.uploader.upload(req.file.path, {
      folder: 'articles'
    }));
    const blog = (cov_19aqxkkawa().s[3]++, new _blogmodules.Article({
      title: req.body.title,
      description: req.body.description,
      image: {
        publicId: result.public_id,
        url: result.secure_url
      }
    }));
    const blogs = (cov_19aqxkkawa().s[4]++, await blog.save());
    cov_19aqxkkawa().s[5]++;
    res.status(200).json({
      status: 'success',
      message: 'blog post was a success',
      data: {
        blog: blogs
      }
    });
  } catch (error) {
    cov_19aqxkkawa().s[6]++;
    res.status(404).json({
      status: 'error',
      message: 'blog not posted'
    });
  }
};
//retrieve all articles
exports.createArticle = createArticle;
cov_19aqxkkawa().s[7]++;
const retrieveAllArticles = async (req, res) => {
  cov_19aqxkkawa().f[1]++;
  cov_19aqxkkawa().s[8]++;
  try {
    const blog = (cov_19aqxkkawa().s[9]++, await _blogmodules.Article.find().exec());
    cov_19aqxkkawa().s[10]++;
    res.status(200).json({
      status: 'success',
      message: 'blogs retrieved successfully',
      data: {
        blogCount: blog.length,
        blog: blog
      }
    });
  } catch (error) {
    cov_19aqxkkawa().s[11]++;
    res.status(404).json({
      status: 'error',
      message: 'blogs not found'
    });
  }
};
//counting all the saved articles
exports.retrieveAllArticles = retrieveAllArticles;
cov_19aqxkkawa().s[12]++;
const articleCount = async (req, res) => {
  cov_19aqxkkawa().f[2]++;
  cov_19aqxkkawa().s[13]++;
  try {
    const blogs = (cov_19aqxkkawa().s[14]++, await _blogmodules.Article.find().exec());
    cov_19aqxkkawa().s[15]++;
    res.status(200).json({
      status: 'success',
      message: 'blogs retrieved successfully',
      data: {
        blogs: blogs.length
      }
    });
  } catch (error) {
    cov_19aqxkkawa().s[16]++;
    res.status(404).json({
      status: 'error',
      message: 'blogs not found'
    });
  }
};
//retieve a single blog
exports.articleCount = articleCount;
cov_19aqxkkawa().s[17]++;
const retrieveSingleArticle = async (req, res) => {
  cov_19aqxkkawa().f[3]++;
  cov_19aqxkkawa().s[18]++;
  try {
    const blog = (cov_19aqxkkawa().s[19]++, await _blogmodules.Article.findOne({
      _id: req.params.id
    }));
    cov_19aqxkkawa().s[20]++;
    res.status(200).json({
      status: 'success',
      message: 'blog retrieved successfully',
      data: {
        blog: blog
      }
    });
  } catch (error) {
    cov_19aqxkkawa().s[21]++;
    res.status(404).json({
      status: 'error',
      message: 'blog not found'
    });
  }
};
//update a single blog
exports.retrieveSingleArticle = retrieveSingleArticle;
cov_19aqxkkawa().s[22]++;
const updateSingleArticle = async (req, res) => {
  cov_19aqxkkawa().f[4]++;
  cov_19aqxkkawa().s[23]++;
  try {
    const blog = (cov_19aqxkkawa().s[24]++, await _blogmodules.Article.findOne({
      _id: req.params.id
    }));
    cov_19aqxkkawa().s[25]++;
    if (req.body.title) {
      cov_19aqxkkawa().b[0][0]++;
      cov_19aqxkkawa().s[26]++;
      blog.title = req.body.title;
    } else {
      cov_19aqxkkawa().b[0][1]++;
    }
    cov_19aqxkkawa().s[27]++;
    if (req.body.description) {
      cov_19aqxkkawa().b[1][0]++;
      cov_19aqxkkawa().s[28]++;
      blog.description = req.body.description;
    } else {
      cov_19aqxkkawa().b[1][1]++;
    }
    cov_19aqxkkawa().s[29]++;
    if (req.body.image) {
      cov_19aqxkkawa().b[2][0]++;
      const result = (cov_19aqxkkawa().s[30]++, await _cloudinary.default.uploader.upload(req.body.image));
      cov_19aqxkkawa().s[31]++;
      blog.image.publicId = result.public_id;
      cov_19aqxkkawa().s[32]++;
      blog.image.url = result.secure_url;
    } else {
      cov_19aqxkkawa().b[2][1]++;
    }
    const blogs = (cov_19aqxkkawa().s[33]++, await blog.save());
    cov_19aqxkkawa().s[34]++;
    res.status(200).json({
      status: 'success',
      message: 'blog updated',
      data: {
        blog: blogs
      }
    });
  } catch {
    cov_19aqxkkawa().s[35]++;
    res.status(404).json({
      status: 'error',
      message: 'failed to update the blog'
    });
  }
};
//delete a blog
exports.updateSingleArticle = updateSingleArticle;
cov_19aqxkkawa().s[36]++;
const deleteSingleArticle = async (req, res) => {
  cov_19aqxkkawa().f[5]++;
  cov_19aqxkkawa().s[37]++;
  try {
    const blog = (cov_19aqxkkawa().s[38]++, await _blogmodules.Article.deleteOne({
      _id: req.params.id
    }));
    cov_19aqxkkawa().s[39]++;
    res.status(200).json({
      status: 'success',
      message: 'blog deleted',
      data: {
        blog: blog
      }
    });
  } catch {
    cov_19aqxkkawa().s[40]++;
    res.status(404).json({
      status: 'error',
      message: 'blog not deleted'
    });
  }
};
//create a comment
exports.deleteSingleArticle = deleteSingleArticle;
cov_19aqxkkawa().s[41]++;
const createComment = async (req, res) => {
  cov_19aqxkkawa().f[6]++;
  cov_19aqxkkawa().s[42]++;
  try {
    const {
      comment
    } = (cov_19aqxkkawa().s[43]++, req.body);
    const comments = (cov_19aqxkkawa().s[44]++, new _blogmodules.Comment({
      userId: req.user._id,
      comment
    }));
    const commentSave = (cov_19aqxkkawa().s[45]++, await comments.save());
    cov_19aqxkkawa().s[46]++;
    await _blogmodules.Article.findByIdAndUpdate(req.params.id, {
      $push: {
        comments: commentSave
      }
    });
    cov_19aqxkkawa().s[47]++;
    res.status(200).json(commentSave);
  } catch (error) {
    cov_19aqxkkawa().s[48]++;
    res.status(500).json(error);
  }
};
exports.createComment = createComment;