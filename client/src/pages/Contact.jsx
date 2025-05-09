// import React ,{useState} from "react";
// // import React,{useState} from "react";
// // import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
// // import { useForm } from "react-hook-form";
// // import axios from "axios";
// // import toast from "react-hot-toast";

// function Contact({ height, weight, setHeight, setWeight }) {
//  const [bmi, setBMI] = useState(null);
  
//       const calculateBMI = () => {
//           if (!height || !weight) {
//               alert('Please enter both height and weight.');
//               return;
//           }
  
//           const heightInMeters = height / 100;
//           const bmiValue = weight / (heightInMeters * heightInMeters);
//           setBMI(bmiValue.toFixed(2));
//       };
  
//       const handleWeightChange = (e) => {
//           const newWeight = parseFloat(e.target.value);
//           if (!isNaN(newWeight)) {
//               setWeight(newWeight);
//           }
//       };
  
//       return (
//           <div className="component-container">
//               <h2>BMI Calculator</h2>
//               <div>
//                   <label>Height (cm):</label>
//                   <input
//                       type="number"
//                       value={height}
//                       onChange={(e) => setHeight(e.target.value)}
//                   />
//               </div>
//               <div>
//                   <label>Weight (kg):</label>
//                   <input
//                       type="number"
//                       value={weight}
//                       onChange={handleWeightChange}
//                   />
//               </div>
//               <button onClick={calculateBMI}>Calculate BMI</button>
//               {bmi && <p>Your BMI: {bmi}</p>}
//           </div>
//       );
  
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     access_key:"e0c53874-8d79-4b10-a4a0-7cc10ac5b7e5",
  //     name: data.username,
  //     email: data.email,
  //     message: data.message,
  //   };
  //   try {
  //     await axios.post("https://api.web3forms.com/submit", userInfo);
  //     toast.success("Message sent successfully");
  //   } catch (error) {
  //     toast.error("An error occurred");
  //   }
  // };
  // return (
  //   <div>
  //     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  //       <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
  //         <div className="text-center">
  //           <h2 className="text-3xl font-extrabold text-gray-900">
  //             Contact Us
  //           </h2>
  //         </div>
  //         <div className="flex flex-col md:flex-row justify-between">
  //           <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
  //             <h3 className="text-lg font-medium text-gray-700 mb-4">
  //               Send us a message
  //             </h3>
  //             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  //               <div>
  //                 <input
  //                   type="text"
  //                   name="username"
  //                   placeholder="Your Name"
  //                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  //                   {...register("username", { required: true })}
  //                 />
  //                 {errors.username && (
  //                   <span className="text-sm text-red-500 font-semibold">
  //                     This field is required
  //                   </span>
  //                 )}
  //               </div>
  //               <div>
  //                 <input
  //                   type="email"
  //                   name="email"
  //                   placeholder="Your Email"
  //                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  //                   {...register("email", { required: true })}
  //                 />
  //                 {errors.email && (
  //                   <span className="text-sm text-red-500 font-semibold">
  //                     This field is required
  //                   </span>
  //                 )}
  //               </div>
  //               <div>
  //                 <textarea
  //                   name="message"
  //                   placeholder="Your Message"
  //                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
  //                   {...register("message", { required: true })}
  //                 />
  //                 {errors.message && (
  //                   <span className="text-sm text-red-500 font-semibold">
  //                     This field is required
  //                   </span>
  //                 )}
  //               </div>
  //               <div>
  //                 <button
  //                   type="submit"
  //                   className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-yellow-600 duration-300 "
  //                 >
  //                   Send Message
  //                 </button>
  //               </div>
  //             </form>
  //           </div>
  //           <div className="w-full md:w-1/2 md:pl-4">
  //             <h3 className="text-lg font-medium text-gray-700 mb-4">
  //               Contact Information
  //             </h3>
  //             <ul className="space-y-4">
  //               <li className="flex items-center space-x-2">
  //                 <FaPhone className="text-red-500" />
  //                 <span>+91 9876543210</span>
  //               </li>
  //               <li className="flex items-center space-x-2">
  //                 <FaEnvelope className="text-pink-500" />
  //                 <span>help@nikhil.com</span>
  //               </li>
  //               <li className="flex items-center space-x-2">
  //                 <FaMapMarkerAlt className="text-green-500" />
  //                 <span>Lucknow</span>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
// }

// export default Contact;
// import React, { useState } from "react";

// function Contact() {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBMI] = useState(null);

//   const calculateBMI = () => {
//     if (!height || !weight) {
//       alert("Please enter both height and weight.");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = weight / (heightInMeters * heightInMeters);
//     setBMI(bmiValue.toFixed(2));
//   };

//   const handleWeightChange = (e) => {
//     const newWeight = parseFloat(e.target.value);
//     if (!isNaN(newWeight)) {
//       setWeight(newWeight);
//     }
//   };

//   return (
//     <div className="component-container">
//       <h2>BMI Calculator</h2>
//       <div>
//         <label>Height (cm):</label>
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Weight (kg):</label>
//         <input
//           type="number"
//           value={weight}
//           onChange={handleWeightChange}
//         />
//       </div>
//       <button onClick={calculateBMI}>Calculate BMI</button>
//       {bmi && <p>Your BMI: {bmi}</p>}
//     </div>
//   );
// }

// export default Contact;

// import React, { useState } from "react";

// function Contact() {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBMI] = useState(null);

//   const calculateBMI = () => {
//     if (!height || !weight) {
//       alert("Please enter both height and weight.");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = weight / (heightInMeters * heightInMeters);
//     setBMI(bmiValue.toFixed(2));
//   };

//   const handleWeightChange = (e) => {
//     const newWeight = parseFloat(e.target.value);
//     if (!isNaN(newWeight)) {
//       setWeight(newWeight);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .component-container {
//           max-width: 400px;
//           margin: 40px auto;
//           padding: 20px;
//           background: #f5f5f5;
//           border-radius: 12px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }

//         .component-container h2 {
//           text-align: center;
//           margin-bottom: 20px;
//           font-size: 1.5rem;
//           color:blue;
//         }

//         .input-group {
//           margin-bottom: 15px;
//           display: flex;
//           flex-direction: column;
//         }

//         .input-group label {
//           font-size: 1rem;
//           margin-bottom: 6px;
//           color: #333;
//         }

//         .input-group input {
//           padding: 10px;
//           font-size: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//         }

//         button {
//           width: 100%;
//           padding: 12px;
//           font-size: 1rem;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         button:hover {
//           background-color: #0056b3;
//         }

//         .bmi-result {
//           margin-top: 20px;
//           font-size: 1.2rem;
//           text-align: center;
//           color: #333;
//         }

//         @media (max-width: 500px) {
//           .component-container {
//             margin: 20px;
//             padding: 15px;
//           }

//           .component-container h2 {
//             font-size: 1.3rem;
            
//           }

//           button {
//             font-size: 0.95rem;
//             padding: 10px;
//           }

//           .bmi-result {
//             font-size: 1rem;
//           }
//         }
//       `}</style>

//       <div className="component-container">
//         <h2>BMI Calculator</h2>
//         <div className="input-group">
//           <label>Height (cm):</label>
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label>Weight (kg):</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={handleWeightChange}
//           />
//         </div>
//         <button onClick={calculateBMI}>Calculate BMI</button>
//         {bmi && <p className="bmi-result">Your BMI: {bmi}</p>}
//       </div>
//     </>
//   );
// }

// const sendBmiToServer = async (height, weight, bmi) => {
//   try {
//     const response = await fetch("http://localhost:5000/api/bmi", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ height, weight, bmi }),
//     });

//     const result = await response.json();
//     if (!response.ok) throw new Error(result.message);
//     console.log("BMI stored:", result);
//   } catch (err) {
//     console.error("Error storing BMI:", err.message);
//   }
// };

// const calculateBMI = () => {
//   if (!height || !weight) {
//     alert("Please enter both height and weight.");
//     return;
//   }

//   const heightInMeters = parseFloat(height) / 100;
//   const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
//   const roundedBMI = bmiValue.toFixed(2);
//   setBMI(roundedBMI);

//   // Save BMI to database
//   sendBmiToServer(height, weight, roundedBMI);
// };



// export default Contact;


// import React, { useState } from "react";

// function Contact() {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBMI] = useState(null);

//   const sendBmiToServer = async (height, weight, bmi) => {
//     try {
//       const response = await fetch("http://localhost:8080/api/user/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ height, weight, bmi }),
//       });

//       const result = await response.json();
//       if (!response.ok) throw new Error(result.message);
//       console.log("BMI stored:", result);
//     } catch (err) {
//       console.error("Error storing BMI:", err.message);
//     }
//   };

//   const calculateBMI = () => {
//     if (!height || !weight) {
//       alert("Please enter both height and weight.");
//       return;
//     }

//     const heightInMeters = parseFloat(height) / 100;
//     const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
//     const roundedBMI = bmiValue.toFixed(2);
//     setBMI(roundedBMI);

//     // Save BMI to database
//     sendBmiToServer(height, weight, roundedBMI);
//   };

//   return (
//     <>
//       <style>{`
//         .component-container {
//           max-width: 400px;
//           margin: 40px auto;
//           padding: 20px;
//           background: #f5f5f5;
//           border-radius: 12px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }

//         .component-container h2 {
//           text-align: center;
//           margin-bottom: 20px;
//           font-size: 1.5rem;
//           color: blue;
//         }

//         .input-group {
//           margin-bottom: 15px;
//           display: flex;
//           flex-direction: column;
//         }

//         .input-group label {
//           font-size: 1rem;
//           margin-bottom: 6px;
//           color: #333;
//         }

//         .input-group input {
//           padding: 10px;
//           font-size: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//         }

//         button {
//           width: 100%;
//           padding: 12px;
//           font-size: 1rem;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           transition: background-color 0.3s;
//         }

//         button:hover {
//           background-color: #0056b3;
//         }

//         .bmi-result {
//           margin-top: 20px;
//           font-size: 1.2rem;
//           text-align: center;
//           color: #333;
//         }

//         @media (max-width: 500px) {
//           .component-container {
//             margin: 20px;
//             padding: 15px;
//           }

//           .component-container h2 {
//             font-size: 1.3rem;
//           }

//           button {
//             font-size: 0.95rem;
//             padding: 10px;
//           }

//           .bmi-result {
//             font-size: 1rem;
//           }
//         }
//       `}</style>

//       <div className="component-container">
//         <h2>BMI Calculator</h2>
//         <div className="input-group">
//           <label>Height (cm):</label>
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </div>
//         <div className="input-group">
//           <label>Weight (kg):</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </div>
//         <button onClick={calculateBMI}>Calculate BMI</button>
//         {bmi && <p className="bmi-result">Your BMI: {bmi}</p>}
//       </div>
//     </>
//   );
// }

// export default Contact;


import React, { useState } from "react";

function Contact() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const sendBmiToServer = async (height, weight, bmi) => {
    const token = localStorage.getItem("fitness");
    try {
      const response = await fetch("http://localhost:8080/api/user/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ height, weight, bmi }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      console.log("BMI stored:", result);
    } catch (err) {
      console.error("Error storing BMI:", err.message);
    }
  };

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both height and weight.");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    const roundedBMI = bmiValue.toFixed(2);
    setBMI(roundedBMI);

    // Save BMI to database
    sendBmiToServer(height, weight, roundedBMI);
  };

  return (
    <>
      <style>{`
        .component-container {
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
          background: #f5f5f5;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .component-container h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.5rem;
          color: #007AFF;
        }

        .input-group {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          font-size: 1rem;
          margin-bottom: 6px;
          color: #333;
        }

        .input-group input {
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        button {
          width: 100%;
          padding: 12px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #0056b3;
        }

        .bmi-result {
          margin-top: 20px;
          font-size: 1.2rem;
          text-align: center;
          color: #333;
        }

        @media (max-width: 500px) {
          .component-container {
            margin: 20px;
            padding: 15px;
          }

          .component-container h2 {
            font-size: 1.3rem;
          }

          button {
            font-size: 0.95rem;
            padding: 10px;
          }

          .bmi-result {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="component-container">
        <h2>BMI Calculator</h2>
        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p className="bmi-result">Your BMI: {bmi}</p>}
      </div>
    </>
  );
}

export default Contact;
