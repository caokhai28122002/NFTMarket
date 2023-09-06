import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";
import HeroSection from "./components/HeroSection";
import OurService from "./components/OurService";
import SlideSection from "./components/SlideSection";
import { QRCode } from "@/libraries/qr-code";
const HomePage: NextPageWithLayout = () => {
  const qrCode = new QRCode();
  const value = qrCode
    .setBeneficiaryOrganization("970415", "109871427613")
    .setTransactionAmount("50000")
    .setAdditionalDataFieldTemplate("noidunggiaodich")
    .build();
  console.log({ value });

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
