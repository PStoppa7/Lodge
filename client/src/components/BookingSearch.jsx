import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function BookingSearch() {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    roomType: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking Search", form);

    alert("Booking system will be connected in Sprint 8.");
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 -mt-20 relative z-20 max-w-6xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-5 gap-5"
      >
        <div>
          <label className="font-semibold">
            Check In
          </label>

          <input
            type="date"
            name="checkIn"
            className="w-full border rounded-xl p-3 mt-2"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-semibold">
            Check Out
          </label>

          <input
            type="date"
            name="checkOut"
            className="w-full border rounded-xl p-3 mt-2"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-semibold">
            Guests
          </label>

          <input
            type="number"
            min="1"
            max="10"
            name="guests"
            value={form.guests}
            className="w-full border rounded-xl p-3 mt-2"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="font-semibold">
            Room Type
          </label>

          <select
            name="roomType"
            className="w-full border rounded-xl p-3 mt-2"
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option>Standard</option>
            <option>Deluxe</option>
            <option>Executive</option>
            <option>Family</option>
            <option>Honeymoon Suite</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            className="btn-primary w-full flex justify-center items-center gap-3"
          >
            <FaSearch />

            Search
          </button>
        </div>
      </form>
    </div>
  );
}