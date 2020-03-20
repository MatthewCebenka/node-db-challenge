const server = require("./server");

const PORT = process.env.PORT || 8000;

server.get("/", (req, res) => {
  res.send("root");
});

server.listen(PORT, () => {
  console.log(`*****SERVER RUNNING ON PORT ${PORT}`);
});
