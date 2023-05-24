import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { 
  Yogyakarta, 
  Jawatengah, 
  Bali, 
  Aceh, 
  Sumatrabarat, 
  Jakarta, 
  Bengkulu, 
  Bangkabelitung, 
  Banten, 
  Gorontalo, 
  Jambi,
 } from './pages/Export';

import{
  Gudeg,
  Bakmijawa,
  Ayamkalasan,
} from '../src/pages/DaerahPage/Yogyakartafile/ExportYogya';

import{
  Mieaceh,
  Nasigurih,
  Kuahplieku,
  Ayamtangkap,
  Satematang,
  Roticane,
  Gulaikeueng,
  Timphan,
  Sotoaceh,
  Keumamah,
} from '../src/pages/DaerahPage/Acehfile/Exportaceh';

import{
Ayambetutu,
Bebekbetutu,
Sambalmatah,
Satekakul,
Satelilit,
} from '../src/pages/DaerahPage/Balifile/Exportbali';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/daerah/yogyakarta" element={<Yogyakarta/>} />
            <Route path="/Gudeg" element={<Gudeg/>} />
            <Route path="/Bakmijawa" element={<Bakmijawa/>} />
            <Route path="/Ayamkalasan" element={<Ayamkalasan/>}/>
          <Route path="/daerah/jawa tengah" element={<Jawatengah/>} />
          <Route path="/daerah/bali" element={<Bali/>} />
            <Route path="/Ayambetutu" element={<Ayambetutu/>} />
            <Route path="/Bebekbetutu" element={<Bebekbetutu/>} />
            <Route path="/Sambalmatah" element={<Sambalmatah/>} />
            <Route path="/Satekakul" element={<Satekakul/>} />
            <Route path="/Satelilit" element={<Satelilit/>} />
          <Route path="/daerah/aceh" element={<Aceh/>} />
            <Route path="/Mieaceh" element={<Mieaceh/>} />
            <Route path="/Nasigurih" element={<Nasigurih/>} />
            <Route path="/Kuahplieku" element={<Kuahplieku/>} />
            <Route path="/Ayamtangkap" element={<Ayamtangkap/>} />
            <Route path="/Satematang" element={<Satematang/>} />
            <Route path="/Roticane" element={<Roticane/>} />
            <Route path="/Gulaikeueng" element={<Gulaikeueng/>} />
            <Route path="/Timphan" element={<Timphan/>} />
            <Route path="/Sotoaceh" element={<Sotoaceh/>} />
            <Route path="/Keumamah" element={<Keumamah/>} />
          <Route path="/daerah/sumatra barat" element={<Sumatrabarat/>} />
          <Route path="/daerah/jakarta" element={<Jakarta/>} />
          <Route path="/daerah/bengkulu" element={<Bengkulu/>} />
          <Route path="/daerah/bangka belitung" element={<Bangkabelitung/>} />
          <Route path="/daerah/banten" element={<Banten/>} />
          <Route path="/daerah/gorontalo" element={<Gorontalo/>} />
          <Route path="/daerah/jambi" element={<Jambi/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
