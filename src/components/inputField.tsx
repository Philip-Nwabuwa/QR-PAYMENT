import { InputContext } from "../pages/home";
import { useContext } from "react";

const inputField = () => {
  const { inputValue, getQrCode, setInputValue } = useContext(InputContext);
  const handleChange = (e: any) => {
    setInputValue({ ...inputValue, url: e.target.value });
  };
  return (
    <div>
      <div className="my-3 w-full">
        <label className="font-bold text-3xl text-white flex justify-center items-center mx-auto">
          Your URL
        </label>
      </div>

      <input
        type="url"
        className="w-full border-2 px-3 py-3 text-white bg-slate-600 rounded-md"
        placeholder="https://www.example.com"
        value={inputValue.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default inputField;
