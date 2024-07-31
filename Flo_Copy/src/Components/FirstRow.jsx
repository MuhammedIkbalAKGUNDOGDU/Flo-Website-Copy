import React from "react";

const FirstRow = () => {
  return (
    <div className="first-row-container">
      <div className="first-row-container2">
        <div>Mobil Uygulamayı</div>
        <div className="firstrow-donwload">Hemen İndir</div>
      </div>
      <div className="first-row-container2">
        <div className="firstrow-rigthtop firstrow-rigthtop-cursor">
          Sipariş Takibi
        </div>
        <div className="firstrow-rigthtop">|</div>
        <div className="firstrow-rigthtop firstrow-rigthtop-cursor">
          Kolay İade
        </div>
        <div className="firstrow-rigthtop">|</div>
        <div className="firstrow-rigthtop firstrow-rigthtop-cursor">Yardım</div>
      </div>
    </div>
  );
};

export default FirstRow;
