import React, { useEffect } from "react";
import { useHackerNews } from "../../myZustand/hackerNews-store";

const HackerNews = () => {
  const { news, loading, errorMessage, fetchNews } = useHackerNews(
    (state) => state
  );
  const [valueFilter, setValueFilter] = React.useState("");
  const handleChange = (e) => {
    setValueFilter(e.target.value);
  };
  React.useEffect(() => {
    fetchNews(valueFilter);
  }, [valueFilter]);
  return (
    <div className="p-5 bg-white rounded-lg max-w-lg mx-auto">
      <div>
        <input
          type="text"
          className="border border-blue-200 mb-[5px] w-full outline-none px-[10px] py-[2px]"
          placeholder="search learn"
          onChange={handleChange}
          value={valueFilter}
        />
      </div>
      {loading && (
        <div className="w-4 h-4 border-2 border-blue-500 rounded-full animate-spin border-t-transparent mx-auto"></div>
      )}
      <div className="flex flex-wrap gap-5">
        <div className="p-3 rounded-xl border border-slate-100">
          {news.map((hit, index) => (
            <div key={index}>
              <li>{hit.title}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackerNews;
