/* eslint-disable react/prop-types */
// pages/AsmaulHusna.js

import { useState, useEffect } from "react";
import { getAsmaulHusna } from "../services/apiAsmaul";
import CardAsmaulHusna from "../components/CardAsmaulHusna";

const Asmaulhusna = () => {
  const [asmaulHusnaList, setAsmaulHusnaList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAsmaulHusna();
        if (Array.isArray(data)) {
          setAsmaulHusnaList(data);
        } else {
          console.error("Data Asmaul Husna tidak valid:", data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = () => {
    const filteredAh = asmaulHusnaList.filter(
      (asmaulHusna) =>
        asmaulHusna.latin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asmaulHusna.urutan === Number(searchTerm) 
    );
    setAsmaulHusnaList(filteredAh);
  };


  return (
    <>
      <br /> <br />
      <div className="container mt-5">
        <center>
          <div className="search">
            <input
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>
              Go
            </button>
          </div>
        </center>

      </div>
      <div className="container mt-5">
        <h1 className="titleCard">Asmaul Husna</h1>
        <hr />
        <div className="container text-center">
          {asmaulHusnaList.length === 0 && searchTerm !== "" ? (
            <p>Asmaul Husna tidak ditemukan</p>
          ) : (
            <div className="row">
              {asmaulHusnaList.map((asmaulHusna, index) => (
                <CardAsmaulHusna key={index} asmaulHusna={asmaulHusna} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};



export default Asmaulhusna;
