export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg text-gray-700 mb-4">
        Want to collaborate or hire me? Let’s talk!
      </p>
      <ul className="space-y-2">
        <li>
          <strong>Email:</strong> mashhang@example.com
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/mashhang"
            className="text-blue-600 hover:underline"
          >
            github.com/mashhang
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a href="#" className="text-blue-600 hover:underline">
            (your link here)
          </a>
        </li>
      </ul>
    </section>
  );
}
