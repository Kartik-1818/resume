import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import SkillsEducation from "./Pages/skillsEdu";
import Certificates from './Pages/certificate';

const routelist = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <SkillsEducation />
        <Contact />
      </div>
    ),
  },
  {
    path: "/Projects",
    element: (
      <div>
        <Navbar />
        <Projects />
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  // {
  //   path: "/Login",
  //   element: (
  //     <div>
  //       <Navbar />
  //       <Login />
  //     </div>
  //   ),
  // },
  {
    path: "/Contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/skillsEdu",
    element: (
      <div>
        <Navbar />
        <SkillsEducation />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <h1 className="text-center text-red-500 text-3xl mt-10">
          404 - Page Not Found
        </h1>
      </div>
    ),
  },
  {
    path: "/certificates",
    element: (
      <div>
        <Navbar />
        <Certificates />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={routelist} />;
}

export default App;
