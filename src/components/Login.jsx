import { useNavigate } from 'react-router-dom';
import loginn from '../assets/images/loginn.svg';

const Login = () => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate('/home');
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex w-3/4 max-w-4xl">
        {/* Left Side */}
        <div className="w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 p-10">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <img
                src={loginn}
                alt="Laptop with Boxes"
                className="mx-auto mb-4"
              />
              <h2 className="text-white text-2xl font-bold">
                Pasti Untung di PaDi UMKM!
              </h2>
              <p className="text-white mt-2">
                Berbagai promo dan penawaran menarik setiap bulannya!
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Alamat Email</label>
              <input
                type="email"
                placeholder="admin@smail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p className="text-red-500 text-sm mt-1">Email wajib diisi</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Kata Sandi</label>
              <input
                type="password"
                placeholder="admin123"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <p className="text-red-500 text-sm mt-1">Kata sandi wajib diisi</p>
            </div>
            <button onClick={ handleNavigate } className="w-full bg-teal-600 text-white font-bold py-2 rounded-lg disabled:opacity-50">
          Login
        </button>
            <p className="text-sm text-right mt-4">
              <a href="#" className="text-blue-600">Lupa Kata Sandi? Tekan Disini</a>
            </p>
          </form>

          <div className="mt-8 text-center">
            <p>Atau</p>
            <p className="text-sm">
              Belum punya akun? <a href="#" className="text-blue-600">Daftar Sekarang</a>
            </p>
          </div>
        </div>
      </div>

      {/* Customer Care Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-white shadow-lg p-3 rounded-full flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c0-2.209-.895-4-2-4s-2 1.791-2 4m4 0c0-2.209-.895-4-2-4m2 0c0 1.104-.672 2-1.5 2S10 12.104 10 13m6 1v-1c0-2.209-1.119-4-2.5-4s-2.5 1.791-2.5 4m5 0v1M10 13c0 2.209-1.119 4-2.5 4S5 15.209 5 13M19 13c0 2.209-1.119 4-2.5 4S14 15.209 14 13M17 10.5V6a2 2 0 00-2-2h-6a2 2 0 00-2 2v4.5M17 14.5V18a2 2 0 01-2 2H9a2 2 0 01-2-2v-3.5"
            />
          </svg>
          <span className="ml-2 text-blue-500">Customer Care</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
