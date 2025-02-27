export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-900">Andii – Connecting Academia</h1>
        <p className="text-lg mt-4 text-gray-700">Discover research collaborations & secure funding.</p>
        <a
          href="#"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600"
        >
          Join the Waitlist
        </a>
      </main>
    </div>
  );
}
