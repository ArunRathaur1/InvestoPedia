import Hero from "./components/Home/Hero";
import Data from "./components/Data/Data.tsx";
import Signup from "./components/Signup/Signup.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./components/Login/Login.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import DashboardContent from "./components/Dashboard/DashboardContent.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
          <Route path='/Dashboard' element={<Dashboard></Dashboard>}>
            <Route path="" element={<DashboardContent/>}></Route>
            <Route path="feed" element={<DashboardContent/>}></Route>
            <Route path="News" element={<DashboardContent/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
