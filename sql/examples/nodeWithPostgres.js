const { Client } = require("pg");
const client = new pg.Client({
  user: "admin",
  host: "localhost",
  database: "test",
  password: "admin",
  port: 5432,
});

await client.connect();

console.log(await client.query("SELECT NOW()"));

await client.end();
