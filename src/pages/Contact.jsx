import Footer from "../components/footer";
import Feedback from "../components/Feedback";
import Comment from "../components/Comment";
import facebook from "../assets/images/contact/facebook.jpg";
import twitter from "../assets/images/contact/twitter.jpg";
import instagram from "../assets/images/contact/instagram.jpg";
import youtube from "../assets/images/contact/youtube.jpg";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-cusKontak dark:text-white w-full min-h-screen font-sans flex flex-col">
      
      {/* Container untuk Hubungi Kami */}
      <div className="flex flex-col flex-1 p-8">
        <div className="flex justify-center mb-8">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl font-bold">Hubungi Kami</h1>
            <p className="text-base mt-4">
              Memiliki pertanyaan lebih lanjut seputar PaDI UMKM?<br/>
              Silahkan menghubungi Kami secara langsung.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-8">
          <div className="border border-gray-500 rounded-lg p-6 text-left w-96 mb-8">
            <h2 className="text-2xl font-bold mb-4">Layanan Informasi Pengguna</h2>
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-sm mb-4">
              cs@padiumkm.id
            </p>
            <h3 className="text-lg font-bold">Whatsapp</h3>
            <p className="text-sm mb-4">
              +62 812 9000 7820
            </p>
            <h3 className="text-lg font-bold">Senin-Jumat | 08.00 - 17.00 WIB</h3>
          </div>
          
          <div className="border border-gray-500 rounded-lg p-6 text-left w-96 mb-8">
            <h2 className="text-2xl font-bold mb-4">Kantor Kami</h2>
            <h3 className="text-base font-semibold">PaDI UMKM Headquarters<br />Gedung Telkom Direktorat Business and Technology</h3>
            <p className="text-sm mb-4">
              Jln. Prof. Dr. Soepomo No. 139. Jakarta Selatan, DKI Jakarta, 12810 Indonesia
            </p>
            <h2 className="text-2xl font-bold mb-4 mt-2">Ikuti Media Sosial Kami</h2>
            <div className="flex items-center space-x-3">
              <img src={facebook} alt="Facebook" className="h-8 w-8"/>
              <img src={twitter} alt="Twitter" className="h-8 w-8"/>
              <img src={instagram} alt="Instagram" className="h-8 w-8"/>
              <img src={youtube} alt="Youtube" className="h-8 w-8"/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="container mx-auto">
          <Feedback />
          <Comment name="Ogiana Ulandari" message="Harga produknya supaya bisa lebih murah dari tempat lain" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
