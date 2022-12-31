import NavbarL from "./component/NavbarL";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CKampus from "./component/CKampus";
import CJurusan from "./component/CJurusan";
import MinatBakat from "./component/MinatBakat"
import CProfesi from "./component/CProfesi";
import NotFound from "./component/notFound";
import NotFound1 from "./component/notFound1";
import Favorit from "./component/Favorit";
import DetailKampus from "./component/detailKampus";
import DetailJurusan from "./component/detailJurusan";
import DetailProfesi from "./component/detailProfesi";
import Profil from "./component/profil";
import Login from "./component/Login";
import Register from "./component/Register";
import DetailKampus2 from "./component/detailKampus2";
import DetailKampus3 from "./component/detailKampus3";
import DetailJurusan3 from "./component/detailJurusan3";
import DetailJurusan2 from "./component/detailJurusan2";
import DetailProfesi3 from "./component/detailProfesi3";
import DetailProfesi2 from "./component/detailProfesi2";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cari_Kampus" element={<CKampus />} />
          <Route path="/Cari_Jurusan" element={<CJurusan />} />
          <Route path="/Cari_Profesi" element={<CProfesi />} />
          <Route path="/Minat_dan_Bakat" element={<MinatBakat />} />
          <Route path="/Minat_dan_Bakat/Not_Found_Minat" element={<NotFound />} />
          <Route path="/Minat_dan_Bakat/Not_Found_Bakat" element={<NotFound1 />} />
          <Route path="/Cari_Kampus/UPI" element={<DetailKampus/>} />
          <Route path="/Cari_Kampus/UI" element={<DetailKampus2/>} />
          <Route path="/Cari_Kampus/ITB" element={<DetailKampus3/>} />
          <Route path="/Cari_Jurusan/Ilkom" element={<DetailJurusan/>} />
          <Route path="/Cari_Jurusan/Kedokteran" element={<DetailJurusan2/>} />
          <Route path="/Cari_Jurusan/Akutansi" element={<DetailJurusan3/>} />
          <Route path="/Cari_Profesi/Developer" element={<DetailProfesi/>} />
          <Route path="/Cari_Profesi/Dokter" element={<DetailProfesi2/>} />
          <Route path="/Cari_Profesi/Akuntan" element={<DetailProfesi3/>} />
          <Route path="/Favorit" element={<Favorit />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}