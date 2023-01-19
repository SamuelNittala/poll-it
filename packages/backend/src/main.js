"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('Hello world');
});
app.listen(PORT, function () {
    console.log("Listening on ".concat(PORT));
});
