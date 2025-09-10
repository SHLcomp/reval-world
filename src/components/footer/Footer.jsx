import React from 'react';
import './Footer.scss';
// import logo from '../../assets/'


export default function Footer() {
return (
<footer className="reval-footer" dir="rtl">
<div className="container">
<div className="footer-top">
<div className="brand">
<h1>
            <span>ريفال</span>
            <span>وورلد</span>
            <span>
              {" "}
              {""}للمقاولات {""}
            </span>
          </h1>
<p className="about">ريفال وورلد للمقاولات - إنشاءات فولاذية متخصصة، نعمل على تقديم حلول هندسية متكاملة ومقاولات عالية الجودة.</p>
<div className="socials">
<a href="#" aria-label="facebook" className="icon" dangerouslySetInnerHTML={{__html: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.13 10.44 21.9v-7.02H7.9v-2.81h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.81h-2.3V21.9C18.34 21.13 22 17.06 22 12.07z"/></svg>`}} />
<a href="#" aria-label="twitter" className="icon" dangerouslySetInnerHTML={{__html: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.12 1.53-1.94-.67.4-1.41.69-2.2.85C18.9 4.7 17.94 4 17.64 3c-.5 0-1 .22-1.34.57-1.1-.22-2.14-.6-3.06-1.12-.38.65-.07 1.5.47 1.92-.58-.02-1.13-.18-1.6-.45-.04.7.22 1.4.75 1.79-.52 0-1.02-.16-1.45-.4v.04c0 1.17.83 2.15 1.92 2.38-.45.12-.93.14-1.41.05.4 1.24 1.51 2.14 2.85 2.17-1.02.8-2.3 1.29-3.61 1.29-.24 0-.48-.01-.71-.05 1.33.85 2.91 1.36 4.6 1.36 5.52 0 8.55-4.57 8.55-8.54v-.39c.58-.4 1.07-.9 1.46-1.48-.52.23-1.07.38-1.64.45.59-.36 1.04-.96 1.25-1.66z"/></svg>`}} />
<a href="#" aria-label="linkedin" className="icon" dangerouslySetInnerHTML={{__html: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5H9.01V9.5h3.41v1.5h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.8zM5.34 8.03C4.2 8.03 3.3 7.11 3.3 5.98 3.3 4.84 4.2 3.92 5.34 3.92s2.04.92 2.04 2.06c0 1.13-.9 2.05-2.04 2.05zM7.12 20.45H3.56V9.5h3.56v10.95z"/></svg>`}} />
</div>
</div>


<div className="links">
<div className="col">
<h4>خدماتنا</h4>
<ul>
<li><a href="#">إنشاءات فولاذية</a></li>
<li><a href="#">تصميم هندسي</a></li>
<li><a href="#">إدارة مشاريع</a></li>
</ul>
</div>
<div className="col">
<h4>روابط سريعة</h4>
<ul>
<li><a href="#">من نحن</a></li>
<li><a href="#">المشاريع</a></li>
<li><a href="#">اتصل بنا</a></li>
</ul>
</div>

{/* <div className="col newsletter">
<h4>اشترك في النشرة الإخبارية</h4>
<p>احصل على آخر التحديثات والعروض.</p>
<form className="newsletter-form" onSubmit={(e)=>e.preventDefault()}>
<input type="email" placeholder="بريدك الإلكتروني" aria-label="email" />
<button type="submit">اشترك</button>
</form>
</div> */}

</div>
</div>


<div className="footer-bottom">
<p>© {new Date().getFullYear()} ريفال وورلد. كل الحقوق محفوظة.</p>
<div className="bottom-links">
<a href="#">سياسة الخصوصية</a>
<a href="#">الشروط والأحكام</a>
</div>
</div>
</div>
</footer>
);
}
