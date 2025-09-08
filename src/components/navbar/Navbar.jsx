import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import Banner from "../banner/Banner";
export const Navbar = () => {
  const [menu, setMenu] = useState("الرئيسية");
  const [respoMenu, setRespoMenu] = useState(false);

  const locate = useLocation()
  const toggleMenu = () => {
    setRespoMenu((prev) => !prev);
  };


  useEffect(()=>{
    switch(locate.pathname){
        case '/reval-world/':
            setMenu("الرئيسية");
            break;
        case '/reval-world/الخدمات':
            setMenu("الخدمات");
            break;
        case '/reval-world/المشاريع':
            setMenu("المشاريع");
            break;
        case '/reval-world/من نحن':
            setMenu("من نحن");
            break;
        case '/reval-world/اتصل بنا':
            setMenu("اتصل بنا");
            break;
        default:
            setMenu("") 
    }
  })
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
          <li
            className={menu === "الرئيسية" ? "clicked" : ""}
            onClick={() => setMenu("الرئيسية")}
          >
            {" "}
            الرئيسية
          </li>
          <li
            className={menu === "الخدمات" ? "clicked" : ""}
            onClick={() => setMenu("الخدمات")}
          >
            الخدمات
          </li>
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
          <li
            className={menu === "اتصل بنا" ? "clicked" : ""}
            onClick={() => setMenu("اتصل بنا")}
          >
            اتصل بنا
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
