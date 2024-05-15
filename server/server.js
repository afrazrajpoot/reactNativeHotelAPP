const app = require("./app");
const connection = require("./db/connection");
const PORT = process.env.PORT;
connection();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
