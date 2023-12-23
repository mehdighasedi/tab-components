import { useState } from "react";

function Tab() {
  const [activeTab, setActiveTab] = useState("recent");
  const [selectedBtn, setSelectedBtn] = useState("1");
  const btnStyle =
    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 hover:text-white ring-offset-blue-400 focus:outline-none focus:ring-2 text-blue-100  text-gray-200 flex justify-center focus:outline-none font-medium focus:shadow focus:bg-white text-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-400 focus:ring-white/60 focus:text-blue-600 p-2 rounded-xl cursor-pointer hover:bg-white/[0.12] ";
  return (
    <div className="max-w-md flex flex-col gap-y-2 w-full">
      {/* Header */}
      <div className="bg-blue-900/20 p-4 rounded-xl max-w-md gap-x-2  flex justify-between items-center">
        <button
          onClick={() => {
            setActiveTab("recent"), setSelectedBtn("1");
          }}
          className={`${btnStyle} ${
            selectedBtn === "1" && "bg-white text-blue-800 hover:bg-white "
          }`}
        >
          Recent
        </button>
        <button
          onClick={() => {
            setActiveTab("popular"), setSelectedBtn("2");
          }}
          className={`${btnStyle} ${
            selectedBtn === "2" && "bg-white text-blue-800 hover:bg-white "
          }`}
        >
          Popular
        </button>
        <button
          onClick={() => {
            setActiveTab("trending"), setSelectedBtn("3");
          }}
          className={`${btnStyle} ${
            selectedBtn === "3" && "bg-white text-blue-800 hover:bg-white"
          }`}
        >
          Trending
        </button>
        {/* Content 1*/}
      </div>
      <div className="w-full p-2 bg-white rounded-xl shadow-xl">
        <div className={activeTab === "recent" ? "block" : "hidden"}>
          <div className="p-4  text-gray-700 focus:ring-2 ring-blue-500 cursor-pointer hover:bg-gray-200 rounded-lg">
            <p>Does drinking coffee make you smarter?</p>
            <p className="text-xs text-gray-400">
              5h ago &bull; 5 comments &bull; 2 shares
            </p>
          </div>
          <div className="p-4 text-gray-700 focus:ring-2 ring-blue-500 cursor-pointer hover:bg-gray-200 rounded-lg">
            <p>So you've bought coffee... now what?</p>
            <p className="text-xs text-gray-400">
              2h ago &bull; 3 comments &bull; 2 shares
            </p>
          </div>
        </div>
        {/* Content 2*/}
        <div className={activeTab === "popular" ? "block" : "hidden"}>
          <button className="p-4 text-gray-700 focus:ring-2 focus:ring-blue-500 cursor-pointer hover:bg-gray-200 rounded-lg">
            <p>Is tech making coffee better or worse?</p>
            <p className="text-xs text-gray-400 flex flex-start">
              Jan 7 &bull; 29 comments &bull; 16 shares
            </p>
          </button>
          <div className="p-4 text-gray-700 focus:ring-2 ring-blue-500 cursor-pointer hover:bg-gray-200 rounded-lg">
            <p>The most innovative things happening in coffee</p>
            <p className="text-xs text-gray-400">
              Mar 19 &bull; 24 comments &bull; 12 shares
            </p>
          </div>
        </div>
        {/* Content 3*/}
        <div className={activeTab === "trending" ? "block" : "hidden"}>
          <div className="p-4 text-gray-700 focus:ring-2 ring-blue-500 cursor-pointer hover:bg-gray-200 rounded-lg">
            <p>Ask Me Anything: 10 answers to your questions about coffee</p>
            <p className="text-xs text-gray-400">
              2d ago &bull; 9 comments &bull; 5 shares
            </p>
          </div>
          <div className="p-4 text-gray-700 focus:ring-2 ring-blue-500 cursor-pointer hover:bg-gray-200 rounded-lg">
            <p>The worst advice we've ever heard about coffee</p>
            <p className="text-xs text-gray-400">
              4d ago &bull; 1 comments &bull; 2 shares
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
