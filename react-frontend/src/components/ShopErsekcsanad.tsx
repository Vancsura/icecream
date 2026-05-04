import { useEffect, useRef, useState } from "react";
//@ts-ignore
import bgImage from "../assets/img/csanad_shop.jpg";
//@ts-ignore
import pastel from "../assets/img/pastel.jpg";
//@ts-ignore
import kinder from "../assets/img/kinder-b.jpg";
//@ts-ignore
import snickers from "../assets/img/snickers.jpg";
//@ts-ignore
import pokemon from "../assets/img/pokemon.jpg";
//@ts-ignore
import raffa from "../assets/img/raffa.jpg";
//@ts-ignore
import erdei from "../assets/img/tejszínes-erdei.jpg";
//@ts-ignore
import csokis_k from "../assets/img/csokis-k.jpg";
//@ts-ignore
import almas from "../assets/img/almas.jpg";
//@ts-ignore
import dubai from "../assets/img/dubai.jpg";
//@ts-ignore
import sarkany from "../assets/img/sarkany.jpg";
//@ts-ignore
import malnas from "../assets/img/malnas-mag.jpg";
//@ts-ignore
import mak from "../assets/img/mak.jpg";
//@ts-ignore
import chocoball from '../assets/img/chocoball.jpeg';
//@ts-ignore
import dubai_g from '../assets/img/dubai-c.jpg';
//@ts-ignore
import pokemon_g from '../assets/img/pokemon-g.jpg';
//@ts-ignore
import vanilla from '../assets/img/vanilla.jpg';
//@ts-ignore
import berry from '../assets/img/berry.jpg';
//@ts-ignore
import baja_shop from '../assets/img/baja_shop.jpg';
//@ts-ignore
import cuki from '../assets/img/cuki.jpg';
//@ts-ignore
import cuki1 from '../assets/img/cuki1.jpg';
//@ts-ignore
import '../css/shopErsekcsanad.css';
import TypewriterInfoBlock from "./TypewriterInfoBlock";

export default function ShopErsekcsanad() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const keywords = [
    "Vegán",
    "Cukormentes",
    "Kézműves",
    "Gyümölcsös",
    "Tejmentes",
    "Prémium alapanyagok",
    "Friss tölcsér",
    "Házi ízek"
  ];

  const ribbonItems = [...keywords, ...keywords];

  const sillBaja = {
    title: "Sill fagyizó - Baja",
    hours: [
      "Minden nap:",
      "13:00 – 20:00"
    ],
    address: "Baja, Garibaldi utca 28.",
  };

  const sillCsanad = {
    title: "Sill fagyizó - Érsekcsanád",
    hours: [
      "Minden nap:",
      "13:00 – 19:00"
    ],
    address: "Érsekcsanád, Dózsa György út 77.",
  };

  const cukiBaja = {
    title: "Cuki fagyizó",
    hours: [
      "Minden nap:",
      "13:00 – 19:00"
    ],
    address: "Baja, Szentháromság tér 11.",
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;

    if (!slider || !track) return;

    let currentTranslate = 0;
    let targetTranslate = 0;
    let animationFrame: number | null = null;

    const isMobile = () => window.innerWidth <= 768;

    const clampTranslate = (value: number) => {
      const sliderWidth = slider.offsetWidth;
      const trackWidth = track.scrollWidth;

      const minTranslate = Math.min(0, sliderWidth - trackWidth);
      const maxTranslate = 0;

      return Math.max(minTranslate, Math.min(maxTranslate, value));
    };

    const setSliderPosition = () => {
      track.style.transform = `translateX(${currentTranslate}px)`;
    };

    const animateSlider = () => {
      const diff = targetTranslate - currentTranslate;

      if (Math.abs(diff) < 0.5) {
        currentTranslate = targetTranslate;
        setSliderPosition();
        animationFrame = null;
        return;
      }

      currentTranslate += diff * 0.08;
      setSliderPosition();

      animationFrame = requestAnimationFrame(animateSlider);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile()) return;

      const rect = slider.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const percent = mouseX / rect.width;

      const sliderWidth = slider.offsetWidth;
      const trackWidth = track.scrollWidth;
      const maxScroll = Math.max(0, trackWidth - sliderWidth);

      targetTranslate = -(maxScroll * percent);
      targetTranslate = clampTranslate(targetTranslate);

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(animateSlider);
      }
    };

    const handleResize = () => {
      if (isMobile()) {
        currentTranslate = 0;
        targetTranslate = 0;
        track.style.transform = "none";
        return;
      }

      currentTranslate = clampTranslate(currentTranslate);
      targetTranslate = clampTranslate(targetTranslate);
      setSliderPosition();
    };

    slider.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      slider.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ersekcsanad-page">
      <div
        className="ersekcsanad-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="ersekcsanad-content">
        <div className="ersekcsanad-inner">
          <div className="hero-carousel-section">
            <div className="ersekcsanad-carousel">
              <div className="hero-slider">
                <div className="hero-slide" style={{ backgroundImage: `url(${bgImage})` }} />
                <div className="hero-slide" style={{ backgroundImage: `url(${baja_shop})` }} />
                <div className="hero-slide" style={{ backgroundImage: `url(${pastel})` }} />
              </div>
            </div>

            <div className="first-text">
              <h1>Köszöntünk a Sill fagyizó weboldalán.</h1>
              <p>
                Az idei évben is új ízekkel és változatos kínálattal várunk
                minden kedves vendéget! Fagylaltjainkkal már Baján,
                Érsekcsanádon, Vaskúton, Sükösdön és Dusnokon is találkozhattok!
              </p>
            </div>
          </div>

          <div className="marketing-ribbon">
            <div className="marketing-ribbon-track">
              {ribbonItems.map((text, i) => (
                <span key={i} className="ribbon-item">
                  {text}
                  <span className="ribbon-icecream" aria-hidden="true">
                    <span className="cone">▾</span>
                    <span className="ball b1"></span>
                    <span className="ball b2"></span>
                    <span className="ball b3"></span>
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="flavours-slider" ref={sliderRef}>
            <div className="flavours-track" ref={trackRef}>
              <div
                className="flavour-card pastel"
                style={{ backgroundImage: `url(${pastel})` }}
              >
                <h3>Pastel de nata</h3>
              </div>
              <div
                className="flavour-card apple"
                style={{ backgroundImage: `url(${almas})` }}
              >
                <h3>Almáspite</h3>
              </div>
              <div
                className="flavour-card cherry"
                style={{ backgroundImage: `url(${mak})` }}
              >
                <h3>Meggyes-mákos</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${pokemon})` }}
              >
                <h3>Pokemon</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${erdei})` }}
              >
                <h3>Tejszínes-erdeigyümölcsös</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${raffa})` }}
              >
                <h3>Raffaello</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${snickers})` }}
              >
                <h3>Snickers</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${kinder})` }}
              >
                <h3>Kinder bueno</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${csokis_k})` }}
              >
                <h3>Csokis keksz</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${dubai})` }}
              >
                <h3>Dubai csokis</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${malnas})` }}
              >
                <h3>Málnás magnum</h3>
              </div>
              <div
                className="flavour-card choco"
                style={{ backgroundImage: `url(${sarkany})` }}
              >
                <h3>Sárkánygyümölcs</h3>
              </div>
            </div>
          </div>
          <div className="info-section" id="sill_baja">
            <div className="info-image">
              <img src={baja_shop} alt="Sill fagyizó" />
            </div>

            <TypewriterInfoBlock data={sillBaja} />

            <div className="info-image">
              <img src={bgImage} alt="Érsekcsanád fagyizó" />
            </div>
          </div>
          <div className="info-section" id="sill_cuki">
            <div className="info-image">
              <img src={cuki1} alt="Sill fagyizó" />
            </div>

            <TypewriterInfoBlock data={cukiBaja} />

            <div className="info-image">
              <img src={cuki} alt="Érsekcsanád fagyizó" />
            </div>
          </div>
          <div className="info-section" id="sill_csanad">
            <div className="info-image">
              <img src={baja_shop} alt="Sill fagyizó" />
            </div>

            <TypewriterInfoBlock data={sillCsanad} />

            <div className="info-image">
              <img src={bgImage} alt="Érsekcsanád fagyizó" />
            </div>
          </div>
        </div>
      </div>
      <div className="icecream-scoops">
        <div className="scoop scoop-pink" style={{ backgroundImage: `url(${berry})` }}></div>
        <div className="scoop scoop-vanilla" style={{ backgroundImage: `url(${dubai_g})` }}></div>
        <div className="scoop scoop-choco" style={{ backgroundImage: `url(${pokemon_g})` }}></div>
        <div className="scoop scoop-green" style={{ backgroundImage: `url(${chocoball})` }}></div>
        <div className="scoop scoop-berry" style={{ backgroundImage: `url(${vanilla})` }}></div>
      </div>
    </div>
  );
}
