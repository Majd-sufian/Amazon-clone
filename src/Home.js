import React from "react";
import "./style/Home.css";
import Product from "./component/Product";

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
          price={399}
          rating={5}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        />
        <Product
          id="122233245"
          title="Bose SoundLink Around Ear Wireless Headphones "
          price={99}
          rating={4}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/71jDdUuRi8L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="122233246"
          title="Samsung Galaxy S20"
          price={299}
          rating={4}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/61HEsAA5KDL._AC_SL1000_.jpg"
        />
        <Product
          id="122233247"
          title="Madden NFL 20 (PS4)"
          price={28}
          rating={5}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
        />
        <Product
          id="122233248"
          title="Acer Aspire 5 Slim Laptop"
          price={399}
          rating={5}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/81vZg0MVUrL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="122233249"
          title="HDR Roku Smart TV - 65R625"
          price={399}
          rating={5}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/71VC9cPNy6L._AC_SL1080_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12223323"
          title="Sceptre 24 Curved"
          price={133}
          rating={3}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg"
        />
        <Product
          id="1222336"
          title="AMATAGE HDMI Portable Monitor 15.6"
          price={449}
          rating={4}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/71EmBD4PFBL._AC_SL1100_.jpg"
        />
        <Product
          id="122233255"
          title="Samsung Galaxy S20 Plus SM-G985F"
          price={899}
          rating={4}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://images-na.ssl-images-amazon.com/images/I/61lqB9UwAJL._AC_SL1000_.jpg"
        />
        <Product
          id="122233666"
          title="Nine West Women's Strap Watch"
          price={29}
          rating={5}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://m.media-amazon.com/images/I/71m0FEiHk0L._AC_UL320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12223326663"
          title="Joker"
          price={19.9}
          rating={4}
          des="Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker."
          image="https://m.media-amazon.com/images/I/91lnpx4HLoL._AC_UL320_.jpg"
        />
        <Product
          id="122233249"
          title="The Division (4K UHD)"
          price={29.9}
          rating={4}
          des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          image="https://m.media-amazon.com/images/I/91NgN-5pNcL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
}

// // https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/Skala/Israel/Fuji_Hero_SkalaFinal5_1X_en_US._CB452377449_.jpg
// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
