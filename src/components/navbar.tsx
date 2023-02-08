const Navbar = () => {
  return (
    <div className="bg-black text-white w-full h-20 flex items-center justify-center uppercase">
      <div className="flex w-[95%] justify-between items-center">
        <div className="">Logo</div>
        <ul className="flex items-center md:hidden">
          <li className="pr-2">about</li>
          <li>contact</li>
        </ul>
        <button className=" md:hidden uppercase bg-slate-100 text-black p-2 rounded-md font-bold">
          sign in
        </button>
        <div className="md:flex hidden">close</div>
      </div>
    </div>
  );
};

export default Navbar;
