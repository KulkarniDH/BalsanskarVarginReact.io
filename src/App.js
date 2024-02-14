import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import './Global.css'
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Courses from './Courses';
import Header from "./component/Header";
import Footer from "./component/Footer";
import Playlist from "./Playlist";
import Admission from "./Admission";

function App() {
  return (
   
<>
 <Router>
 <Header/>
 <Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/courses' element={<Courses/>}/>
  <Route path='/playlist' element={<Playlist/>}/> 
  <Route path='/admission' element={<Admission/>}/> 
  
 </Routes>
 <Footer/>
 </Router>
   </>
  );
}

export default App;

