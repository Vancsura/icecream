import { useEffect, useRef } from "react";
import CsanadCarousel from "./CsanadCarousel";
//@ts-ignore
import bgImage from "../css/img/csanad_shop.jpg";
//@ts-ignore
import pastel from "../css/img/pastel.jpg";
//@ts-ignore
import kinder from "../css/img/kinder-b.jpg";
//@ts-ignore
import snickers from "../css/img/snickers.jpg";
//@ts-ignore
import pokemon from "../css/img/pokemon.jpg";
//@ts-ignore
import raffa from "../css/img/raffa.jpg";
//@ts-ignore
import erdei from "../css/img/tejszínes-erdei.jpg";
//@ts-ignore
import csokis_k from "../css/img/csokis-k.jpg";
//@ts-ignore
import almas from "../css/img/almas.jpg";
//@ts-ignore
import dubai from "../css/img/dubai.jpg";
//@ts-ignore
import sarkany from "../css/img/sarkany.jpg";
//@ts-ignore
import malnas from "../css/img/malnas-mag.jpg";
//@ts-ignore
import mak from "../css/img/mak.jpg";
//@ts-ignore
import chocoball from "../css/img/chocoball.jpeg";
import "../css/shopErsekcsanad.css";

export default function ShopErsekcsanad() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

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
              <CsanadCarousel />
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

          <div className="second-text mt-4">
            Újdonságainkat és régi kedvenceiket is megtalálják a pultban!
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
        </div>
      </div>
      <div className="icecream-scoops">
        <div className="scoop scoop-pink"></div>
        <div className="scoop scoop-vanilla"></div>
        <div className="scoop scoop-choco"></div>
        <div
          className="scoop scoop-green"
          style={{ backgroundImage: `url(${chocoball})` }}
        ></div>
        <div className="scoop scoop-berry"></div>
      </div>
    </div>
  );
}
