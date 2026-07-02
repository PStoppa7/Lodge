const stats = [
  {
    number: "15+",
    label: "Luxury Rooms",
  },
  {
    number: "500+",
    label: "Events Hosted",
  },
  {
    number: "10K+",
    label: "Happy Guests",
  },
  {
    number: "4.9★",
    label: "Average Rating",
  },
];

export default function Stats() {
  return (
    <section className="bg-[var(--terracotta)] text-white py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-5xl font-bold">
                {stat.number}
              </h2>

              <p className="mt-3 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}