// src/pages/Clients.jsx
import adorlogo from "../assets/ador-welding-logo.svg";
import ajaylogo from "../assets/ajay-plumbing-logo.png";
import canterlogo from "../assets/canter-logo.png";
import toyologo from "../assets/Toyo_Engineering_Corporation.jpg";
import godrejlogo from "../assets/godrej.png";

export default function Clients() {
  const clients = [
    { id: 1, image: adorlogo, alt: "Ador Welding" },
    { id: 2, image: ajaylogo, alt: "Ajay Plumbing" },
    { id: 3, image: godrejlogo, alt: "Godrej" },
    { id: 4, image: canterlogo, alt: "Canter" },
    { id: 5, image: toyologo, alt: "Toyo Engineering" },
  ];

  return (
    <section
      id="clients"
      className="min-h-screen flex flex-col items-center justify-center bg-pink-100 px-6 py-12"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-800">
        Our Clients
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center w-full max-w-7xl">
        {clients.map((client) => (
          <div
            key={client.id}
            className="p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            <img
              src={client.image}
              alt={client.alt}
              className="max-h-20 sm:max-h-24 md:max-h-28 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
