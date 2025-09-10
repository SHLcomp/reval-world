import { useEffect, useRef } from 'react';
import './Main.scss';
import data from '../../data/main';
import Ready from '../ready/Ready';

export const Main = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pop'); // trigger animation
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='main'>
      <h1>حلولنا الأساسية</h1>
      <p>خدمات شاملة للإنشاءات الفولاذية تقدم الجودة والمتانة والابتكار للمشاريع الصناعية والتجارية</p>
      
      <div className="main-cont">
        {data.map((i, index) => (
          <div
            className="main-item"
            key={index}
            ref={el => (itemsRef.current[index] = el)}
          >
            <div className="img">
              <img src={i.img} alt="" />
            </div>
            <div className="txt">
              <i className={i.icon}></i>
              <h3>{i.title}</h3>
              <p>{i.des}</p>

              <ul>
                {i.info.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Ready />
    </div>
  );
}

export default Main;
