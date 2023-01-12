"use strict";

require("dotenv/config");
var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _router = _interopRequireDefault(require("./routes/router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
_mongoose["default"].set("strictQuery", true);
_mongoose["default"].connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  app.listen(3000, function () {
    console.log("server connected successfully at port 3000");
    console.log("bd connected successfully");
  });
})["catch"](function (error) {
  return console.log(error);
});
app.use(_express["default"].json());
app.use("/blogs", _router["default"]);