import "./ContactInfo.scss";
import data from "../../data/contactInfo";

export const ContactInfo = () => {
  return (
    <div className="contactInfo">
        <h2>معلومات التواصل</h2>
      <div className="contact-cont">
        {data.map((item) => {
          return (
            <div className="item">
              <div className="txt">
                <h4>{item.title}</h4>
                <i className={item.icon}></i>
              </div>
              <ul>
                {item.des.map((item, index)=> <li key={index}>{item}</li>)}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContactInfo;
