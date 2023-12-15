/* eslint-disable react/prop-types */
// CardSurah.js
import "../assets/css/MyCard.css";
const CardSurah = ({ surah }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <a href={`/detailsurah/${surah.nomor}`} className="container card">
        <div className="header">{surah.nomor}</div>
        <div className="info">
          <p className="title">{surah.nama}</p>
          {/* <p className="title">{surah.arti}</p> */}
        </div>
      </a>
    </div>
  );
};

export default CardSurah;
