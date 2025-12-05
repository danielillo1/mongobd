use("bd_py");


db.telefono.updateOne(
    { Modelo: "iPhone 16 Pro Max" },
    { $set: { Marca: "Apple Inc." } }
);

db.telefono.updateOne(
    { Modelo: "Galaxy S25 Ultra" },
    { $set: { Año: 2026 } }
);


db.videojuegos.updateOne(
    { Título: "The Legend of Zelda: Tears of the Kingdom" },
    { $set: { Año: 2025 } }
);

db.videojuegos.updateOne(
    { Título: "Elden Ring" },
    { $set: { Plataforma: "PlayStation 5, Xbox Series X, PC, Switch" } }
);


db.audifonos.updateOne(
    { Modelo: "AirPods Max" },
    { $set: { Marca: "Apple Inc." } }
);

db.audifonos.updateOne(
    { Modelo: "Sony WH-1000XM5" },
    { $set: { Tipo: "Over-ear, Cancelación de Ruido" } }
);


db.tenis.updateOne(
    { Modelo: "Nike Air Zoom Pegasus 40" },
    { $set: { Tipo: "Running", Año: 2025 } }
);

db.tenis.updateOne(
    { Modelo: "Adidas Ultraboost 23" },
    { $set: { Marca: "Adidas AG", Año: 2025 } }
);


db.bloqueador_solar.updateOne(
    { Producto: "Neutrogena Ultra Sheer Dry-Touch Sunscreen SPF 100" },
    { $set: { Tipo: "Gel/Lotion", Año: 2025 } }
);

db.bloqueador_solar.updateOne(
    { Producto: "Banana Boat Ultra Sport Sunscreen Lotion SPF 50" },
    { $set: { Tipo: "Lotion", Marca: "Banana Boat Co." } }
);
