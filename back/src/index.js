"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
(0, routes_1.routes)(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
