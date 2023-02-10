import QRLogo from "../assets/qr-logo.jpeg";
const Navbar = () => {
  return (
    <div className="bg-black text-white w-full h-20 flex items-center justify-center uppercase">
      <div className="flex w-[95%] justify-between items-center">
        <div className="">QR Generator</div>
        <ul className="flex items-center md:hidden">
          <li className="pr-2">about</li>
          <li className="pr-2">Docs</li>
          <li>contact</li>
        </ul>
        <button>
          <a href="/home" className="bg-white text-black">
            Get Started
          </a>
        </button>

        <div className="md:flex hidden">close</div>
      </div>
    </div>
  );
};

export default Navbar;
