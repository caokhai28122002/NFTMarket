import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";
import HeroSection from "./components/HeroSection";
import OurService from "./components/OurService";
import SlideSection from "./components/SlideSection";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
      <OurService />
      <SlideSection />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
