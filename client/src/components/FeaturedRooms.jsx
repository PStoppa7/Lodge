const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "R1,250",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    features: ["King Bed", "Free Wi-Fi", "Breakfast Included"],
  },
  {
    id: 2,
    name: "Executive Suite",
    price: "R2,100",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
    features: ["Balcony", "Smart TV", "Mini Bar"],
  },
  {
    id: 3,
    name: "Family Room",
    price: "R1,850",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    features: ["4 Guests", "Kitchenette", "Garden View"],
  },
];

export default function FeaturedRooms() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--terracotta)]">
            Featured Rooms
          </h2>
          <p className="mt-4 text-gray-600">
            Discover our most popular accommodation options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[var(--cream)] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{room.name}</h3>

                <p className="text-[var(--terracotta)] font-bold mt-2">
                  {room.price} / night
                </p>

                <ul className="mt-4 space-y-2 text-gray-600">
                  {room.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <button className="btn-primary w-full mt-6">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}