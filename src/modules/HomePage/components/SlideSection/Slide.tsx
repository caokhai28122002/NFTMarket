import { FCC } from "@/types";

type IProps = {
  slideIndex: "01" | "02" | "03" | "04" | "05";
  slogan: string;
  title: string;
  description: string;
}
const Slide: FCC<IProps> = ({ children, description, slideIndex, slogan, title }) => {
  return (
    <div className="flex w-full justify-between gap-32 px-1">
      <div className="flex flex-col w-fit min-w-[250px] gap-20">
        <div className="flex flex-col gap-8">
          <span className="text-[#E05BFF] font-bold text-6xl">{slideIndex}</span>
          <p className="text-white text-[25px] font-semibold max-w-[250px]">
            {slogan}
          </p>
        </div>
        {children}
      </div>
      <div className="flex flex-col gap-8 w-fit">
        <p className="font-extrabold text-[100px] leading-tight text-white">
          {title}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-white font-medium text-xl">
            {description}
          </p>
          <div className="w-[200px] h-[10px] rounded bg-white"></div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[60px] w-fit">
        <div className={`h-[10px]  ${slideIndex === "01" ? 'w-[100px] rounded bg-[#E05BFF]' : 'w-[10px] rounded-full bg-white'}`}></div>
        <div className={`h-[10px]  ${slideIndex === "02" ? 'w-[100px] rounded bg-[#E05BFF]' : 'w-[10px] rounded-full bg-white'}`}></div>
        <div className={`h-[10px]  ${slideIndex === "03" ? 'w-[100px] rounded bg-[#E05BFF]' : 'w-[10px] rounded-full bg-white'}`}></div>
        <div className={`h-[10px]  ${slideIndex === "04" ? 'w-[100px] rounded bg-[#E05BFF]' : 'w-[10px] rounded-full bg-white'}`}></div>
        <div className={`h-[10px]  ${slideIndex === "05" ? 'w-[100px] rounded bg-[#E05BFF]' : 'w-[10px] rounded-full bg-white'}`}></div>
      </div>
    </div>
  );
};

export default Slide;
