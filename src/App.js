
 import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Aboutjs from "./About";
 import './App.css';
 import Indexs from "./indexs";
 
 
 function App() {
   
   return(
 
     <BrowserRouter>
     <main>
     <Routes>
             <Route exact path="/ReactPokeApi" element={<Indexs/>} />
             <Route exact path="/ReactPokeApi/:pokename" element={<Aboutjs/>} />   
     </Routes>
     </main>
     </BrowserRouter>
  
     
 
   )
   ;
   
 }
 
 export default App;
 