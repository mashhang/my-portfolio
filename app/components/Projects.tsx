export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              General Mathematics Learning Site
            </h3>
            <p className="text-gray-600 mb-4">
              A Next.js app that helps students learn math through adaptive
              exercises and intelligent feedback.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Stack: Next.js, Tailwind, Prisma, Supabase
            </p>
            <a
              href="https://your-project.vercel.app/"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>{" "}
            |
            <a
              href="https://github.com/mashhang/learning"
              className="text-blue-600 hover:underline ml-2"
            >
              GitHub
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">LPG Sales POS System</h3>
            <p className="text-gray-600 mb-4">
              A WPF desktop app for managing LPG sales, user accounts, and
              inventory.
            </p>
            <p className="text-sm text-gray-500 mb-2">Stack: C#, WPF, MVVM</p>
            <a
              href="https://github.com/yourusername/lpg-sales-app"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
