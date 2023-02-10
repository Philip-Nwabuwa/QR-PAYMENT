import X from "../assets/x.svg";
const Navbar = () => {
  return (
    <div className="bg-black text-white w-full h-20 flex items-center justify-center uppercase">
      <div className="flex w-[95%] justify-between items-center">
        <div className="text-2xl">QR Generator</div>
        <ul className="md:flex items-center hidden">
          <li className="pr-2">about</li>
          <li className="pr-2">Docs</li>
          <li>contact</li>
        </ul>
        <button className="md:flex hidden">
          <a
            href="/home"
            className="bg-white text-black px-6 py-3 font-bold rounded-md hover:bg-gray-200 hover:underline"
          >
            Get Started
          </a>
        </button>

        <button className="">
          <img
            className="fill-current text-white w-10 h-10"
            src={X}
            alt="Close Navbar"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
