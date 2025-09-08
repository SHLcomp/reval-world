import './Main.scss';
import data from '../../data/main';

export const Main = () => {
  return (
    <div className='main'>
        <h1>حلولنا الأساسية</h1>
        <p>خدمات شاملة للإنشاءات الفولاذية تقدم الجودة والمتانة والابتكار للمشاريع الصناعية والتجارية</p>
        <div className="main-cont">
            {data.map((i)=>{
                return(
                    <div className="main-item">
                        <div className="img">
                            <img src={i.img} alt="" />
                        </div>
                        <div className="txt">
                            <i className={i.icon}></i>
                            <h3>{i.title}</h3>
                            <p>{i.des}</p>

                            <ul>
                                {i.info.map((item, index)=> <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Main;