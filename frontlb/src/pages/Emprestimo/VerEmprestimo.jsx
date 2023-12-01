import React, { useEffect, useState } from "react";
import "./VerEmprestimo.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";
import CardEmp from "../../components/CardEmp/CardEmp";
export default function VerEmprestimo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/emprestimos").then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="container-veremprestimo">
       <Navbar/>
      
        <div className="box1">
          <CardEmp />
          <CardEmp />
          <CardEmp />
          <CardEmp />
          <CardEmp />
          <CardEmp />
          <CardEmp />

        </div>
    </div>
  );
}
