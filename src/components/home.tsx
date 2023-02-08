import axios from "axios";
import { createContext, useState } from "react";
import InputForm from "./inputForm";
import QrCode from "./qrCode";

// context
export const InputContext = createContext<any>(null);

const home = () => {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });
  const [res, setRes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const config = {
    headers: { authorization: "Bearer 13874690-a2bb-11ed-b71c-b38a789da76b" },
  };

  const bodyParametrs = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParametrs,
        config
      );
      setRes(res.data.url);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const value = { inputValue, setInputValue, getQrCode, res, loading, error };

  return (
    <div className="bg-gray-400 h-screen pt-3 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default home;
