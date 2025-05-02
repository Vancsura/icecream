import BajaCarousel from "./BajaCarousel";
import { Link } from "react-router-dom";
// @ts-ignore
import cuki from "../css/img/cuki.jpg";
// @ts-ignore
import cukimap from "../css/img/cukimap.jpg";
// @ts-ignore
import sillLogo from "../css/img/csanad_logo.jpg";
// @ts-ignore
import sillMap from "../css/img/sillbajamap.jpg";
// @ts-ignore
import cake from "../css/img/cake.jpg";


export default function ShopBaja() {
  return (
    <div className="shop-container">
      <div className="carousel-container">
        <BajaCarousel />
      </div>
      <section id="section05" className="demo">
        <a href="#">
          <span></span>
        </a>
      </section>
      <div className="sillBaja mb-3 mt-3">
        <div className="cimsor mb-3 mt-3">
          Fagyizni csak úgy lehet,
          <br />
          ha minden cseppje ízletes,
          <br />
          puncs, vanília, mogyoró,
          <br />A legjobb Sillnél kapható!
        </div>
        <div className="row">
          <div className="col image-container m-3">
            <img src={sillLogo} alt="Fagylalt" />
          </div>
          <div className="col text-box mb-2">
            Nyitvatartás:
            <br />
            Mindennap várjuk kedves vendégeinket <br />
            13:00 - 20:00 <br />
            között.
          </div>
          <Link
            className="col m-3"
            to="https://maps.app.goo.gl/Qz33C7dSaDc6Peav6"
          >
            <div className="image-container mb-2">
              <img src={sillMap} alt="Fagylalt" />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <div className="add">Fagyitorta rendelési lehetőség a +36-20/111-2222 számon!</div>
      </div>
      <div className="cake">
        <img src={cake} alt="Fagylalt" />
      </div>
      <hr />
      <div className="inner-text m-3">
        Dominik fagyija már megtalálható a cuki café & bar kínálatában:
      </div>
      <div className="row">
        <div className="col image-container m-3">
          <img src={cuki} alt="Fagylalt" />
        </div>
        <div className="col text-box mb-2">
          Nyitvatartás:
          <br />
          Hétfő-Szerda: 08:00-21:00 <br />
          Péntek: 08:00-1:00 <br />
          Szombat: 08:00-3:00
        </div>
        <Link
          className="col m-3"
          to="https://maps.app.goo.gl/ULfwUnyb1FForqQ28"
        >
          <div className="image-container mb-2">
            <img src={cukimap} alt="Fagylalt" />
          </div>
        </Link>
      </div>
    </div>
  );
}
