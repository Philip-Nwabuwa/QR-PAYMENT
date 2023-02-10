import axios from "axios";
import { createContext, useState } from "react";
import InputForm from "../components/inputForm";
import Navbar from "../components/navbar";
import QrCode from "../components/qrCode";

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
    <section>
      <Navbar />
      <InputContext.Provider value={value}>
        <InputForm />
        <QrCode />
      </InputContext.Provider>
    </section>
  );
};

export default home;
