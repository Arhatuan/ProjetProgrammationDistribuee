const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

const db = require("./db");

// GET all
app.get("/lemons", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM lemons");
  res.json(rows);
});

// GET one
app.get("/lemons/:id", async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM lemons WHERE id = ?",
    [req.params.id]
  );

  res.json(rows[0]);
});

// CREATE
app.post("/lemons", async (req, res) => {
  const { name, description } = req.body;

  const [result] = await db.query(
    "INSERT INTO lemons (name, description) VALUES (?, ?)",
    [name, description]
  );

  res.json({ id: result.insertId });
});

// UPDATE
app.put("/lemons/:id", async (req, res) => {
  const { name, description } = req.body;

  await db.query(
    "UPDATE lemons SET name=?, description=? WHERE id=?",
    [name, description, req.params.id]
  );

  res.json({ message: "updated" });
});

// DELETE
app.delete("/lemons/:id", async (req, res) => {
  await db.query("DELETE FROM lemons WHERE id=?", [req.params.id]);

  res.json({ message: "deleted" });
});

// "Database" (in-memory array)
// let items = [
//   { id: 1, name: "Item One" },
//   { id: 2, name: "Item Two" }
// ];

// // GET all items
// app.get("/items", (req, res) => {
//   res.json(items);
// });

// // GET item by ID
// app.get("/items/:id", (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).json({ error: "Not found" });
//   res.json(item);
// });

// // CREATE item
// app.post("/items", (req, res) => {
//   if (!req.body.name){
//     res.status(400).json({ error : "Need a 'name' attribute"});
//     return;
//   }
  
//   const newItem = {
//       id: items.length + 1,
//       name: req.body.name
//   };
  
//   items.push(newItem);
//   res.status(201).json(newItem);
// });

// // DELETE item
// app.delete("/items/:id", (req, res) => {
//   items = items.filter(i => i.id !== parseInt(req.params.id));
//   res.json({ message: "Deleted" });
// });

app.listen(PORT, () => {
  console.log(`Service 2 running on port ${PORT}`);
});