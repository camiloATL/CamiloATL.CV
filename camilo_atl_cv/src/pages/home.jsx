import React from "react";
import "./home.css";
import imageCv from "../assets/fotocv.png";
import { CiAt } from "react-icons/ci";
import { GiPositionMarker } from "react-icons/gi";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <div className="foto">
        <img src={imageCv} alt="Foto Portada" />
      </div>
      <div className="linea_horizontal"></div>
      <div className="contacto">
        <h2 className="contactoStyle">CONTACTO</h2>
        <div className="linea_horizontal2"></div>
      </div>
      <div>
        <Link to="/experience">
          <h3 className="correo">
            <CiAt /> catorres0610@outlook.com
          </h3>
        </Link>
        <Link to="https://github.com/camiloATL">
          <h3 className="github">
            <BsGithub /> Github: camiloATL
          </h3>
        </Link>
        <Link to="https://wa.link/ndlsa7">
          <h3 className="celular">
            <BsWhatsapp /> +57 3163404877
          </h3>
        </Link>
      </div>
      <div className="ajusteLinkedin">
        <Link to="https://www.linkedin.com/in/camilo-andres-torres-lozano-softwaredev">
          <h3 className="linkedin">
            <BsLinkedin />
            https://www.linkedin.com/in/camilo-andres-torres-lozano-softwaredev
          </h3>
        </Link>
        <h3 className="ubicacion">
          <GiPositionMarker />
          Bogotá - Colombia
        </h3>
      </div>
    </div>
  
  );
}
