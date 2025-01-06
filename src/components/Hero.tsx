import img4 from "../assets/image/4.png";
import img2 from "../assets/image/2.png";
import { TbSearch } from "react-icons/tb";
import { TypingAnimation } from "./FlipText";
export const Hero = () => {
  return (
    <>
      <div className="bg-[--primary] text-white lg:h-full lg:rounded-[4rem] relative w-full lg:grid  flex flex-col lg:grid-cols-5 py-10 overflow-hidden">
        <div className=" flex gap-2 col-start-4 h-[5.5rem] rounded-full -mt-[4rem] -mr-[5rem] py-2 relative ">
          <div className="relative bg-[--secondary] h-fit flex rounded-full gap-4 px-4 items-center simple-curve lg:border-[15.8px] border-[18px] border-white lg:w-[20rem] w-[25rem] justify-between z-20 after:absolute after:contents-[''] after:bg-white after:h-[5rem] after:w-[6rem] after:-end-[6rem] after:rounded-full after:-top-8 ">
            <div className="after:absolute after:w-[3.8rem] after:h-12 after:bg-white after:contents-[''] after:-top-[2.8rem] after:-left-[4.9rem] after:rounded-full after:z-10 before:absolute before:w-[4rem] before:h-[59px] before:bg-[--primary] before:contents-[''] before:-left-[5.8rem] before:-top-[2.2rem] before:z-20 absolute before:rounded-full" />
            <button
              type="button"
              className="flex gap-2 items-center bg-[--primary] rounded-full lg:py-3 py-2  px-8 text-lg"
            >
              <TbSearch /> <p>Search</p>
            </button>
            <div className="p-2">
              <div className="rounded-full bg-[--primary] h-[3rem] w-[3rem]" />
            </div>
          </div>
          <div className="p-3 -mt-[1.3rem] absolute -end-[6.8rem] z-20">
            <div className="rounded-full bg-[--primary] h-[8rem] w-[9.1rem] mt-[1.59rem] -right-[1.9rem] z-20 absolute" />
          </div>
        </div>

        <div className="lg:col-start-1 lg:col-end-3 p-4 lg:row-start-2 lg:absolute scale-x-[-1]  -left-[10rem] rounded-b-3xl object-cover col-auto relative mt-[4rem] lg:mt-0">
          <img
            src={img2}
            alt="image"
            className="lg:inline-flex lg:relative absolute h-screen"
          />
        </div>
        {/* content */}
        <div className="lg:col-start-3 lg:col-span-6 lg:row-start-3 lg:row-end-12 text-end lg:-mt-10 lg:z-20 relative h-full">
          <TypingAnimation className="text-[7rem]  font-black uppercase text-balance p-3 lg:mt-9">
            Hit Hard
          </TypingAnimation>
          <TypingAnimation className="text-[7rem]  font-black uppercase text-balance lg:mr-20 lg:mt-9">
            Win Big
          </TypingAnimation>

          <div className="relative lg:col-start-3 lg:col-span-6 lg:before:absolute lg:before:h-[15rem] lg:before:w-20 lg:before:bg-white lg:before:-top-[2.8rem] lg:before:-right-[1rem] lg:after:absolute lg:after:h-[5.5rem] lg:after:w-[5rem] lg:after:bg-[--primary]  lg:after:-top-[4.2rem] lg:after:-right-[0rem] lg:after:rounded-br-[4.6rem] overflow-hidden lg:overflow-visible lg:mt-[3rem] bg-white">
            <div className="mt-5 p-6 border-[15.8px] lg:rounded-[5rem] bg-[--secondary] h-[18rem] lg:absolute overflow-hidden lg:w-[44rem] border-white lg:z-20 lg:-right-[0.2rem] ">
              <div className="rounded-xl p-4 flex overflow-hidden">
                <div className="text-start p-4 uppercase">
                  <p className="text-4xl uppercase font-bold leading-tight">
                    40% off
                  </p>
                  <p className="text-2xl uppercase pb-2 ">On Racket</p>
                  <button className="bg-[--primary] py-1 rounded-full px-8 uppercase">
                    Shop Now
                  </button>
                </div>
                <img
                  src={img4}
                  alt="images"
                  className=" lg:w-[23rem] h-auto -right-10 absolute w-[50dvw]"
                />
              </div>
            </div>
            {/*  */}
            <div className=" relative lg:before:h-[8rem] lg:before:w-[18rem] lg:before:bg-white lg:before:absolute lg:before:-left-[3.9rem] lg:before:top-[14rem] lg:after:absolute lg:after:h-[10.5dvh] lg:after:w-[8dvw] lg:after:-left-[7rem] lg:after:top-[14rem] lg:after:bg-[--primary] lg:after:rounded-br-full " />
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};
