import './Stats.scss';

export const Stats = () => {
  return (
    <div className='stats'>
        <div className="stats-cont">
            <h2>إحصائيات المشاريع</h2>
            <p>سجلنا الحافل يتحدث عن نفسه</p>
            <ul>
                <li><span>+2م</span>متر مربع مبني</li>
                <li><span>+500</span>مشروع مكتمل</li>
                <li><span>+15</span>سنة خبرة</li>
                <li><span>+150</span>عميل راضي</li>
            </ul>
        </div>
    </div>
  )
}


export default Stats;