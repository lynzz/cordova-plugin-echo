var exec = require("cordova/exec");
// global cordova, module
module.exports = {
    threadFunction: function (name, successCallback, errorCallback) {
      exec(successCallback, errorCallback, "Echo", "threadFunction", [name]);
    },

    nonThreadFunction: function (name, successCallback, errorCallback) {
      exec(successCallback, errorCallback, "Echo", "nonThreadFunction", [name]);
    }
};