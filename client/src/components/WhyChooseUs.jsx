import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
} from "react-icons/fa";

const features = [
  {
    icon: <FaWifi size={40} />,
    title: "Free High-Speed Wi-Fi",
    description: "Stay connected throughout your stay.",
  },
  {
    icon: <FaSwimmingPool size={40} />,
    title: "Luxury Pool",
    description: "Relax and enjoy our beautiful swimming pool.",
  },
  {
    icon: <FaParking size={40} />,
    title: "Secure Parking",
    description: "Free secure parking for all guests.",
  },
  {
    icon: <FaUtensils size={40} />,
    title: "Restaurant",
    description: "Enjoy freshly prepared meals every day.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[var(--terracotta)]">
            Why Choose MyLodge?
          </h2>

          <p className="mt-4 text-gray-600">
            Luxury accommodation with exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--cream)] rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition"
            >
              <div className="text-[var(--terracotta)] flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}