import { FCC } from "@/types";

const SlideOne: FCC = ({ children }) => {
  return (
    <div className="flex w-full justify-between gap-32 px-1">
      <div className="flex flex-col w-fit min-w-[250px] gap-20">
        <div className="flex flex-col gap-8">
          <span className="text-[#E05BFF] font-bold text-6xl">01</span>
          <p className="text-white text-[25px] font-semibold">
            GERALD WINEFIELD <br />
            MOTION <br />
            ART DIRECTOR
          </p>
        </div>
        {children}
      </div>
      <div className="flex flex-col gap-8 w-fit">
        <p className="font-extrabold text-[100px] leading-tight text-white">
          INSPIRE, DELIGHT & EDUCATE
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-white font-medium text-xl">
            THAT IS LARGE ENOUGH FOR SEVERAL PEOPLE TO MOVE ABOUT, AND <br />
            WHOSE SIZE, FIXTURES, THE ACTIVITY TO BE CONDUCTED.
          </p>
          <div className="w-[200px] h-[10px] rounded bg-white"></div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[60px] w-fit">
        <div className="w-[100px] h-[10px] rounded bg-[#E05BFF]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default SlideOne;
