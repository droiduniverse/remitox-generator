"use strict";
import "reflect-metadata";
import * as express from "express";
import { isArray } from "util";
import { Cliente } from "../entities/Cliente";
import { AppDataSource } from "../db/pg-datasource";
import { RemitosCreados } from "../entities/RemitosCreados";

const router = express.Router();

router.post("/", async (req, res, next) => {
  let items: any[] = [];
  let totales: any[] = [];
  let cliente: any;
  let id = req.query.clienteId || 0;
  let nombre: any;

  if (req.body && isArray(req.body)) {
    req.body.forEach((el) => {
      if (el.hasOwnProperty("totalItem")) {
        items.push({
          descripcion: el.descripcion,
          precio: el.precio,
          total_item: el.totalItem,
          cantidad: el.cantidad,
          nro_remito: el.nroRemito,
          cliente_id: id
        });
      }

      if (el.hasOwnProperty("cantidadTotalItems")) {
        totales.push(el.cantidadTotalItems, el.cantidadTotalRemito);
      }
      nombre = el.hasOwnProperty("cantidadTotalItems") ? el.clienteNombre : "";
    });
  }

  const repoClientes = AppDataSource.getRepository<Cliente>("Cliente");
  const repoRemitosCreados =
    AppDataSource.getRepository<RemitosCreados>("RemitosCreados");

  try {
    let query = `SELECT * FROM Clientes WHERE id = $1 OR cliente_nombre like $2 LIMIT 1`;
    cliente = await repoClientes.query(query, [id, "%" + nombre + "%"]);

    if (cliente.length === 0) {
      throw new Error("No existe el cliente seleccionado");
    }
    const result = await repoRemitosCreados.save(items);

    return res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
