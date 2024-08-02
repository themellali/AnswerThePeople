import { SunMoon, Moon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col h-screen bg-zinc-50 text-zinc-900 dark:text-zinc-50 dark:bg-zinc-900">
        <div className="flex flex-1 overflow-hidden dark:text-zinc-50">
          <div className="flex flex-col border-r border-zinc-800/10 dark:border-zinc-300/10 p-5 w-16">
            <div className="pt-2">
              {/* <BrainCircuit className="size-8"/> */}
            </div>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex sticky top-0 z-50 justify-between items-center px-5 py-3 backdrop-blur-xl border-b border-zinc-800/10 dark:border-zinc-300/10 ">
              <h1 className="text-lg font-bold">Dashboard</h1>
              <div className="flex justify-between gap-5 items-center">
                <h1
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-sm rounded-xl"
                >
                  {darkMode ? <SunMoon /> : <Moon />}
                </h1>
                <Link to="/answer-the-people"><h1 className="font-bold text-sm">AnswerThePublic</h1></Link>
              </div>
            </div>

            <div className="p-5">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
