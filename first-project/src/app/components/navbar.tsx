
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <div className="space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/jobs" className="hover:text-gray-400">
            Jobs
          </Link>
          <Link href="/jobs/programming" className="hover:text-gray-400">
            Programming Jobs
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}




