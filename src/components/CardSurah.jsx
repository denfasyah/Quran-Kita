/* eslint-disable react/prop-types */
// CardSurah.js
import "../assets/css/MyCard.css";
const CardSurah = ({ surah }) => {
  return (
    <div className="col-lg-3 mt-3 col-md-4 col-sm-6">
        <div className="wrapper-card">
      <a href={`/detailsurah/${surah.nomor}`} className="container link-card">
          <p className="title">{surah.nomor}</p>
          <p className="title">{surah.nama}</p>
          <p className="asma">{surah.asma}</p>
      </a>
        </div>
    </div>
  );
};

export default CardSurah;
