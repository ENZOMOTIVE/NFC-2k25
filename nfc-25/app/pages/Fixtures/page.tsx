import Link from "next/link";

export default function Fixtures() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6">Fixtures</h1>
      <p className="text-lg mb-4">Check out the schedule for Kurushetra 2k24 - Enigma Football Cup!</p>
      
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-red-500">
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Teams</th>
              <th className="py-2 px-4 border-b">Venue</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Fixtures (Replace with dynamic data) */}
            <tr>
              <td className="py-2 px-4 border-b">March 15, 2024</td>
              <td className="py-2 px-4 border-b">10:00 AM</td>
              <td className="py-2 px-4 border-b">Team A vs Team B</td>
              <td className="py-2 px-4 border-b">Stadium 1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">March 16, 2024</td>
              <td className="py-2 px-4 border-b">12:00 PM</td>
              <td className="py-2 px-4 border-b">Team C vs Team D</td>
              <td className="py-2 px-4 border-b">Stadium 2</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <Link href="/">
        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md border border-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
}