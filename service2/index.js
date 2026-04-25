const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

// "Database" (in-memory array)
let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" }
];

// GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

// CREATE item
app.post("/items", (req, res) => {
  if (!req.body.name){
    res.status(400).json({ error : "Need a 'name' attribute"});
    return;
  }
  
  const newItem = {
      id: items.length + 1,
      name: req.body.name
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE item
app.delete("/items/:id", (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Service 2 running on port ${PORT}`);
});