import "../assets/css/Navigation.css";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand href="#">Quran Kita</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarNavAltMarkup"
          style={{ display: "none" }}
          onChange={handleCheckboxChange}
        />
        <label className="hamburger d-lg-none" htmlFor="toggleCheckbox">
          <input
            type="checkbox"
            id="toggleCheckbox"
            checked={isNavOpen}
            onChange={handleCheckboxChange}
          />
          <svg viewBox="0 0 32 32">
            {
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
            }
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <Navbar.Collapse
          id="navbarNavAltMarkup"
          className={isNavOpen ? "show" : ""}
        >
          <Nav className="navbar-nav">
            <Nav.Link href="/" aria-current="page">
              Beranda
            </Nav.Link>
            <Nav.Link href="/asmaulhusna">Asmaul Husna</Nav.Link>
            <Nav.Link href="/kumpulandoa">Kumpulan Doa</Nav.Link>
            <Nav.Link href="/contact">Jadwal Sholat</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
