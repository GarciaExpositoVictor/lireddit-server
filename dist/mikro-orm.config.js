"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Posts_1 = require("./entities/Posts");
exports.default = {
    dbName: 'lireddit',
    debug: !constants_1.__prod__,
    type: 'postgresql',
    entities: [Posts_1.Post]
};
//# sourceMappingURL=mikro-orm.config.js.map