import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="txt">
        <h1>بناء المستقبل بالتميز الفولاذية <span>هياكل فولاذية عالية الجودة</span></h1>
        <p>ريفال وورلد متخصصة في الهياكل الفولاذية عالية الجودة وألواح الساندويتش وحلول البناء الصناعي. نحن نقدم المتانة والكفاءة والابتكار لمشاريعكم الأكثر تطلباً.</p>
        <div className="ctas">
            <h4><i className="fa-solid fa-arrow-left"></i> تواصل معنا  </h4>
            <h4>عرض المشاريع</h4>
        </div>
        <div className="info">
          <p>مشروع مكتمل <span>500+</span></p>
          <p>سنة خبرة <span>15+</span></p>
          <p>ضمان الجودة <span>100%</span></p>
        </div>
      </div>

      <div className="img">
         <img
        src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Beautiful landscape"
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
      />
      </div>
    </div>
  );
};

export default Hero;
