import vision from '../assets/images/vision.png';
import Footer from './footer';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-full min-h-screen flex flex-col font-sans">
      <div className="flex flex-row justify-center flex-1">
        <div className="flex-1 py-10 pr-25 pl-5 mr-10 max-w-lg">
        <h1 className="font-bold text-4xl mb-4">
            Visi Kami 
          </h1>
          <p className="text-xl mb-8" style={{ textAlign: 'justify' }}>
            Menjadi ekosistem digital unggulan UMKM di seluruh Indonesia.
          </p>
          <h1 className="font-bold text-4xl mb-4">
            Misi Kami 
          </h1>
          <ul className="list-disc list-inside text-xl text-left mx-auto max-w-xl" style={{ textAlign: 'justify' }}>
            <li>Menyediakan platform B2B Marketplace dengan fitur layanan global untuk UMKM di Indonesia.</li>
            <li>Menjadi pusat informasi pengadaan (eProcurement) BUMN dan Luar BUMN yang dapat dipantau Kementrian BUMN secara real time dan transparan.</li>
            <li>Menyajikan informasi mengenai indikator utama dari aktivitas transaksi yang lengkap melalui Control Tower Dashboard.</li>
            <li>Membangun sistem perdagangan elektronik yang stabil untuk memastikan kelangsungan program dan menjaga kedaulatan data transaksi PaDI UMKM.</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={ vision } alt="Benefit" className="w-3/4 h-3/4 object-contain" />
        </div>
      </div><Footer />
    </div>
  );
};

export default About;
