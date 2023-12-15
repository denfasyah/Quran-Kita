/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable react/prop-types
// pages/AsmaulHusna.js

import "../assets/css/Beranda.css";
import { useState, useEffect } from "react";
import { getKumpulandoa } from "../services/apiKumpulandoa";

const Kumpulandoa = () => {
  const [kumpulandoaList, setSurahList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getKumpulandoa();
        if (Array.isArray(data)) {
          setSurahList(data);
        } else {
          console.error("data ga ada:", data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = () => {
    const filteredSurahList = kumpulandoaList.filter(
      (surah) =>
        surah.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.nomor.includes(searchTerm)
    );
    setSurahList(filteredSurahList);
  };

  return (
    <>
      <br /> <br />
      <div className="container mt-5">
        <center>
          <div className="search">
            <input
              placeholder="Search..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" onClick={handleSearch}>
              Go
            </button>
          </div>
        </center>

        <h1 className="titleCard">Surah</h1>
        <hr />
        <div className="container text-center">
          {kumpulandoaList.length === 0 ? (
            <p>Surah tidak ditemukan</p>
          ) : (
            <div className="row">
              {kumpulandoaList.map((kumpulandoa, index) => (
                <CardSurah key={index} kumpulandoa={kumpulandoa} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const CardSurah = ({ kumpulandoa }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <a href={`/detailsurah/${kumpulandoa.id}`} className="container card">
        <div className="header">{kumpulandoa.id}</div>
        <div className="info">
          <p className="title">{kumpulandoa.doa}</p>
        </div>
      </a>
    </div>
  );
};

export default Kumpulandoa;
