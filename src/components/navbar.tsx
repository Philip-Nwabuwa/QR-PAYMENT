import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="bg-slate-900 text-white w-full h-[70px] flex items-center justify-center uppercase">
      <div className="flex w-[90%] justify-between items-center">
        <div className="text-3xl font-bold  hover:underline">
          <a href="/">QR Generator</a>{" "}
        </div>
        <ul className="md:flex items-center hidden text-xl font-bold">
          <li className="pr-6 hover:text-slate-400 hover:underline">about</li>
          <a
            className="hover:text-slate-400 hover:underline"
            href="https://www.qrcode-tiger.com/api-documentation"
          >
            Docs
          </a>
        </ul>
        <button className="md:flex hidden">
          <a
            href="/home"
            className="bg-white text-black px-6 py-3 font-bold rounded-md hover:bg-gray-200 hover:underline"
          >
            Get Started
          </a>
        </button>

        <button className="flex md:hidden">
          <AiOutlineMenu className="text-3xl " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
