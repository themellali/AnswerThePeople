import axios from "axios";
import { useState } from "react";

const AnswerThePublic = () => {
  const [keywords, setKeywords] = useState([]);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://ai-google-keyword-research.p.rapidapi.com/keyword-research",
    params: {
      keyword: userInput,
      country: "us",
    },
    headers: {
      "x-rapidapi-key": "d81c479276msh95deb4555dbd7ddp19fdeajsn80251b13a20a",
      "x-rapidapi-host": "ai-google-keyword-research.p.rapidapi.com",
    },
  };

  const readMind = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      const result = response.data.result;
      setKeywords(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

// const readMind = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.request(options);
//       setKeywords(response.data.result);
//       console.log(response.data.result);
//     } catch (error) {
//       console.error(error);
//     }
//     setLoading(false);
//   };


{/* <div className="bg-zinc-200/15 dark:bg-zinc-800/40 p-5 flex flex-col h-64 rounded-lg gap-3 ring-1 ring-inset ring-zinc-600/10">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">How</h1>
            <div
              className="tooltip tooltip-left tooltip-primary"
              data-tip="All keywords that consists of the word 'how'"
            >
              <CircleHelp className="size-5" />
            </div>
          </div>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias
            adipisci sit asperiores ea nesciunt illum iusto, inventore vitae
            harum in assumenda.
          </p>
          <div className="flex justify-between items-center mt-auto">
            <p className="">Total Keywords: {how.length}</p>
            <ArrowRight />
          </div>
</div> */}
  return (
    <div className="dark:text-zinc-50">
      <h1>Search what people are looking for</h1>
      <div className="flex items-center w-full gap-5 mt-5">
        <input
          type="text"
          className="w-72 border border-lime-200 p-3 rounded-lg focus:outline-1 focus:outline-lime-200 dark:bg-zinc-800/40"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          disabled={loading}
          className="p-3 text-lime-900 bg-lime-200 rounded-lg w-28 disabled:bg-lime-100"
          onClick={readMind}
        >
          Search
        </button>
      </div>

      <div className="mt-10 flex flex-col gap-3">
          {keywords.map((keyword, index) => {
            return (
              <div key={index} className="bg-zinc-200 p-3 rounded-e-lg dark:bg-zinc-800/40">
                <p className="text-xl font-bold">{keyword.keyword}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-50/75">Average Monthly Search: {keyword.avg_monthly_searches}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-50/75">Competition Index: {keyword.competition_index}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-50/75">Competition Value: {keyword.competition_value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AnswerThePublic;
