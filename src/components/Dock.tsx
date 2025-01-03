import { RiHome6Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import { useState } from "react";
export const FloatingNav = () => {
  const [active, setActive] = useState(0);
  const menu = [
    {
      name: "Home",
      icon: <RiHome6Line className="font-bold" />,
    },
    {
      name: "Shop",
      icon: <AiOutlineShop className="font-bold" />,
    },
    {
      name: "Cart",
      icon: <FaShoppingBag className="font-bold" />,
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
      <section className="flex flex-col gap-3">
        <div className="flex justify-around flex-col border rounded-full py-4 px-4 items-center gap-8 bg-[--secondary] ">
          <div className="p-3">
            <div className=" rounded-full bg-[--primary] h-[4rem] w-[4rem]" />
          </div>
          <div>
            {" "}
            <nav className="flex flex-col gap-8">
              {menu.map((val, index) => (
                <div
                  key={index}
                  className="flex flex-col  px-4 text-2xl "
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
            <div className=" rounded-full bg-[--primary]  h-[4rem] w-[4rem] " />
          </div>
        </div>
        <div>
          <div className="rounded-full bg-[--primary] flex flex-col justify-center items-center gap-4 py-[3.5rem]">
            <div>dfdfdf</div>
            <div>wewewewe</div>
          </div>
        </div>
      </section>
    </>
  );
};
