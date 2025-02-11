import Link from "next/link";

export default function Rules() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">Tournament Rules</h1>
      <p className="text-lg mb-4">Here are the official rules for Kurushetra 2k24 - Enigma Football Cup.</p>

      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>Each match consists of two halves of 45 minutes each.</li>
          <li>Teams must arrive at least 30 minutes before their match.</li>
          <li>Players must wear official team uniforms.</li>
          <li>No foul play or unsportsmanlike conduct will be tolerated.</li>
          <li>Referee decisions are final and cannot be challenged.</li>
          <li>Any team arriving more than 15 minutes late will forfeit the match.</li>
          <li>Substitutions must be made only at designated stoppages.</li>
          <li>Yellow and red card offenses will be strictly enforced.</li>
          <li>In case of a tie in knockout rounds, penalty shootouts will decide the winner.</li>
          <li>All teams must abide by the tournament committee’s final decisions.</li>
        </ol>
      </div>

      <Link href="/">
        <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md border border-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
