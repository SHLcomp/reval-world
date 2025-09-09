import "./Projects.scss";
import data from "../../data/projects";

export const Projects = () => {
  return (
    <div className="projects">
        <h1>المشاريع المميزة</h1>
        <h5>استكشف محفظة مشاريعنا الناجحة في الإنشاءات الفولاذية عبر المملكة العربية السعودية، والتي تعرض خبرتنا في التطبيقات الصناعية والتجارية المختلفة.</h5>
      <div className="projects-cont">
        {data.map((item) => {
          return (
            <div className="project">
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="txt">
                  <h3>{item.fullTitle}</h3>
                  <h5>{item.des}</h5>
                  <div className="info">
                    <p>{item.date}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
