import Link from "next/link"
import { Scroll } from "lucide-react"

export default function Rules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white flex flex-col items-center py-10 px-4 relative overflow-hidden">
      {/* Background pattern - same as fixtures page */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Cpath d=%22M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%22 fill-opacity=%22.05%22 fill=%22%23fff%22/%3E%3C/svg%3E')] opacity-20"></div>

      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-extrabold flex items-center relative mb-6">
        <Scroll className="mr-3 w-8 h-8 md:w-12 md:h-12" />
        <span className="relative">Tournament Rules</span>
      </h1>

      <p className="text-lg md:text-xl mb-8 text-center max-w-3xl">
        Official rules for Kurushetra 2k24 - Enigma Football Cup
      </p>

      {/* Rules Container */}
      <div className="w-full max-w-4xl relative overflow-hidden bg-red-900 bg-opacity-20 rounded-lg p-6 md:p-8 shadow-xl backdrop-blur-sm">
        <ol className="list-decimal list-inside space-y-4 text-lg md:text-xl">
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Each match consists of two halves of 30 minutes each.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Teams must arrive at least 30 minutes before their match.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Players must wear official team uniforms.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            No foul play or unsportsmanlike conduct will be tolerated.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Referee decisions are final and cannot be challenged.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Any team arriving more than 15 minutes late will forfeit the match.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Substitutions must be made only at designated stoppages.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            Yellow and red card offenses will be strictly enforced.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            In case of a tie in knockout rounds, penalty shootouts will decide the winner.
          </li>
          <li className="p-2 hover:bg-red-700 hover:bg-opacity-30 transition-colors rounded">
            All teams must abide by the tournament committee's final decisions.
          </li>
        </ol>
      </div>

      {/* Back Button */}
      <Link href="/" className="mt-8 md:mt-12 bg-red-600 hover:bg-white text-white hover:text-red-600 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl shadow-lg transition-colors duration-300 inline-flex items-center group">
        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300">&larr; Back to Home</span>
      </Link>
    </div>
  )
}

