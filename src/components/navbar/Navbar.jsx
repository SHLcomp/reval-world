import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import Banner from "../banner/Banner";
export const Navbar = () => {
  const [menu, setMenu] = useState("الرئيسية");
  const [respoMenu, setRespoMenu] = useState(false);

  const locate = useLocation();
  const toggleMenu = () => {
    setRespoMenu((prev) => !prev);
  };

  useEffect(() => {
    switch (locate.pathname) {
      case "/":
        setMenu("الرئيسية");
        break;
      case "/services":
        setMenu("الخدمات");
        break;
      case "/projects":
        setMenu("المشاريع");
        break;
      case "/about":
        setMenu("من نحن");
        break;
      case "/contact":
        setMenu("اتصل بنا");
        break;
      default:
        setMenu("");
    }
  });
  return (
    <>
      <Banner />
      <div className="navbar">
        <div className="txt">
          <h1>
            <span>ريفال</span>
            <span>وورلد</span>
            <span>
              {" "}
              {""}للمقاولات {""}
            </span>
          </h1>
          <i
            className={`fa-solid fa-xl ${respoMenu ? "fa-xmark" : "fa-bars"}`}
            id="menuBar"
            onClick={toggleMenu}
          ></i>
        </div>

        <ul className={respoMenu ? "show" : ""}>
          <Link to="/" className="a">
            <li
              className={menu === "الرئيسية" ? "clicked" : ""}
              onClick={() => setMenu("الرئيسية")}
            >
              {" "}
              الرئيسية
            </li>
          </Link>
          <Link className="a" to="/services">
            <li
              className={menu === "الخدمات" ? "clicked" : ""}
              onClick={() => setMenu("الخدمات")}
            >
              {" "}
              الخدمات
            </li>
          </Link>
          <li
            className={menu === "المشاريع" ? "clicked" : ""}
            onClick={() => setMenu("المشاريع")}
          >
            المشاريع
          </li>
          <li
            className={menu === "من نحن" ? "clicked" : ""}
            onClick={() => setMenu("من نحن")}
          >
            من نحن
          </li>
          <a className="a" href="#contact"><li
            className={menu === "اتصل بنا" ? "clicked" : ""}
            onClick={() => setMenu("اتصل بنا")}
          >
            اتصل بنا
          </li></a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
