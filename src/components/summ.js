import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// A simple function to tokenize text into sentences

function tokenize(text) {
  return text.split(/[.!?]/).filter(Boolean).map((sentence) => sentence.trim());
}

const Summarizer = () => {

  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSummarize = () => {
    // Tokenize the text into sentences
    const sentences = tokenize(text);

    // Count word frequency
    const wordFrequency = {};
    sentences.forEach((sentence) => {
      const words = sentence.split(' ');
      words.forEach((word) => {
        word = word.toLowerCase();
        if (!wordFrequency[word]) {
          wordFrequency[word] = 0;
        }
        wordFrequency[word]++;
      });
    });

    // Sort words by frequency
    const sortedWords = Object.keys(wordFrequency).sort(
      (a, b) => wordFrequency[b] - wordFrequency[a]
    );

    // Generate summary by taking the most frequent words
    const summaryWords = sortedWords.slice(0, 10); // Adjust the number of words for your desired summary length
    const summarizedText = summaryWords.join(' ');

    setSummary(summarizedText);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Summarization Tool</h2>
      <textarea
        className="w-full h-32 px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        value={text}
        onChange={handleChange}
        placeholder="Enter text to summarize..."
      ></textarea>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={handleSummarize}
      >
        Summarize
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Summary:</h3>
        <p className="mt-2">{summary}</p>
      </div>
    </div>
  );
};

export default Summarizer;
