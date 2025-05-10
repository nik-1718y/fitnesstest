import axios from "axios"


const API=axios.create({
    // baseURL:"http://localhost:8080/api",
    baseURL:"https://fitnesstest.onrender.com"
});
export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
     await API.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });

// app.get('/api/user/dashboard', (req, res) => {
//   // Logic to fetch and return user dashboard data
//   res.status(200).json({ message: 'Dashboard data here' });
// });



    export const getWorkouts = async (token, date) =>
        await API.get(`/user/workout${date}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      
      export const addWorkout = async (token, data) =>
        await API.post(`/user/workout`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        // export const addBmi = async (token, data) =>
        //   await API.post(`/user/contact`, data, {
        //     headers: { Authorization: `Bearer ${token}` },
        //   });
        export const addBmi = async (token, data) =>
          await API.post(`/user/contact`, data, {
            headers: { Authorization: `Bearer ${token}` },
          }); 

        // export const getWorkoutSuggestions = async (token,data) =>
        //   await API.get(`/user/workoutsuggestions`,data, {
        //     headers: { Authorization: `Bearer ${token}` },
        //   });


        export const getWorkoutSuggestions = async (token, data) =>
          await API.get(`/user/workoutsuggestions`, {
            headers: { Authorization: `Bearer ${token}` },
            params: data, // this is where query parameters go in a GET request
          });



          // export const getCalories = async (token) =>
          //   await API.get(`user/calorieTracker`, {
          //     headers: { Authorization: `Bearer ${token}` },
          //   });

          //   export const addCalorie = async (token, data) =>
          //     await API.post(`user/calorieTracker`, data, {
          //       headers: { Authorization: `Bearer ${token}` },
          //     });
            


          // import API from './API'; // Make sure this imports your axios instance correctly

export const getCalories = async (token) => {
  try {
    const response = await API.get('user/getCalorie ', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching calories:', error.response?.data?.message || error.message);
    throw error;
  }
};

export const addCalorie = async (token, data) => {
  try {
    const response = await API.post('user/addCalorie ', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding calorie entry:', error.response?.data?.message || error.message);
    throw error;
  }
};



// export const getYogaSuggestions = async (token, goal) => {
//   const res = await API.get(`user/suggest?goal=${goal}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };




export const getYogaByGoal = async (token, goal) => {
  try {
    const response = await API.get(`user/suggest?goal=${goal}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching yoga suggestions:', error.response?.data?.message || error.message);
    throw error;
  }
};




          
        

          
