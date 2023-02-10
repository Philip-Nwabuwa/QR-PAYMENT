import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QR from "../assets/qr.png";

const landing = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full pt-24 bg-slate-800">
        <div className="flex flex-col w-[80%] justify-center items-center mx-auto">
          <h1 className="text-4xl font-bold text-white">
            Create Your Free QR Codes
          </h1>
          <p className="mt-3 text-xl text-white">
            Create your free QR codes in seconds. No registration required. No
            ads. No tracking. No nonsense. Use QR codes to drive traffic and
            increase sales when customers scan your printed or digital code.
          </p>
          <img className="mt-6 rounded-xl" src={QR} alt="Qr Image" />
          <button className="mt-12">
            <a
              href="/generator"
              className="bg-white text-black px-16 py-4 font-bold rounded-xl hover:bg-gray-200 hover:underline"
            >
              Get Started
            </a>
          </button>
        </div>
        <section>
          <div className="flex flex-col w-[80%] justify-center items-center mx-auto">
            <h2 className="text-4xl font-bold text-white mt-20">
              What is a QR Code?
            </h2>
            <p className="mt-3 text-xl text-white">
              A QR (Quick Response) code is a type of barcode. It holds
              information that can be read by a QR code scanner, usually a
              smartphone camera or app, and can be shared online or printed.
              Scanning a QR code triggers a specific action such as bringing a
              visitor to a particular product page, to your social media
              account, to connect to WiFi, and so much more. QR codes can also
              be used to track inventory, product IDs, and documents.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default landing;
