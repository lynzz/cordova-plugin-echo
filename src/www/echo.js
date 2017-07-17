var exec = require("cordova/exec");
// global cordova, module
module.exports = {
    echo: function (name, successCallback, errorCallback) {
      exec(successCallback, errorCallback, "Echo", "echo", [name]);
    }
};