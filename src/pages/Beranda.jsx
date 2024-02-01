/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// eslint-disable react/prop-types
// pages/AsmaulHusna.js

import { useState, useEffect } from "react";
import { getSurahList } from "../services/apiSurah";
import CardSurah from "../components/CardSurah";
import "../assets/css/Beranda.css";

const Beranda = () => {
  const [surahList, setSurahList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSurahList();
        if (Array.isArray(data)) {
          setSurahList(data);
        } else {
          console.error(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = () => {
    const filteredSurahList = surahList.filter(
      (surah) =>
        surah.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        surah.nomor.includes(searchTerm)
    );
    setSurahList(filteredSurahList);
  };

  return (
    <>
      <br /> <br />
      <div className="container body mt-5">
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
          {surahList.length === 0 && searchTerm !== "" ? (
            <p>Surah tidak ditemukan</p>
          ) : (
            <div className="row">
              {surahList.map((surah, index) => (
                <CardSurah key={index} surah={surah} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Beranda;
