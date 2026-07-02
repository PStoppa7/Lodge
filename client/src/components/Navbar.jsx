import { Link } from "react-router-dom";
import { FaBed, FaCalendarAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-3xl font-bold text-[var(--terracotta)]"
        >
          MyLodge
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-3">
          <button className="btn-primary flex items-center gap-2">
            <FaBed />
            Book Room
          </button>

          <button className="border rounded-xl px-4 py-2 flex items-center gap-2">
            <FaCalendarAlt />
            Event
          </button>
        </div>
      </div>
    </nav>
  );
}