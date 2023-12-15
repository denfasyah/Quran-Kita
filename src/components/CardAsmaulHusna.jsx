/* eslint-disable react/prop-types */
// components/CardAsmaulHusna.js

const CardAsmaulHusna = ({ asmaulHusna }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="container card">
        <div className="header">{asmaulHusna.urutan}</div>
        <div className="info">
          <p className="title">{asmaulHusna.latin}</p>
          <p className="title">{asmaulHusna.arab}</p>
        </div>
      </div>
    </div>
  );
};

export default CardAsmaulHusna;
