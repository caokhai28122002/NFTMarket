import MonthlyIncome from "@/icons/MonthlyIncome";
import Upgrade from "@/icons/Upgrade";
import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";

const Home: NextPageWithLayout = () => {
  return (
    <main
      className={`flex w-11/12 min-h-screen flex-col items-center justify-between`}
    >
      <div className="grid grid-cols-12 gap-4 w-full pt-20">
        <div className="col-span-5 items-start">
          <div className="flex flex-col w-fit items-center gap-6">
            <p className="text-white text-center font-bold text-[71px] leading-[85px] uppercase">
              CREATE YOUR <br />
              CUSTOM <br /> WORKSPACE.
            </p>
            <p className="text-[23px] text-white text-center">
              IN A BUILDING OR LARGE VEHICLE, LIKE <br /> A SHIP, A ROOM TO
              WHICH ENTRY
            </p>
            <div className="upgrade flex flex-row items-center gap-4">
              <Upgrade />
              <div className="text flex flex-col">
                <p className="text-3xl text-white font-bold">UPGRADEABLE</p>
                <p className="text-lg text-white font-medium">1-3 LEVEL</p>
              </div>
            </div>
            <div className="upgrade flex flex-row items-center gap-4">
              <MonthlyIncome />
              <div className="text flex flex-col">
                <p className="text-3xl text-white font-bold">0.417%</p>
                <p className="text-lg text-white font-medium">MONTHLY INCOME RATE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7"><img src="/images/Clip.png"/></div>
      </div>
    </main>
  );
};
export default Home;

Home.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
