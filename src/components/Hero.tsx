import { TbSearch } from "react-icons/tb";
export const Hero = () => {
  return (
    <>
      <div className=" bg-[--primary] text-white h-screen  rounded-[4rem] reletive w-full grid grid-cols-5 p-10">
        <div className="col-start-1 col-end-3   p-4">dfdfdfdfdfdfdfdfdf</div>
        <div className="flex gap-2 col-start-4   h-[5.5rem] rounded-full -mt-[3.5rem] -mr-[10rem]  p-2 relative">
          <div className=" bg-[--secondary] h-fit flex rounded-full gap-4 px-4 items-center simple-curve border-[20px] border-white w-[19rem] justify-between">
            <button
              type="button"
              className="flex gap-2 items-center bg-[--primary] rounded-full p-3 text-lg "
            >
              {" "}
              <TbSearch /> <p>Search</p>
            </button>
            <div className="p-3">
              <div className=" rounded-full bg-[--primary] h-[3rem] w-[3rem]" />
            </div>

            <div className="p-3  absolute -end-[6.8rem]">
              <div
                className={` mt-5 rounded-full bg-[--primary] h-[9rem] w-[11rem] after:contents-[''] after:absolute  after:content-['']  after:inset-0
                      
                      after:border-l-[--secondary] after:rounded-full z-10 "`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
