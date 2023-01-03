import { DataSource } from "typeorm";
import { Cliente } from "../entities/Cliente";
import { RemitosCreados } from "../entities/RemitosCreados";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "XXXXXX",
  port: 5432,
  username: "XXXXXXX",
  password: "XXXXXXXX",
  database: "postgres",
  entities: [Cliente, RemitosCreados],
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
