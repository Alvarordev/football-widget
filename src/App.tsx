import { useEffect, useState } from "react";
import { getMatches } from "./services/getMatches";
import { formatDate, formatHour } from "./lib/utils";

function App() {
  const [match, setMatch] = useState<Match>();

  useEffect(() => {
    const getData = async () => {
      const data = await getMatches();

      setMatch(data[0]);
    };

    getData();
  }, []);

  if (!match) return <p>No hay partidos</p>;

  return (
    <>
      <div className="font-regular max-w-96 flex flex-col justify-center items-center border border-[hsl(0,0%,98%)] m-2 py-4 px-2 bg-[hsl(0,0%,9%)] text-[hsl(0,0%,98%)]">
        <header className="flex flex-col items-center pb-2">
          <h1 className="text-md font-medium">{formatDate(match.utcDate)}</h1>
          <h2 className="text-xs uppercase">{match.competition.name}</h2>
        </header>

        <main className="w-full grid grid-cols-8 items-center">
          <div className="col-span-3 flex flex-col justify-center items-center w-full">
            <div>
              <img src={match.homeTeam.crest} alt="" className="h-full w-16" />
            </div>

            <div className="font-bold">
              <p>{match.homeTeam.shortName}</p>
            </div>
          </div>

          <div className="col-span-2 flex justify-center w-full border py-2">
            <p className="text-xl font-bold">{formatHour(match.utcDate)}</p>
          </div>

          <div className="col-span-3 flex flex-col justify-center items-center w-full">
            <div>
              <img src={match.awayTeam.crest} alt="" className="h-full w-16" />
            </div>

            <div className="font-bold">
              <p>{match.awayTeam.shortName}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
