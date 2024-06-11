import React from "react";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import data from "./data";

export default function App() {
  const articles = data.map((item) => {
    if (item.id === data.length) {
      return <Article {...item} />;
    } else {
      return (
        <>
          <Article {...item} />
          <hr className="section--div" />
        </>
      );
    }
  });

  return (
    <div className="App">
      <Navbar />
      {articles}
    </div>
  );
}
