import './Gallery.scss';
import data from '../../data/gallery';

const Gallery = () => {
  return (
    <div className='gal'>
      <h1>معرض أعمالنا</h1>
      <div className="grid-con">
        {data.map((item)=>{
          return (
            <img className={item.classN} src={item.src} alt={item.classN} />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
