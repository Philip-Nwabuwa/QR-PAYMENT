import { useContext } from "react";
import { InputContext } from "../pages/home";
import InputColor from "./inputColor";
import InputField from "./inputField";

const inputForm = () => {
  const { getQrCode, inputValue } = useContext(InputContext);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    getQrCode();
  };
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button
        disabled={!inputValue.url}
        onClick={handleSubmit}
        className="bg-blue-400 m-w-xs ml-auto px-4 py-2 text-white rounded-md mt-4 hover:bg-blue-500 disabled:bg-gray-300"
      >
        Generate QR Code
      </button>
    </div>
  );
};

export default inputForm;
