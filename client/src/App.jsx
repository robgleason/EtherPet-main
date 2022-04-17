import { Navbar, Welcome, TheNFTS, Services, Transactions} from "./components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WebGame from "./components/WebGame";
import MainPage from "./components/MainPage";

const App = () => (
  <div className="min-h-screen">
    
    <Routes basename="/app">
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/nfts' element={<TheNFTS />} />
        
    </Routes>
  </div>
);

export default App;
