import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
         <div className="App">
                <Nav />
                <Routes>
                
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/shop" element={<Shop/>}/>
                </Routes>

                <Footer/>
                
              
               
                
                
         </div>
    </BrowserRouter>
  );
}

export default App;
