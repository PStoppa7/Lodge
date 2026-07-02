import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 container-custom h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <p className="uppercase tracking-[6px] text-[var(--gold)]">
            Luxury Lodge & Event Venue
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mt-5 leading-tight">
            Where Comfort Meets
            <span className="text-[var(--terracotta)]">
              {" "}Elegance
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-200">
            Stay in luxurious rooms, celebrate unforgettable events,
            and experience exceptional hospitality—all in one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-primary">
              Book a Room
            </button>

            <button className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition">
              Book an Event
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}