import Hero from "./components/Home/Hero";
import Data from "./components/Data/Data.tsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/data' element={<Data></Data>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
