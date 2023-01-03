"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("../entities/Cliente");
const RemitosCreados_1 = require("../entities/RemitosCreados");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "remitoxx.cgllxwil4lhw.sa-east-1.rds.amazonaws.com",
    port: 5434,
    username: "nikerios",
    password: "gQFv3AFqntwVRBq",
    database: "postgres",
    entities: [Cliente_1.Cliente, RemitosCreados_1.RemitosCreados],
    synchronize: true,
    logging: false,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
//# sourceMappingURL=pg-datasource.js.map