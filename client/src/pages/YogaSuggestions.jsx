// // YogaSuggestions.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const YogaSuggestions = () => {
//   const [goal, setGoal] = useState("");
//   const [yogaList, setYogaList] = useState([]);




// const fetchYoga = async () => {
//     try {
//       const token = localStorage.getItem("fitness"); // get token from local storage
  
//       const res = await axios.get(`http://localhost:8080/api/user/suggest?goal=${goal}`, {
//         headers: { Authorization: `Bearer ${token}` }, // send token here
//       });
  
//       setYogaList(res.data);
//     } catch (err) {
//       console.error("Error fetching yoga suggestions:", err.message);
//     }
//   };
  

//   return (
//     <div style={styles.container}>
//       <h2>Yoga Advisor</h2>
//       <input
//         type="text"
//         placeholder="Enter your goal (e.g. weight loss)"
//         value={goal}
//         onChange={(e) => setGoal(e.target.value)}
//         style={styles.input}
//       />
//       <button onClick={fetchYoga} style={styles.button}>Get Yoga Suggestions</button>
//       <div style={styles.grid}>
//         {yogaList.map((yoga) => (
//           <div key={yoga._id} style={styles.card}>
//             <h3>{yoga.title}</h3>
//             <img src={yoga.image} alt={yoga.title} style={styles.image} />
//             <iframe
//               width="100%"
//               height="200"
//               src={yoga.video}
//               title={yoga.title}
//               allowFullScreen
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: { maxWidth: "800px", margin: "0 auto", padding: "20px" },
//   input: { padding: "10px", fontSize: "16px", width: "100%", marginBottom: "10px" },
//   button: { padding: "10px 20px", fontSize: "16px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" },
//   grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" },
//   card: { border: "1px solid #ccc", borderRadius: "8px", padding: "10px", textAlign: "center", backgroundColor: "#f9f9f9" },
//   image: { width: "100%", height: "150px", objectFit: "cover", marginBottom: "10px" },
// };

// export default YogaSuggestions;





import React, { useState } from "react";
import { getYogaByGoal } from "../api"; // Import the correct API method

const YogaSuggestions = () => {
  const [goal, setGoal] = useState("");
  const [yogaList, setYogaList] = useState([]);

  const fetchYoga = async () => {
    if (!goal.trim()) {
      alert("Please enter a goal before fetching yoga suggestions.");
      return;
    }

    try {
      const token = localStorage.getItem("fitness");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const data = await getYogaByGoal(token, goal); // Use API helper function
      setYogaList(data);
    } catch (err) {
      // console.error("Error fetching yoga suggestions:", err.message);
    //    console.error("Error fetching yoga suggestions:", err.response?.data?.message || err.message);
    // alert("Something went wrong while fetching yoga suggestions.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Yoga Advisor</h2>
      <input
        type="text"
        placeholder="Enter your goal (e.g. weight loss)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={styles.input}
      />
      <button onClick={fetchYoga} style={styles.button}>
        Get Yoga Suggestions
      </button>

      <div style={styles.grid}>
        {yogaList.map((yoga) => (
          <div key={yoga._id} style={styles.card}>
            <h3>{yoga.title}</h3>
            {/* <img src={yoga.image} alt={yoga.title} style={styles.image} /> */}
            {yoga.image && (
  <img src={yoga.image} alt={yoga.title} style={styles.image} />
)}
{yoga.video && (
  <iframe
    width="100%"
    height="200"
    src={yoga.video}
    title={yoga.title}
    allowFullScreen
  ></iframe>
)}
{/* 
            <iframe
              width="100%"
              height="200"
              src={yoga.video}
              title={yoga.title}
              allowFullScreen
            ></iframe> */}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "100%",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    marginBottom: "10px",
  },
};

export default YogaSuggestions;
