import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QR from "../assets/qr.png";

const landing = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen pt-5 bg-slate-900">
        <div className="flex flex-col w-[95%] justify-center items-center mx-auto">
          <h1 className="text-3xl font-bold text-white">
            Create Your Free QR Codes
          </h1>
          <p className="mt-3 text-xl text-white">
            Create your free QR codes in seconds. No registration required. No
            ads. No tracking. No nonsense.
          </p>
          <img className="mt-6 rounded-xl" src={QR} alt="Qr Image" />
          <button className="mt-6">
            <a
              href="/home"
              className="bg-white text-black px-6 py-3 font-bold rounded-md hover:bg-gray-200 hover:underline"
            >
              Get Started
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default landing;
