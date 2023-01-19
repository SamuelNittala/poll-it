"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
//# sourceMappingURL=main.js.map