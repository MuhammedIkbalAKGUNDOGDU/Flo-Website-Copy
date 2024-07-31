import React from "react";
import googleplay from "../assets/google_play.svg";
import appstore from "../assets/app_store.svg";
import appgallery from "../assets/app_gallery.svg";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer_top">
      <div className="musteri_hizmetleri">
        <h4 style={{ color: "gray" }}>Müşteri Hizmetleri</h4>
        <div className="underline underline2"></div>

        <div className="musteri_hizmetleri-2">
          <div>
            <p>Kolay İade</p>
            <div className="underline"></div>
            <p> Sıkça Sorulan Sorular</p>
            <div className="underline"></div>

            <p>İade ve Değişim</p>
            <div className="underline"></div>

            <p>Güvenli Alışveriş Kılavuzu</p>
            <div className="underline"></div>

            <p>Tıkla Gel Al</p>
            <div className="underline"></div>

            <p>Ayakkabı Bakım Rehberi</p>
            <div className="underline"></div>

            <p>Flotomic</p>
            <div className="underline"></div>

            <p>Blog</p>
            <div className="underline"></div>

            <p>Mobil Uygulamalar</p>
            <div className="underline"></div>
          </div>
          <div>
            <p>Kampanyalar</p>
            <div className="underline"></div>

            <p>Mağazalarımız</p>
            <div className="underline"></div>

            <p>Sipariş Takibi</p>
            <div className="underline"></div>

            <p>İşlem Rehberi</p>
            <div className="underline"></div>

            <p>Kişisel Verilerin Korunması</p>
            <div className="underline"></div>

            <p>Kurumsaş</p>
            <div className="underline"></div>

            <p>İnsan Kaynakları</p>
            <div className="underline"></div>

            <p>İletişim</p>
            <div className="underline"></div>

            <p>Çerez Ayarları</p>
            <div className="underline"></div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <img style={{ width: "140px" }} src={googleplay} alt="" />
          <img style={{ width: "140px" }} src={appstore} alt="" />
          <img style={{ width: "140px" }} src={appgallery} alt="" />
        </div>
      </div>
      <div className="follow_us">
        <h4 style={{ color: "gray" }}>Takip Edin</h4>
        <div className="underline "></div>
        <div style={{ marginTop: "1rem", fontSize: "19px" }}>
          {" "}
          <FaFacebook></FaFacebook> Flo Facebook
        </div>
        <div style={{ marginTop: "1rem", fontSize: "19px" }}>
          {" "}
          <FaXTwitter></FaXTwitter> Flo X
        </div>
        <div style={{ marginTop: "1rem", fontSize: "19px" }}>
          {" "}
          <FaPinterest></FaPinterest> Flo Pinterest
        </div>
        <div style={{ marginTop: "1rem", fontSize: "19px" }}>
          {" "}
          <FaSquareInstagram></FaSquareInstagram> Flo Instagram
        </div>
        <div style={{ marginTop: "1rem", fontSize: "19px" }}>
          {" "}
          <FaYoutube></FaYoutube> Flo Youtube
        </div>
      </div>
      <div className="third"></div>
    </div>
  );
};

export default footer;
