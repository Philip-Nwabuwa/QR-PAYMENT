import { useContext } from "react";
import { InputContext } from "./home";
import { saveAs } from "file-saver";

const qrCode = () => {
  const { res, loading, error } = useContext(InputContext);
  const downloadQRImage = () => {
    saveAs(res, "Qrcode.png");
  };

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center">
        <div className="h-32 w-full bg-gray-300"></div>
        <div className="h-8 w-full bg-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-gray-500 flex items-center">
        Sorry, something went wrong
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-300 rounded-r-md flex flex-col"></div>
      {res ? (
        <div className="w-full flex flex-col justify-center items-center mx-auto">
          <img className="w-60" src={res} alt="qr code" />
          <button
            onClick={downloadQRImage}
            className="bg-blue-400 text-white my-4 px-6 py-2 rounded-md"
          >
            Download
          </button>
        </div>
      ) : (
        <div className="text-gray-500 flex flex-col justify-center items-center font-bold py-8">
          Your QR code will appear here...
        </div>
      )}
    </div>
  );
};

export default qrCode;
