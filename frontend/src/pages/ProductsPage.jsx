import React from "react";
import Hero from "./../components/Products/Hero";
import Investors from "./../components/Products/Investors";
import LeftImage from "./../components/Products/LeftImage";
import RightImage from "./../components/Products/RightImage";

const ProductsPage = () => {
  return (
    <main className="flex flex-col gap-20 font-[Poppins]">
      <Hero />
      <LeftImage
        imageUrl={"/kite.png"}
        heading={"Kite"}
        content="
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          "
        learnMore={{
          link: "/",
          content: "Learn more",
        }}
        tryDemo={{
          link: "/",
          content: "Try demo",
        }}
        appStore={"/appstoreBadge.svg"}
        googlePlay={"/googlePlayBadge.svg"}
      />
      <RightImage
        imageUrl={"/console.png"}
        heading={"Console"}
        content="
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations."
        learnMore={{
          link: "/",
          content: "Learn more",
        }}
      />
      <LeftImage
        imageUrl={"/coin.png"}
        heading={"Coin"}
        content="
            Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
          "
        tryDemo={{
          link: "/",
          content: "Coin",
        }}
        appStore={"/appstoreBadge.svg"}
        googlePlay={"/googlePlayBadge.svg"}
      />
      <RightImage
        imageUrl={"/kiteconnect.png"}
        heading={"Kite Connect API"}
        content="
            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
          "
        tryDemo={{
          link: "/",
          content: "Kite Connect",
        }}
        
      />

      <LeftImage
      imageUrl={"/varsity-products.svg"}
        heading={"Varsity mobile"}
        content="
           An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
          "
        
        appStore={"/appstoreBadge.svg"}
        googlePlay={"/googlePlayBadge.svg"}
      />
      <Investors />
    </main>
  );
};

export default ProductsPage;
