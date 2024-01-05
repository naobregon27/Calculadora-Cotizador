const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const  loadDB  = require("./loadDB.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    await loadDB()
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));