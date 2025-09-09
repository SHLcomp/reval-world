import "./Why.scss";

export const Why = () => {
  return (
    <div className="why">
      <div className="right">
        <div className="txt">
          <h2>بناء التميز في الإنشاءات الفولاذية</h2>
          <p>
            ريفال وورلد للمقاولات هي مؤسسة مقاولات متخصصة تركز على تقديم حلول
            عالية الجودة في الهياكل الفولاذية وألواح الساندويتش والأبواب
            والإكسسوارات. مع سجل حافل في مشاريع البناء والصناعة، نحن نقدم
            المتانة والكفاءة والابتكار.
          </p>
          <div className="info">
            <div className="info-item">
              <i className="fa-solid fa-message"></i>
              <h4>رسالتنا</h4>
              <p>
                تقديم حلول إنشاءات فولاذية متفوقة تتجاوز توقعات العملاء من خلال
                الابتكار والحرفية عالية الجودة.
              </p>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-eye"></i>
              <h4>رؤيتنا</h4>
              <p>
                أن نكون الشركة الرائدة في الإنشاءات الفولاذية في المنطقة، معروفة
                بالموثوقية والابتكار والخدمة الاستثنائية.
              </p>
            </div>
          </div>

          <div className="why-us">
            <h2>لماذا تختار ريفال وورلد؟</h2>
            <ul>
              <li>مواد عالية الجودة</li>
              <li>الامتثال لمعايير السلامة</li>
              <li>تركيب وإنشاء خبير</li>
              <li>حلول متينة ومعزولة</li>
              <li>مجموعة واسعة من التشطيبات والألوان</li>
              <li>تصاميم هندسية مخصصة</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="left">
        <div className="img-cont">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <img
            className="move-up"
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <img
            className="move-down"
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
