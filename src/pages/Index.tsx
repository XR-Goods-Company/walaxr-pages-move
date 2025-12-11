import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { PlanetExploration } from "@/components/PlanetExploration";
import { HowItWorks } from "@/components/HowItWorks";
import { BestSellers } from "@/components/BestSellers";
import { Reviews } from "@/components/Reviews";
import { FunForAllAges } from "@/components/FunForAllAges";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WaLa XR | Augmented Reality Apparel - Scan. Click. Wow!</title>
        <meta name="description" content="Experience the magic of augmented reality apparel. Scan the QR code on your WaLa shirt and watch it come to life with stunning XR experiences - no app required!" />
        <meta name="keywords" content="WaLa XR, XR apparel, augmented reality clothing, AR shirts, XR shirts, interactive clothing" />
        <link rel="canonical" href="https://xr-goods-company.github.io/walaxr-pages-move/" />
      </Helmet>
      
      <div className="min-h-screen">
        <AnnouncementBar />
        <Header />
        <main>
          <Hero />
          <Products />
          <PlanetExploration />
          <HowItWorks />
          <BestSellers />
          <Reviews />
          <FunForAllAges />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
