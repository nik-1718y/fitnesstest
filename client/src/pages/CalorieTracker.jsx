// import { useState, useEffect } from "react";
// import axios from "axios";

// const CalorieTracker = () => {
//   const [food, setFood] = useState("");
//   const [calories, setCalories] = useState("");
//   const [entries, setEntries] = useState([]);

//   const fetchEntries = async () => {
//     const res = await axios.get("/api/calorieTracker");
//     setEntries(res.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("/api/calorieTracker", { food, calories });
//     setFood("");
//     setCalories("");
//     fetchEntries();
//   };

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Calorie Tracker</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           placeholder="Food"
//           value={food}
//           onChange={(e) => setFood(e.target.value)}
//           className="p-2 border mr-2"
//         />
//         <input
//           type="number"
//           placeholder="Calories"
//           value={calories}
//           onChange={(e) => setCalories(e.target.value)}
//           className="p-2 border mr-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
//       </form>
//       <ul>
//         {entries.map((entry) => (
//           <li key={entry._id}>{entry.food}: {entry.calories} kcal</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CalorieTracker;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const CalorieTracker = () => {
//   const [food, setFood] = useState("");
//   const [calories, setCalories] = useState("");
//   const [entries, setEntries] = useState([]);

//   const token = localStorage.getItem("fitness"); // Or get it from context/auth provider

//   const fetchEntries = async () => {
//     try {
      // const res = await axios.get("http://localhost:8080/api/user/getCalorie",
// const res=await axios.get("https://fitnesstest.onrender.com"){
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEntries(res.data);
//     } catch (err) {
//       console.error("Error fetching calories:", err.response?.data?.message || err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:8080/api/user/addCalorie",
//         { food, calories },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setFood("");
//       setCalories("");
//       fetchEntries();
//     } catch (err) {
//       console.error("Error adding calorie entry:", err.response?.data?.message || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Calorie Tracker</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           placeholder="Food"
//           value={food}
//           onChange={(e) => setFood(e.target.value)}
//           className="p-2 border mr-2"
//         />
//         <input
//           type="number"
//           placeholder="Calories"
//           value={calories}
//           onChange={(e) => setCalories(e.target.value)}
//           className="p-2 border mr-2"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Add
//         </button>
//       </form>
//       <ul>
//         {entries.map((entry) => (
//           <li key={entry._id}>
//             {entry.food}: {entry.calories} kcal
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CalorieTracker;






// import { useState, useEffect } from "react";
// import axios from "axios";

// const CalorieTracker = () => {
//   const [food, setFood] = useState("");
//   const [calories, setCalories] = useState("");
//   const [entries, setEntries] = useState([]);

//   const token = localStorage.getItem("fitness");

//   const fetchEntries = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/user/getCalorie", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEntries(res.data);
//     } catch (err) {
//       console.error("Error fetching calories:", err.response?.data?.message || err.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:8080/api/user/addCalorie",
//         { food, calories },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setFood("");
//       setCalories("");
//       fetchEntries();
//     } catch (err) {
//       console.error("Error adding calorie entry:", err.response?.data?.message || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>Calorie Tracker</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Food"
//           value={food}
//           onChange={(e) => setFood(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="number"
//           placeholder="Calories"
//           value={calories}
//           onChange={(e) => setCalories(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Add</button>
//       </form>
//       <ul style={styles.list}>
//         {entries.map((entry) => (
//           <li key={entry._id} style={styles.listItem}>
//             {entry.food}: {entry.calories} kcal
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//     maxWidth: "600px",
//     margin: "0 auto",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "8px",
//   },
//   header: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     marginBottom: "20px",
//   },
//   input: {
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   list: {
//     listStyleType: "none",
//     paddingLeft: "0",
//   },
//   listItem: {
//     padding: "10px 0",
//     borderBottom: "1px solid #ddd",
//   },
// };

// export default CalorieTracker;




// FRONTEND (CalorieTracker.jsx)
import { useState, useEffect } from "react";
import axios from "axios";

const CalorieTracker = () => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [entries, setEntries] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const token = localStorage.getItem("fitness");

  const fetchEntries = async () => {
    try {
      const res = await axios.get("https://fitnesstest-server.onrender.com/user/getCalorie", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEntries(res.data.entries);
      setTotalCalories(res.data.totalCalories);
    } catch (err) {
      console.error("Error fetching calories:", err.response?.data?.message || err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://fitnesstest-4.onrender.com/user/addCalorie",
        { food, calories },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFood("");
      setCalories("");
      fetchEntries();
    } catch (err) {
      console.error("Error adding calorie entry:", err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Calorie Tracker</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Food"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Add</button>
      </form>
      <h3 style={styles.total}>Total Calories Today: {totalCalories} kcal</h3>
      <ul style={styles.list}>
        {entries.map((entry) => (
          <li key={entry._id} style={styles.listItem}>
            {entry.food}: {entry.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: "20px", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "8px" },
  header: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px", textAlign: "center",color:"#007AFF" },
  form: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" },
  input: { padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px" },
  button: { padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" },
  list: { listStyleType: "none", paddingLeft: "0" },
  listItem: { padding: "10px 0", borderBottom: "1px solid #ddd" },
  total: { textAlign: "center", marginBottom: "15px", fontSize: "18px" },
};

export default CalorieTracker;

