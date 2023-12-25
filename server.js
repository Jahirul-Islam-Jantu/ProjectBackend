const express = require("express");

const app = express();

const books = [
  {
    id: 1,
    name: "Book 1",
    price: 100,
  },
  {
    id: 2,
    name: "Book 2",
    price: 200,
  },
  {
    id: 3,
    name: "Book 3",
    price: 300,
  },
  {
    id: 4,
    name: "Book 4",
    price: 400,
  },
  {
    id: 5,
    name: "Book 5",
    price: 500,
  },
  {
    id: 6,
    name: "Book 6",
    price: 600,
  },
  {
    id: 7,
    name: "Book 7",
    price: 700,
  },
  {
    id: 8,
    name: "Book 8",
    price: 800,
  },
  {
    id: 9,
    name: "Book 9",
    price: 900,
  },
  {
    id: 10,
    name: "Book 10",
    price: 1000,
  },
];

app.get("/books", (req, res) => {
  if (req.query.show === "all") {
    return res.json(books);
  } else if (req.query.price == "500") {
    const underFiveH = books.filter((books) => books.price <= 500);
    return res.json(underFiveH);
  } else if (req.query.price == "1000") {
    const underThousand = books.filter((books) => books.price <= 1000);
    return res.json(underThousand);
  }
});

app.listen(8000, () => {
  console.log("server is listening from port 8000");
});
