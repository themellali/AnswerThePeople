import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CircleHelp } from "lucide-react";

const Answer = () => {
  //   const [keywords, setKeywords] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [are, setAre] = useState([]);
  const [can, setCan] = useState([]);
  const [how, setHow] = useState([]);
  const [what, setWhat] = useState([]);

  const options = {
    method: "GET",
    url: "https://ahrefs-keyword-tool.p.rapidapi.com/Question-keyword-research",
    params: {
      keyword: userInput,
      country: "us",
    },
    headers: {
      "x-rapidapi-key": "b7aa1bbad8mshb6ba361a7e1b00ep179bdajsn5f5003c6729e",
      "x-rapidapi-host": "ahrefs-keyword-tool.p.rapidapi.com",
    },
  };

  const readMind = async () => {
    if (userInput === "") {
      alert("please enter a topic");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.request(options);
      const result = response.data;
      setHow(result.how.keywords_data);
      setAre(result.are.keywords_data);
      setCan(result.can.keywords_data);
      setWhat(result.what.keywords_data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="dark:text-zinc-50">
      <h1 className="text-2xl font-bold">
        Search what people are looking for 🧐
      </h1>
      <div className="flex items-center w-full gap-5 mt-5">
        <input
          type="text"
          placeholder="Enter a topic eg. Affiliate Marketing"
          className="w-96 text-sm placeholder:text-sm placeholder:text-zinc-300 bg-zinc-50 outline-none border border-zinc-800/20 p-3 rounded-lg dark:bg-zinc-800/40"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          disabled={loading}
          className="text-lime-950 bg-lime-200 rounded-lg w-28 h-11 disabled:bg-lime-100 font-bold"
          onClick={readMind}
        >
          {loading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <span className="text-sm">Search</span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-10">
        <div className="bg-zinc-200/15 dark:bg-zinc-800/40 p-5 flex flex-col h-56 rounded-lg gap-3 ring-1 ring-inset ring-zinc-600/10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Are</h1>
            <div
              className="tooltip tooltip-left tooltip-primary"
              data-tip="All keywords that consists of the word 'are'"
            >
              <CircleHelp className="size-5" />
            </div>
          </div>
          <div className="flex justify-center flex-1 items-center">
            <p className="text-4xl">
              {are.length} <span className="text-sm">Keywords</span>
            </p>
          </div>
          <div className="flex justify-between items-center flex-row-reverse mt-auto">
            <Link to={`keyword-details/are`}>
              <ArrowRight className="cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className="bg-zinc-200/15 dark:bg-zinc-800/40 p-5 flex flex-col h-56 rounded-lg gap-3 ring-1 ring-inset ring-zinc-600/10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">How</h1>
            <div
              className="tooltip tooltip-left tooltip-primary"
              data-tip="All keywords that consists of the word 'how'"
            >
              <CircleHelp className="size-5" />
            </div>
          </div>
          <div className="flex justify-center flex-1 items-center">
            <p className="text-4xl">
              {how.length} <span className="text-sm">Keywords</span>
            </p>
          </div>
          <div className="flex justify-between items-center flex-row-reverse mt-auto">
            <ArrowRight />
          </div>
        </div>

        <div className="bg-zinc-200/15 dark:bg-zinc-800/40 p-5 flex flex-col h-56 rounded-lg gap-3 ring-1 ring-inset ring-zinc-600/10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Can</h1>
            <div
              className="tooltip tooltip-left tooltip-primary"
              data-tip="All keywords that consists of the word 'can'"
            >
              <CircleHelp className="size-5" />
            </div>
          </div>
          <div className="flex justify-center flex-1 items-center">
            <p className="text-4xl">
              {can.length} <span className="text-sm">Keywords</span>
            </p>
          </div>
          <div className="flex justify-between items-center flex-row-reverse mt-auto">
            <ArrowRight />
          </div>
        </div>

        <div className="bg-zinc-200/15 dark:bg-zinc-800/40 p-5 flex flex-col h-56 rounded-lg gap-3 ring-1 ring-inset ring-zinc-600/10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">What</h1>
            <div
              className="tooltip tooltip-left tooltip-primary"
              data-tip="All keywords that consists of the word 'what'"
            >
              <CircleHelp className="size-5" />
            </div>
          </div>
          <div className="flex justify-center flex-1 items-center">
            <p className="text-4xl">
              {what.length} <span className="text-sm">Keywords</span>
            </p>
          </div>
          <div className="flex justify-between items-center flex-row-reverse mt-auto">
            <ArrowRight />
          </div>
        </div>
      </div>

      {/* Are Table */}
      <div className="mt-16 h-96 overflow-y-auto p-5 border border-zinc-800/10 rounded-lg">
        <h1 className="text-2xl font-bold mb-5">Are Results: </h1>
        <table className="table table-sm">
          <thead className="border-b border-zinc-800/10 rounded-lg ">
            <tr className="border-none">
              <th>Keyword</th>
              <th>Average Monthly Search</th>
              <th>Competition Index</th>
              <th>Competition Value</th>
            </tr>
          </thead>
          <tbody>
            {are.map((key) => {
              return (
                <tr key={key} className="border-zinc-800/15">
                  <td>{key.keyword}</td>
                  <td>{key.avg_monthly_searches}</td>
                  <td>{key.competition_index}</td>
                  <td>{key.competition_value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* How Table */}
      <div className="mt-16 h-96 overflow-y-auto border border-zinc-800/10 rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-5">How Results: </h1>
        <table className="table table-sm">
          <thead className="">
            <tr className="border-none">
              <th>Keyword</th>
              <th>Average Monthly Search</th>
              <th>Competition Index</th>
              <th>Competition Value</th>
            </tr>
          </thead>
          <tbody>
            {how.map((key) => {
              return (
                <tr key={key} className="border-zinc-800/15">
                  <td>{key.keyword}</td>
                  <td>{key.avg_monthly_searches}</td>
                  <td>{key.competition_index}</td>
                  <td>{key.competition_value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Can Table */}
      <div className="mt-16 h-96 overflow-y-auto border border-zinc-800/10 rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-5">Can Results: </h1>
        <table className="table table-sm">
          <thead className="">
            <tr className="border-none">
              <th>Keyword</th>
              <th>Average Monthly Search</th>
              <th>Competition Index</th>
              <th>Competition Value</th>
            </tr>
          </thead>
          <tbody>
            {can.map((key) => {
              return (
                <tr key={key} className="border-zinc-800/15">
                  <td>{key.keyword}</td>
                  <td>{key.avg_monthly_searches}</td>
                  <td>{key.competition_index}</td>
                  <td>{key.competition_value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* What Table */}
      <div className="mt-16 h-96 overflow-y-auto border border-zinc-800/10 rounded-lg p-5">
        <h1 className="text-2xl font-bold mb-5">What Results: </h1>
        <table className="table table-sm">
          <thead className="">
            <tr className="border-none">
              <th>Keyword</th>
              <th>Average Monthly Search</th>
              <th>Competition Index</th>
              <th>Competition Value</th>
            </tr>
          </thead>
          <tbody>
            {what.map((key) => {
              return (
                <tr key={key} className="border-zinc-800/15">
                  <td>{key.keyword}</td>
                  <td>{key.avg_monthly_searches}</td>
                  <td>{key.competition_index}</td>
                  <td>{key.competition_value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Answer;
