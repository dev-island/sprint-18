const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "admin",
    password: "admin",
    database: "test",
  },
});

const createTable = async () => {
  const hasTable = await knex.schema.hasTable("users");
  if (!hasTable) {
    await knex.schema.createTable("users", function (table) {
      table.increments(); // integer id
      // name
      table.string("name");
    });
  }
  return;
};

const seedDb = async () => {
  await knex("users").insert([
    { name: "Andrew" },
    { name: "Christian" },
    { name: "Ian" },
    { name: "Karin" },
    { name: "Katie" },
    { name: "Layden" },
  ]);
}

const listUsers = async () => {
  const users = await knex.select("name").from("users");
  console.log(users);
}

const main = async () => {
  await createTable();
  await seedDb();
  await listUsers();

  // Drop table on process exit
  process.on("exit", async () => {
    await knex.schema.dropTable("users");
    await knex.destroy();
  });
}

main();