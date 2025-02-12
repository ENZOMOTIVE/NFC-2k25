import Link from "next/link"
import { Trophy } from "lucide-react"

export default function Fixtures() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22 fill-opacity=%22.05%22 fill=%22%23fff%22/%3E%3C/svg%3E')] opacity-20"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold flex items-center relative mb-6">
        <Trophy className="mr-3 w-8 h-8 md:w-12 md:h-12" />
        <span className="relative">Fixtures</span>
      </h1>

    

      {/* Group A Table */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Group A</h2>
      <div className="w-full max-w-4xl relative overflow-hidden group mb-12">
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="py-3 md:py-4 px-4 md:px-6 bg-red-600 text-white rounded-tl-lg text-base md:text-lg font-bold">Date</th>
          <th className="py-3 md:py-4 px-4 md:px-6 bg-red-600 text-white text-base md:text-lg font-bold">Time</th>
          <th className="py-3 md:py-4 px-4 md:px-6 bg-red-600 text-white rounded-tr-lg text-base md:text-lg font-bold">Teams</th>
        </tr>
      </thead>
      <tbody className="text-gray-100 font-semibold">
        {[
          { date: "Feb 13, 2025", time: " - ", teams: "SU vs NIST B" },
          { date: "Feb 13, 2025", time: " - ", teams: "NIST A vs Winner of Match 1" },
        ].map((fixture, index) => (
          <tr
            key={index}
            className={`border-b border-red-200 border-opacity-20 ${
              index % 2 === 0
                ? "bg-red-900 bg-opacity-20"
                : "bg-red-800 bg-opacity-20"
            } hover:bg-red-700 hover:bg-opacity-30 transition-colors`}
          >
            <td className="py-3 md:py-4 px-4 md:px-6">{fixture.date}</td>
            <td className="py-3 md:py-4 px-4 md:px-6">{fixture.time}</td>
            <td className="py-3 md:py-4 px-4 md:px-6">{fixture.teams}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      {/* Group B Table */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Group B</h2>
      <div className="w-full max-w-4xl relative overflow-hidden group">
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="py-3 md:py-4 px-4 md:px-6 bg-red-600 text-white rounded-tl-lg text-base md:text-lg font-bold">Date</th>
          <th className="py-3 md:py-4 px-4 md:px-6 bg-red-600 text-white text-base md:text-lg font-bold">Time</th>
          <th className="py-3 md:py-4 px-4 md:px-6 bg-red-600 text-white rounded-tr-lg text-base md:text-lg font-bold">Teams</th>
        </tr>
      </thead>
      <tbody className="text-gray-100 font-semibold">
        {[
          { date: "Feb 13, 2025", time: "4:00 AM", teams: "PMEC vs KK" },
          { date: "Feb 14, 2025", time: "7:30 AM", teams: "IISER vs Winner of Match 1" },
        ].map((fixture, index) => (
          <tr
            key={index}
            className={`border-b border-red-200 border-opacity-20 ${
              index % 2 === 0
                ? "bg-red-900 bg-opacity-20"
                : "bg-red-800 bg-opacity-20"
            } hover:bg-red-700 hover:bg-opacity-30 transition-colors`}
          >
            <td className="py-3 md:py-4 px-4 md:px-6">{fixture.date}</td>
            <td className="py-3 md:py-4 px-4 md:px-6">{fixture.time}</td>
            <td className="py-3 md:py-4 px-4 md:px-6">{fixture.teams}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-center text-lg font-semibold mt-4">Fixtures for semifinals will be declared soon</p>
  </div>
</div>


      <Link href="/" className="mt-8 md:mt-12 bg-red-600 hover:bg-white text-white hover:text-red-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl shadow-lg transition-colors duration-300 inline-flex items-center group">
  <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300">&larr; Back to Home</span>
</Link>

    </div>
  )
}