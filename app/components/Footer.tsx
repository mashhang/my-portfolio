import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-700 mt-16 px-4 py-8 text-sm text-neutral-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} Paul Edrel B. King. All rights reserved.
        </div>

        <div className="flex gap-4">
          <Link
            href="https://github.com/paulking"
            className="hover:text-white transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/paulking"
            className="hover:text-white transition"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
