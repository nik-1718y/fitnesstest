import axios from "axios"


const API=axios.create({
    baseURL:"http://localhost:8080/api",
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

        export const getWorkoutSuggestions = async (token,data) =>
          await API.get(`/user/workoutsuggestions`,data, {
            headers: { Authorization: `Bearer ${token}` },
          });

          