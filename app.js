//TODO:
// 1. Add Validation
// 2. Check if the user id is valid or not
// 3. Alter response messages of create, delete and update

const Hapi = require("hapi");
const { gigRoutes } = require("./routes/gigRoutes");
const db = require("./utils/database");

db.authenticate()
  .then((res) => console.log("Database connected"))
  .catch((err) => console.log(err));

const server = new Hapi.Server();

server.connection({
  host: "0.0.0.0",
  port: 8080,
});

server.route(gigRoutes);

server.start((err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server is listening in ${server.info.uri}`);
});

process.on("unhandledRejection", (err) => {
  if (err) {
    console.log(err);
  }
});
