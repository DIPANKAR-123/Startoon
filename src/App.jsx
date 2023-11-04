import "./App.css";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";
import Details from "./Components/Details";
import Medical from "./Components/Medical";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Profile />
      

      <Dashboard />
  
      <Details />
      <Medical />
    </div>
    // </div>
  );
}

export default App;
