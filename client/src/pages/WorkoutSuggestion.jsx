


import React, { useEffect, useState } from "react";
import { getWorkoutSuggestions } from "../api";

const WorkoutSuggestion = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      const token = localStorage.getItem("fitness"); // Or from context if you use one
      if (!token) {
        setError("No token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const res = await getWorkoutSuggestions(token);
        setSuggestions(res.data.suggestions);
        setLoading(false);
      } catch (err) {
        setError("Error fetching workout suggestions");
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-3">💡 AI Workout Suggestions</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : suggestions.length > 0 ? (
        <ul className="list-disc pl-5">
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : (
        <p>No suggestions available.</p>
      )}
    </div>
  );
};

export default WorkoutSuggestion;

