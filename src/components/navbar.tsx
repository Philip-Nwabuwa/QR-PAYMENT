import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="fixed w-full h-[70px] shadow-xl bg-slate-900 text-white">
        <div className="flex justify-between sticky top-[0%] z-[99] items-center w-[90%] mx-auto h-full px-2 2xl:px-16">
          <Link to="/">
            <div className="text-3xl font-bold  hover:underline">
              QR Generator
            </div>
          </Link>

          <div>
            <ul className="hidden md:flex font-bold">
              <Link to="https://www.qrcode-tiger.com/api-documentation">
                <li className="ml-10 text-xl uppercase hover:text-slate-400 hover:border-b">
                  Docs
                </li>
              </Link>
              <Link to="/">
                <li className="ml-10 text-xl uppercase hover:text-slate-400 hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <button className="md:flex hidden">
            <a
              href="/generator"
              className="bg-white text-black px-6 py-3 font-bold rounded-md hover:bg-gray-200 hover:underline"
            >
              Get Started
            </a>
          </button>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-800 text-white font-bold p-4 pl-5 ease-in duration-500"
              : "fixed left-[-200%] top-0 ease-in duration-500"
          }
        >
          <div className="z-[100] mt-6 ">
            <div className="flex w-full items-center justify-between">
              <div className="text-3xl font-bold hover:underline">
                <a href="/">QR Generator</a>{" "}
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg p-1  border-2  cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <AiOutlineClose size={30} className="text-white" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-8">
              <p className="w-[85%] md:w-[90%] py-2 text-2xl">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link to="https://www.qrcode-tiger.com/api-documentation">
                <li className="py-6 text-2xl tracking-widest">Docs</li>
              </Link>
              <Link to="/">
                <li className="py-6 text-2xl tracking-widest">About</li>
              </Link>
            </ul>
            <div className="pt-12">
              <p className="tracking-widest text-2xl uppercase text-white">
                let's connect
              </p>
              <div className="flex items-center justify-between my-6 w-full sm-[80%]">
                <div className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
