import { InputContext } from "./home";
import { useContext } from "react";

const inputField = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleChange = (e: any) => {
    setInputValue({ ...inputValue, url: e.target.value });
  };
  return (
    <div>
      <label className="font-semibold">Your URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 text-gray-7oo rounded-md"
        placeholder="https://www.example.com"
        value={inputValue.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default inputField;
