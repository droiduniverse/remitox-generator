"use strict";
import "reflect-metadata";
import * as express from "express";
import { isArray } from "util";
import { Cliente } from "../entities/Cliente";
import { AppDataSource } from "../db/pg-datasource";
import { RemitosCreados } from "../entities/RemitosCreados";

const router = express.Router();

router.post("/crearRemito", async (req, res, next) => {

  let items: any[] = [];
  let totales: any[] = [];
  let cliente: any;

  if (req.body && isArray(req.body)) {
    req.body.forEach((el) => {
      if (el.hasOwnProperty("totalItem")) {
        items.push({
          descripcion: el.descripcion,
          precio: el.precio,
          total_item: el.totalItem,
          cantidad: el.cantidad,
          nro_remito: el.nroRemito,
          cliente_id: el.clienteId,
          cliente_nombre: el.clienteNombre ? el.clienteNombre : ""
        });
      }

      if (el.hasOwnProperty("cantidadTotalItems")) {
        totales.push(el.cantidadTotalItems, el.cantidadTotalRemito);
      }
    });
  }

  const repoClientes =
    AppDataSource.getRepository<Cliente>("Cliente");

  let query = `SELECT * FROM Clientes WHERE id = $1 OR cliente_nombre like $2`
  cliente = await repoClientes.query(query, [items[0].cliente_id, '%' + items[0].cliente_nombre + '%']);

  if (cliente.length === 0) {
    throw new Error("No existe el cliente seleccionado");
    
  }

  const repoRemitosCreados =
    AppDataSource.getRepository<RemitosCreados>("RemitosCreados");
  try {
    const result = await repoRemitosCreados.save(items);

    return res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }

});

export default router;
