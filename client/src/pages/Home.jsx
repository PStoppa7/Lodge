import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import FeaturedEvents from "../components/FeaturedEvents";
import FeaturedRooms from "../components/FeaturedRooms";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import BookingSearch from "../components/BookingSearch";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
       <BookingSearch />


      <section className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-[var(--terracotta)]">
            Welcome to MyLodge
          </h2>

         

          <p className="mt-6 max-w-3xl mx-auto text-lg">
            MyLodge is a premium destination offering luxury accommodation,
            beautiful event spaces, exceptional dining, and unforgettable
            experiences for every guest.
          </p>
        </div>
      </section>
 <FeaturedRooms />

<FeaturedEvents />
<FeaturedEvents />

    </MainLayout>
  );
}