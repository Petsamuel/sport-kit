import img4 from "../assets/image/4.png";
import img2 from "../assets/image/2.png";
import { TbSearch } from "react-icons/tb";
export const Hero = () => {
  return (
    <>
      <div className="bg-[--primary] text-white h-screen rounded-[4rem] relative w-full grid grid-cols-5 p-10">
        <div className="relative col-start-1 col-end-3 p-4 row-span-12">
          <div className="absolute scale-x-[-1] w-full -left-[10rem]">
            <img
              src={img2}
              alt="image"
              className="h-[85dvh] w-auto translate-y-4 "
            />
          </div>
        </div>
        <div className="flex gap-2 col-start-4 h-[5.5rem] rounded-full -mt-[4rem] -mr-[5rem] py-2 relative ">
          <div className="relative bg-[--secondary] h-fit flex rounded-full gap-4 px-4 items-center simple-curve border-[15px] border-white w-[20rem] justify-between z-20 after:absolute after:contents-[''] after:bg-white after:h-[5rem] after:w-[6rem] after:-end-[6rem] after:rounded-full after:-top-8 ">
            <button
              type="button"
              className="flex gap-2 items-center bg-[--primary] rounded-full p-3 text-lg"
            >
              <TbSearch /> <p>Search</p>
            </button>
            <div className="p-3">
              <div className="rounded-full bg-[--primary] h-[3rem] w-[3rem]" />
            </div>
          </div>
          <div className="p-3 -mt-[1.3rem] absolute -end-[6.8rem] z-20">
            <div className="rounded-full bg-[--primary] h-[8rem] w-[9.1rem] mt-[1.59rem] -right-[1.9rem] z-20 absolute" />
          </div>
        </div>
        {/* content */}
        <div></div>
        <div className="col-start-3 col-span-5 row-start-3 row-end-12 text-end mt-10 z-50">
          <p className="text-[8rem] font-black uppercase text-balance leading-[8rem] ">
            Hit <span className="[font-stretch]">H</span>ard
            <br />
            Wi<span>N</span> Big
          </p>
          <div className="mt-2 p-4 border-[1rem] rounded-[3rem] bg-[--secondary] h-[18rem] relative overflow-hidden w-full after:absolute after:w-10 after:h-10">
            <div className="rounded-xl p-3 flex ">
              <div className="text-start">
                <p className="text-[2rem] font-bold">40% off</p>
                <p className="text-[4rem] font-black">On Racket</p>
                <button className="bg-[--primary] p-2">Shop Now</button>
              </div>
              <img
                src={img4}
                alt="images"
                className=" w-[20rem] h-auto -right-10 absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
