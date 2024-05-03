import React from 'react';
import "./Main.css";

const Main = () => {
  return (
    <div className="container-fluid hero-sec">
      <div className='container'>
        <div dangerouslySetInnerHTML={{ __html: `
          <script async src="https://tp.media/content?currency=usd&trs=306762&shmarker=484287&show_hotels=false&powered_by=false&locale=en&searchUrl=book.flyngoo.com%2Fflights&primary_override=%2326D48Cff&color_button=%2326D48Cff&color_icons=%2326D48Cff&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%231842B6ff&border_radius=15&no_labels=&plain=true&origin=NYC&destination=LAX&promo_id=7879&campaign_id=100" charset="utf-8"></script>
        ` }}></div>
        {/* Other content within your main div */}
      </div>
    </div>
  );
};

export default Main;