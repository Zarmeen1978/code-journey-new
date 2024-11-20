import { create } from "apisauce";
// define the api
const api = create({
  baseURL: "codejounrey.centralindia.cloudapp.azure.com/api",
  // headers:
  //  { "X-API-Key": '29005877fb051c016dd26c0b4ed36b61c751bc59c474c352be6d8d6cf6fa60764a7820bea3f92364ffd9d6a6fa5a29d121fa5378f3d4c7eddc601a53e60a349185f256d6289a128e6731372e19d3277c0a50a4ae40aa99a3db43dba491fe1ed7f7228dbfe71763731dd85fe13cbf39af43887962337960c8f60961567a0fb9f9' },
});

const registerUser = (userData) => api.post("/auth/local/register", userData);
const loginUser = (email, password) => {
  return api.post("/auth/local", {
    identifier: email,
    password: password,
  });
};
const getSlider = () => api.get("/sliders?populate=*");
const getVideoCourse = () => api.get("vide-courses?populate=*");
const getCourseList = () =>
  api.get("coursesv1s?populate=modules.lessons,modules.quiz");
const getCourseUrduList = () =>
  api.get("coursesv1s?populate=image&populate=modules.lessons&populate=modules.quiz&locale=ur-PK");
const getCourseEnglishList = () =>
  api.get(
    "coursesv1s?populate=image&populate=modules.lessons&populate=modules.quiz"
  );
const getPythonUrduCourse = () =>
  api.get("pythoncourses?populate=*&locale=ur-PK");
const getPythonEnglishCourse = () =>
  api.get("pythoncourses?populate=*&locale=en");
const getJsUrduCourse = () =>
  api.get("javascriptcourses?populate=*&locale=ur-PK");
const getJsEnglishCourse = () =>
  api.get("javascriptcourses?populate=*&locale=en");

//const getInformation=()=>api.get('details?populate=*');
const getArticle = () => api.get("articles?populate=*locale=ur");
const getUserDetails = (token) =>
  api.get("/users/me", {}, { headers: { Authorization: `Bearer ${token}` } });

const updateUserExperience = (userId, experience, rank, token) =>
  api.put(
    `/users/${userId}`, // Include userId in the endpoint
    { experience, rank }, // Pass experience in the body
    { headers: { Authorization: `Bearer ${token}` } } // Set the JWT token in headers
  );
//const getCourseList=(type)=>api.get('course-list?filters[type][$eq]='+type+'&populate=*')
//sliders?populate=*
export default {
  getSlider,
  getVideoCourse,
  getCourseList,
  getCourseEnglishList,
  //getInformation,
  registerUser,
  getArticle,
  loginUser,
  getUserDetails,
  getCourseUrduList,
  getPythonUrduCourse,
  getPythonEnglishCourse,
  getJsUrduCourse,
  getJsEnglishCourse,
  updateUserExperience,
};
//vide-courses?populate=*
