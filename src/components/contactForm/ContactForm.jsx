import { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "", // new dropdown field
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("الرجاء تعبئة جميع الحقول المطلوبة.");
      return;
    }

    setStatus("تم إرسال الرسالة بنجاح ✅");
    setFormData({ name: "", email: "", subject: "", service: "", message: "" });
  };

  return (
    <div className="contact-form">
      <h2>تواصل معنا</h2>
      <p>
        هل أنت مستعد لبدء مشروع الإنشاءات الفولاذية الخاص بك؟ تواصل مع فريقنا
        المتخصص للحصول على استشارة وعروض أسعار وإرشادات مهنية.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="الاسم *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="الايميل *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="الموضوع"
          value={formData.subject}
          onChange={handleChange}
        />

        {/* 📌 New Dropdown */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">اختر نوع الخدمة *</option>
          <option value="استشارة">ألواح الساندويتش</option>
          <option value="تصميم">الأبواب و النوافذ</option>
          <option value="إنشاء">الحظائر و المستودعات</option>
          <option value="صيانة">خدمات التركيب</option>
        </select>

        <textarea
          name="message"
          placeholder="الرسالة *"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">إرسال الرسالة</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default ContactForm;
