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
    <>
      <div className="footer_top">
        <div className="musteri_hizmetleri">
          <h3 style={{ color: "gray" }}>Müşteri Hizmetleri</h3>
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
          <h3 style={{ color: "gray" }}>Takip Edin</h3>
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
        <div className="third">
          <div className="thirt-element">
            <h3 style={{ color: "gray" }}>FLO Pazaryeri</h3>
            <p>
              Binlerce ürün yelpazemizle, müşterilerimize rekabetçi ve uygun
              fiyatlar sunuyoruz.
            </p>
          </div>
          <div className="thirt-element">
            <h3 style={{ color: "gray" }}>Kolay İade</h3>
            <p>
              flo.com.tr’den almış olduğunuz ve hiç kullanmadığınız ürünleri
              iade süresi içinde iade edebilirsiniz.
            </p>
          </div>
          <div className="thirt-element">
            <h3 style={{ color: "gray" }}>Kargo Bedava</h3>
            <p>
              FLO satıcısına özel 1250 TL ve üzeri alışverişlerinizde ve
              satıcılarımızın farklı sepet tutarlarına göre KARGO BEDAVA.
            </p>
          </div>
          <div className="thirt-element">
            <h3 style={{ color: "gray" }}>Yardım Merkezi</h3>
            <p>
              Müşteri hizmetlerimiz çağrılarınıza haftanın 7 günü 09:00 - 22:00
              saatleri arasında hizmet vermektedir.
            </p>
          </div>
          <div className="thirt-element">
            <h3 style={{ color: "gray" }}>6 Taksit Seçeneği</h3>
            <p>
              Yapacağınız tüm alışverişlerde Kredi Kartlarına 6 taksit avantajı.
            </p>
          </div>
          <div className="thirt-element">
            <h3 style={{ color: "gray" }}>Güvenli Alışveriş</h3>
            <p>
              Dünyanın en popüler ve güvenilir yöntemiyle ödeme yapın.
              <div style={{ display: "flex", marginTop: "20px" }}>
                <img
                  src="https://www.guvendamgasi.org.tr/public/images/logo.png"
                  alt=""
                />
                <img
                  style={{ width: "100px", marginLeft: "20px" }}
                  src="https://www.adenbilisim.com.tr/wp-content/uploads/2021/04/etbis.png"
                  alt=""
                />
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <h3
          style={{ fontWeight: "normal", paddingBottom: "1%" }}
          className="thirt-element"
        >
          6 Aya Varan Taksit Seçenekleri
        </h3>
        <img
        style={{width:"1100px"}}
          src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-bankcard.png"
          alt=""
        />
        <img  style={{width:"203px", marginLeft:"27rem"}} src="https://www.flo.com.tr/pub/assets/flo-v2/images/footer-payment_2.png" alt="" />
        <p>© 2024 FLO.COM.TR. TÜM HAKLARI SAKLIDIR.</p>
      </div>
    </>
  );
};

export default footer;
