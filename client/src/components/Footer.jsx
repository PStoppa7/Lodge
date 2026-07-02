export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] text-white mt-20">
      <div className="container-custom py-12">
        <h2 className="text-3xl font-bold text-[var(--terracotta)]">
          MyLodge
        </h2>

        <p className="mt-3 text-gray-300">
          Luxury accommodation & unforgettable events.
        </p>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} MyLodge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}