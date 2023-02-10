import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { BiArrowBack } from "react-icons/bi";

const about = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex flex-col justify-center items-center h-screen bg-slate-800 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold py-12 underline">About</h1>
            <p className="text-xl font-bold py-2">QR Code Generator</p>
            <p className="text-xl font-bold py-2">Version 1.0.1</p>
            <p className="text-xl font-bold py-2">
              Made with ❤️ by Philip Nwabuwa
            </p>
            <p className="text-xl font-bold py-2">
              Made possible by{" "}
              <a
                className="underline"
                href="https://www.qrcode-tiger.com/api-documentation"
              >
                QR-Code-Tiger
              </a>
            </p>
            <button
              className=" text-xl font-bold py-2 mt-6 uppercase text-black bg-white rounded-md px-8 hover:bg-gray-200 hover:underline"
              onClick={() => {
                navigate(-1);
              }}
            >
              <div className="flex items-center">
                <BiArrowBack className="mr-2" /> go back
              </div>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default about;
