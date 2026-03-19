import { motion } from "framer-motion";
import { useState } from "react";

const motos = [
  {
    name: "Pulsar NS200",
    price: "$58,000",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600"
  },
  {
    name: "Dominar 400",
    price: "$95,000",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600"
  },
  {
    name: "Pulsar RS200",
    price: "$70,000",
    img: "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=600"
  }
];

const refacciones = [
  {
    name: "Casco",
    price: "$800",
    img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400"
  },
  {
    name: "Aceite",
    price: "$250",
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3fef7c35?w=400"
  },
  {
    name: "Frenos",
    price: "$300",
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1c?w=400"
  }
];

export default function App() {
  const [tab, setTab] = useState("motos");

  return (
    <div className="text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-500">BAJAJ ZACUALTIPAN</h1>
        <div className="flex gap-6">
          <button onClick={() => setTab("motos")} className="hover:text-blue-500">Motos</button>
          <button onClick={() => setTab("refacciones")} className="hover:text-blue-500">Refacciones</button>
        </div>
      </div>

      {/* HERO */}
      <div className="h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-5xl font-bold">AGENCIA BAJAJ</h2>
        <p className="text-gray-400 mt-2">Potencia, diseño y rendimiento</p>
      </div>

      {/* GRID */}
      <div className="p-6 grid md:grid-cols-3 gap-6">

        {(tab === "motos" ? motos : refacciones).map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={item.img} className="w-full h-48 object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-blue-500 font-bold">{item.price}</p>

              <a
                href={`https://wa.me/521XXXXXXXXXX?text=Me interesa ${item.name}`}
                target="_blank"
              >
                <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded">
                  Consultar
                </button>
              </a>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}
