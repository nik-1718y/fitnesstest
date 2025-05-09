
// import React, { useState } from "react";
// import { getYogaByGoal } from "../api";

// const YogaSuggestions = () => {
//   const [goal, setGoal] = useState("");
//   const [yogaList, setYogaList] = useState([]);

//   const fetchYoga = async () => {
//     if (!goal.trim()) {
//       alert("Please enter a goal before fetching workout suggestions.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("fitness");
//       if (!token) {
//         console.error("No token found in localStorage");
//         return;
//       }

//       const data = await getYogaByGoal(token, goal);
//       setYogaList(data);
//     } catch (err) {
//       console.error("Error fetching workout suggestions:", err.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="heading">Workout Advisor</h2>
//       <input
//         type="text"
//         placeholder="Enter your goal (e.g. arm strength)"
//         value={goal}
//         onChange={(e) => setGoal(e.target.value)}
//         className="input"
//       />
//       <button onClick={fetchYoga} className="button">
//         Get Workout Suggestions
//       </button>

//       <div className="grid">
//         {yogaList.map((yoga) => (
//           <div key={yoga._id} className="card">
//             <h3>{yoga.title}</h3>
//             <div className="media-flex">
//               {yoga.image && (
//                 <img src={yoga.image} alt={yoga.title} className="image" />
//               )}
//               {yoga.video && (
//                 <iframe
//                   className="video"
//                   src={yoga.video}
//                   title={yoga.title}
//                   allowFullScreen
//                 ></iframe>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Internal CSS */}
//       <style>
//         {`
//           .container {
//             max-width: 1000px;
//             margin: 0 auto;
//             padding: 2rem;
//           }

//           .heading {
//             text-align: center;
//             font-size: 2rem;
//             margin-bottom: 1rem;
//           }

//           .input {
//             padding: 10px;
//             font-size: 16px;
//             width: 100%;
//             margin-bottom: 10px;
//             border: 1px solid #ccc;
//             border-radius: 6px;
//           }

//           .button {
//             padding: 10px 20px;
//             font-size: 16px;
//             background-color: #28a745;
//             color: white;
//             border: none;
//             border-radius: 6px;
//             cursor: pointer;
//             transition: background-color 0.3s ease;
//           }

//           .button:hover {
//             background-color: #218838;
//           }

//           .grid {
//             display: grid;
//             grid-template-columns: 1fr;
//             gap: 20px;
//             margin-top: 20px;
//           }

//           .card {
//             border: 1px solid #ccc;
//             border-radius: 8px;
//             padding: 15px;
//             background-color: #f9f9f9;
//             transition: transform 0.2s ease;
//           }

//           .card:hover {
//             transform: scale(1.02);
//           }

//           .media-flex {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             gap: 20px;
//             margin-top: 10px;
//             flex-wrap: wrap;
//           }

//           .image, .video {
//             flex: 1 1 45%;
//             height: 200px;
//             border-radius: 6px;
//             object-fit: cover;
//             border: none;
//           }

//           .video {
//             width: 100%;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default YogaSuggestions;



import React, { useState } from "react";
import { getYogaByGoal } from "../api";

const YogaSuggestions = () => {
  const [goal, setGoal] = useState("");
  const [yogaList, setYogaList] = useState([]);

  const fetchYoga = async () => {
    if (!goal.trim()) {
      alert("Please enter a goal before fetching workout suggestions.");
      return;
    }

    try {
      const token = localStorage.getItem("fitness");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const data = await getYogaByGoal(token, goal);
      setYogaList(data);
    } catch (err) {
      console.error("Error fetching workout suggestions:", err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Workout Advisor</h2>
      <input
        type="text"
        placeholder="Enter your goal (e.g. arm strength)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="input"
      />
      <button onClick={fetchYoga} className="button">
        Get Workout Suggestions
      </button>

      <div className="grid">
        {yogaList.map((yoga) => (
          <div key={yoga._id} className="card">
            <h3>{yoga.title}</h3>
            <div className="media-flex">
              {yoga.image && (
                <img src={yoga.image} alt={yoga.title} className="image" />
              )}
              {yoga.video && (
                <iframe
                  className="video"
                  src={yoga.video}
                  title={yoga.title}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
          }

          .heading {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #007AFF;
          }

          .input {
            padding: 10px;
            font-size: 16px;
            width: 100%;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }

          .button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .button:hover {
            background-color: #218838;
          }

          .grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 20px;
            max-height: 500px; /* Set a max height */
            overflow-y: auto;  /* Enable vertical scrolling */
          }

          .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 15px;
            background-color: #f9f9f9;
            transition: transform 0.2s ease;
          }

          .card:hover {
            transform: scale(1.02);
          }

          .media-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            margin-top: 10px;
            flex-wrap: wrap;
          }

          .image, .video {
            flex: 1 1 45%;
            height: 200px;
            border-radius: 6px;
            object-fit: cover;
            border: none;
          }

          .video {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default YogaSuggestions;

