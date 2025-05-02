import CsanadCarousel from './CsanadCarousel'


export default function ShopErsekcsanad(){
    return (
            <div className="shop-container">
              <div className="carousel-container">
                <CsanadCarousel />
                <div>
                  <section id="section05" className="demo">
                    <a href="#section01">
                      <span>↓</span>
                    </a>
                  </section>
                </div>
              </div>
            </div>
        )
}