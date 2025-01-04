import img4 from "../assets/image/4.png";
import img2 from "../assets/image/2.png";
import { TbSearch } from "react-icons/tb";
export const Hero = () => {
  return (
    <>
      <div className="bg-[--primary] text-white h-full rounded-[4rem] relative w-full lg:grid  flex flex-col lg:grid-cols-5 p-10 ">
        <div className="flex gap-2 col-start-4 h-[5.5rem] rounded-full -mt-[4rem] -mr-[5rem] py-2 relative ">
          <div className="relative bg-[--secondary] h-fit flex rounded-full gap-4 px-4 items-center simple-curve border-[15.8px] border-white w-[20rem] justify-between z-20 after:absolute after:contents-[''] after:bg-white after:h-[5rem] after:w-[6rem] after:-end-[6rem] after:rounded-full after:-top-8 ">
            <button
              type="button"
              className="flex gap-2 items-center bg-[--primary] rounded-full py-3 px-8 text-lg"
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
        <img
          src={img2}
          alt="image"
          className="h-[99dvh] lg:col-start-1 lg:col-end-3 p-4 lg:row-start-2 lg:absolute scale-x-[-1]  -left-[10rem] rounded-b-3xl object-cover col-auto"
        />
        {/* content */}
        <div></div>
        <div className="lg:col-start-3 lg:col-span-6 lg:row-start-3 lg:row-end-12 text-end lg:-mt-10 z-20 relative ">
          <p className="lg:text-[7rem] text-2xl font-black uppercase text-balance lg:leading-[8rem] p-5 ">
            Hit <span className="[font-stretch]">H</span>ard
            <br />
            Wi<span>N</span> Big
          </p>
          <div className="relative  after:absolute after:h-[5rem] after:w-[3rem] after:bg-white after:rounded-full after:-right-[3.2rem] before:absolute before:contents-[''] before:h-20 before:w-20 before:bg-[--primary] before:z-40 before:rounded-full before:-right-[2.6rem] before:-top-[3.2rem] rounded-3xl ">
            <div className="mt-5 p-6 border-[15.8px] rounded-[5rem] bg-[--secondary] h-[18rem] absolute overflow-hidden w-[44rem] border-white z-20 -right-[3rem]">
              <div className="rounded-xl p-4 flex ">
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
                  className=" w-[23rem] h-auto -right-10 absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" absolute h-20 w-[5.5rem] bg-white left-[614px] inset-[39rem] rounded-full 
        before:h-20 before:w-[5.8rem] before:bg-[--primary] before:contents-[''] before:absolute before:right-[3.5rem] before:bottom-[0.7rem] before:rounded-br-3xl
      "
      />
    </>
  );
};
