// ✏️ EDIT PRODUK & ULASAN DI SINI, lalu commit & push. Database dibuat otomatis saat build.
// image: file di public/images (contoh "/images/kemeja.jpg") atau URL penuh.
import Database from "better-sqlite3";
import fs from "node:fs";

const products = [
  { name: "Kemeja Batik Tulis Tanahan", tag: "Kemeja Batik Tulis", description: "Bahan Katun Halus adem berfuring, Meningkatkan kepercayaan diri.", price: 425000, image: "/images/1.jpg", shopee: "https://shopee.co.id/sandangandalan" },
   { name: "Kemeja Batik Tulis Tanahan", tag: "Kemeja Batik Tulis", description: "Bahan Katun Halus adem berfuring, Meningkatkan kepercayaan diri.", price: 425000, image: "/images/2.jpg", shopee: "https://shopee.co.id/sandangandalan" },
    { name: "Kemeja Batik Tulis Tanahan", tag: "Kemeja Batik Tulis", description: "Bahan Katun Halus adem berfuring, Meningkatkan kepercayaan diri.", price: 425000, image: "/images/3.jpg", shopee: "https://shopee.co.id/sandangandalan" },
     { name: "Kain Batik Cap Primisshima", tag: "Kain Batik Cap", description: "Bahan Katun Primisshima, proses cap, ukuran 110 x 200 cm.", price: 95000, image: "/images/kain1.png", shopee: "https://shopee.co.id/sandangandalan" },
      { name: "Kain Batik Cap Primisshima", tag: "Kain Batik Cap", description: "Bahan Katun Primisshima, proses cap, ukuran 110 x 200 cm.", price: 79000, image: "/images/kain2.jpg", shopee: "https://shopee.co.id/sandangandalan" },
      { name: "Kain Batik Cap Primisshima", tag: "Kain Batik Cap", description: "Bahan Katun Primisshima, proses cap, ukuran 110 x 200 cm.", price: 86000, image: "/images/kain3.jpg", shopee: "https://shopee.co.id/sandangandalan" },
       { name: "Sarung Batik Semi Tulis", tag: "Sarung Batik", description: "Bahan Katun Primisshima, proses cap semi tulis, ukuran 120 x 220 cm.", price: 285000, image: "/images/sarung1.jpg", shopee: "https://shopee.co.id/sandangandalan" },
 { name: "Sarung Batik Semi Tulis", tag: "Sarung Batik", description: "Bahan Katun Primisshima, proses cap semi tulis, ukuran 120 x 220 cm.", price: 285000, image: "/images/sarung2.jpg", shopee: "https://shopee.co.id/sandangandalan" },
 { name: "Sarung Batik Semi Tulis", tag: "Sarung Batik", description: "Bahan Katun Primisshima, proses cap semi tulis, ukuran 120 x 220 cm.", price: 199000, image: "/images/sarung3.jpg", shopee: "https://shopee.co.id/sandangandalan" },
];

// ⚠️ Ini hanya CONTOH. Ganti dengan ulasan asli pembeli dari Shopee.
const reviews = [
  { name: "Ryan", rating: 5, product: "Sarung Batik Semi Tulis", text: "Sip gan, beli ketiga kalinya dan barangnya selalu jozz tidak mengecewakan, sukses selalu.", date: "2026-11-01" },
  { name: "Fatmawati 001", rating: 4, product: "Kain Batik Cap", text: "trims..Kainnya bagus sekali sesuai foto.", date: "2026-10-22" },
  { name: "Nama Pembeli", rating: 5, product: "Kemeja Tulis", text: "Mantapp kemejanya sesuai dengan harganya, bahannya full batik tulis, juga adem dipakai.. jahitan rapi. thankss", date: "2026-10-10" },
];

fs.mkdirSync("data", { recursive: true });
fs.rmSync("data/showcase.db", { force: true });
const db = new Database("data/showcase.db");
db.exec(`
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, tag TEXT, description TEXT,
  price INTEGER, image_url TEXT, shopee_url TEXT NOT NULL
);
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, rating INTEGER NOT NULL,
  product TEXT, text TEXT NOT NULL, date TEXT
);`);
const ip = db.prepare("INSERT INTO products (name, tag, description, price, image_url, shopee_url) VALUES (?,?,?,?,?,?)");
for (const p of products) ip.run(p.name, p.tag, p.description, p.price, p.image, p.shopee);
const ir = db.prepare("INSERT INTO reviews (name, rating, product, text, date) VALUES (?,?,?,?,?)");
for (const r of reviews) ir.run(r.name, r.rating, r.product, r.text, r.date);
console.log(`Seeded ${products.length} products, ${reviews.length} reviews`);
