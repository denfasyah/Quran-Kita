import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detailsurah = () => {
  const { surahNumber } = useParams();
  const [surahData, setSurahData] = useState([]);

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const response = await fetch(
          `https://al-quran-8d642.firebaseio.com/surat/${surahNumber}.json?print=pretty`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSurahData(data);
        }
      } catch (error) {
        console.error("Error fetching surah data:", error.message);
      }
    };

    fetchSurahData();
  }, [surahNumber]);

  return (
    <div>
      <br /> <br /> <br /> <br />
      <h2>Detail Surah {surahNumber}</h2>
      {surahData.map((ayah, index) => (
        <div key={index}>
          <p>Ayat {ayah.nomor}</p>
          <p>{ayah.ar}</p>
          <p>{ayah.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Detailsurah;
