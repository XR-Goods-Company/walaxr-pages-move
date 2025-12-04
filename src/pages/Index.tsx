import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { FeaturedRetailer } from "@/components/FeaturedRetailer";
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
        <link rel="canonical" href="https://walaxr.com" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Products />
          <HowItWorks />
          <FeaturedRetailer />
          <Reviews />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
