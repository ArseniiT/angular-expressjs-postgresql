"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.db = void 0;
const pg_1 = require("pg");
exports.db = new pg_1.Pool({
    user: 'test',
    password: 'test',
    host: 'localhost',
    port: 5432,
    database: 'angular_express_postgres',
});
const query = (text, params) => {
    return exports.db.query(text, params);
};
exports.query = query;
