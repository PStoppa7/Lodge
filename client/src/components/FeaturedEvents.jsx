const events = [
  {
    id: 1,
    title: "Wedding Reception",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    description: "Elegant indoor and outdoor wedding venues.",
    capacity: "Up to 300 Guests",
  },
  {
    id: 2,
    title: "Corporate Conference",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    description: "Professional conference facilities with catering.",
    capacity: "Up to 200 Guests",
  },
  {
    id: 3,
    title: "Birthday Celebration",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80",
    description: "Celebrate birthdays in style with custom décor.",
    capacity: "Up to 150 Guests",
  },
];

export default function FeaturedEvents() {
  return (
    <section className="section bg-[var(--cream)]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--terracotta)]">
            Featured Events
          </h2>

          <p className="mt-4 text-gray-600">
            Host unforgettable occasions at MyLodge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {event.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {event.description}
                </p>

                <p className="mt-4 font-semibold text-[var(--terracotta)]">
                  {event.capacity}
                </p>

                <button className="btn-primary w-full mt-6">
                  Book Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}