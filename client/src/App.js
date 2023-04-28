import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./App.css";

function App() {
  const API_KEY = "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";
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const fetchResult = async () => {
    const url = "https://api.openai.com/v1/chat/completions";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: query,
          },
        ],
      }),
    };

    try {
      const response = await fetch(url, options);
      const results = await response.json();
      setResult(results["choices"][0]["message"]["content"]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(query);
    await fetchResult();
  };

  return (
    <div className="App">
      {/* User Input */}
      <div className="user-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your query"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {/* Display Result */}
      <div className="result">
        {result ? (
          <ReactMarkdown markPlugins={[gfm]}>{result}</ReactMarkdown>
        ) : (
          <div>Enter your query to get the result</div>
        )}
      </div>
    </div>
  );
}

export default App;
