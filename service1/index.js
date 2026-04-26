const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

// Page 1
app.get("/page1", (req, res) => {
  res.send(`
    <html>
      <head><title>Page 1</title></head>
      <body>
        <h1>Service 1 - Page 1</h1>
        <p>This is a simple HTML page served by Service 1.</p>
      </body>
    </html>
  `);
});

// Page 2
app.get("/page2", (req, res) => {
  res.send(`
    <html>
      <head><title>Page 2</title></head>
      <body>
        <h1>Service 1 - Page 2</h1>
        <p>Another simple page for testing routing through the gateway.</p>
      </body>
    </html>
  `);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //res.send("Service 1 is running. Try /page1 or /page2");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Service 1 running on port ${PORT}`);
});