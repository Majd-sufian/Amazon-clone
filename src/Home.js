import React from "react";
import "./style/Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
        alt="amazon Banner"
      />
      <div className="home__row">
        <Product
          id="122233244"
          title="Acer Aspire 5 Slim Laptop"
          price="399"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        />
        <Product
          id="122233245"
          title="Bose SoundLink Around Ear Wireless Headphones "
          price="99"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71jDdUuRi8L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="122233246"
          title="Samsung Galaxy S20"
          price="299"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61HEsAA5KDL._AC_SL1000_.jpg"
        />
        <Product
          id="122233247"
          title="Madden NFL 20 (PS4)"
          price="28"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        />
        <Product
          id="122233248"
          title="Acer Aspire 5 Slim Laptop"
          price="399"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81vZg0MVUrL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="122233249"
          title="HDR Roku Smart TV - 65R625"
          price="399"
          rating={5}
          image="https://m.media-amazon.com/images/S/aplus-media/vc/a376ac2f-07a9-4615-87f0-e32074f7e234.__CR0,0,1464,600_PT0_SX1464_V1___.pnfg"
        />
      </div>
    </div>
  );
}

// // https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/Skala/Israel/Fuji_Hero_SkalaFinal5_1X_en_US._CB452377449_.jpg
// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
