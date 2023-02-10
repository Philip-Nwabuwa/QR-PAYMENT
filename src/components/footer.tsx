import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const footer = () => {
  return (
    <footer className="bg-black text-white h-20 w-full">
      <div className="w-[80%] flex flex-row justify-center items-center mx-auto">
        <AiOutlineTwitter className="text-2xl" />
        <AiOutlineGithub className="text-2xl" />
        <AiFillLinkedin className="text-2xl" />
      </div>
    </footer>
  );
};

export default footer;
