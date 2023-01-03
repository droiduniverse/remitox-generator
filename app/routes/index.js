"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const util_1 = require("util");
const pg_datasource_1 = require("../db/pg-datasource");
const router = express.Router();
router.post("/crearRemito", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let items = [];
    let totales = [];
    if (req.body && (0, util_1.isArray)(req.body)) {
        req.body.forEach((el) => {
            if (el.hasOwnProperty("totalItem")) {
                items.push({
                    descripcion: el.descripcion,
                    precio: el.precio,
                    total_item: el.totalItem,
                    cantidad: el.cantidad,
                    nro_remito: el.nroRemito,
                    cliente_id: el.clienteId,
                });
            }
            if (el.hasOwnProperty("cantidadTotalItems")) {
                totales.push(el.cantidadTotalItems, el.cantidadTotalRemito);
            }
        });
    }
    const repoClientes = pg_datasource_1.AppDataSource.getRepository("Cliente");
    const rawData = yield repoClientes.query(`SELECT * FROM Clientes WHERE id = 999`);
    console.log(rawData);
    const repoRemitosCreados = pg_datasource_1.AppDataSource.getRepository("RemitosCreados");
    try {
        const result = yield repoRemitosCreados.save(items);
        return res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
//# sourceMappingURL=index.js.map