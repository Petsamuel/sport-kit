import { RiHome6Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { FaShoppingBag, FaHeart, FaUser } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";
import { useState } from "react";
import img from "../assets/image/6.png";
export const FloatingNav = () => {
  const [active, setActive] = useState(2);
  const menu = [
    {
      name: "Shop",
      icon: <AiOutlineShop className="font-bold" />,
    },
    {
      name: "Cart",
      icon: <FaShoppingBag className="font-bold" />,
    },
    {
      name: "Home",
      icon: <RiHome6Line className="font-bold" />,
    },
    { name: "Wishlist", icon: <FaHeart /> },
  ];
  // const Feature = [
  //   {
  //     name: "T-shirt",
  //     icon: "",
  //     description: "",
  //   },
  // ];

  return (
    <>
      <section className="flex flex-col gap-3 items-center">
        <div className="flex lg:justify-around lg:flex-col flex-row lg:border rounded-full lg:py-4 lg:px-4 items-center gap-8 bg-[--secondary] fixed lg:relative bottom-2 justify-center w-fit place-content-center ">
          <div className="p-6 flex justify-center items-center gap-6 lg:flex-col">
            <div className=" rounded-full bg-[--primary] h-[3rem] w-[3rem] flex flex-col gap-3 overflow-hidden items-center ">
              <TbMenu className="text-2xl text-white" />
            </div>
            <div>
              {" "}
              <nav className="flex lg:flex-col flex-row gap-8">
                {menu.map((val, index) => (
                  <div
                    key={index}
                    className="flex flex-col  lg:px-4  text-2xl "
                    onClick={() => setActive(index)}
                  >
                    <p
                      className={`cursor-pointer ${
                        active === index
                          ? "text-white scale-105"
                          : "text-[--primary]"
                      }  hover:scale-125 font-black`}
                    >
                      {val.icon}
                    </p>
                  </div>
                ))}
              </nav>
            </div>
            <div className="">
              <FaUser className=" rounded-full bg-[--primary]  h-[3rem] w-[3rem] text-[--secondary]" />
            </div>
          </div>
        </div>

        <div className=" text-white lg:rounded-full bg-[--primary] flex flex-col  justify-evenly items-center gap-4 py-[2rem] text-sm uppercase p-4 w-full mb-[10rem] lg:mb-0">
          <div className="lg:text-xs text-4xl font-[poppins] font-bold lg:font-normal">
            New Arrival
          </div>
          <div className="p-3">
            <img src={img} alt="img" className="lg:w-20 lg:h-20" />
          </div>
          <button className="lg:text-xs bg-[--secondary] text-white p-3 rounded-full text-xl w-[8rem] hover:bg-[--primary] hover:shadow-xl ">
            Order Now
          </button>
        </div>
      </section>
    </>
  );
};
