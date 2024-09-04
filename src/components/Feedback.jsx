const Feedback = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">
                Kritik dan Saran
            </h2>
            <p className="text-base">
                Silahkan Masukkan Kritik dan Saran Anda
            </p>
            <form className="space-y-4">
                <input type="text" placeholder="Nama" className="w-full p-2 border-gray-300 rounded-md" />
                <textarea placeholder="Saran Anda..." className="w-full p-2 border-gray-300 rounded-md" rows="4"></textarea>
                <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md">Kirim Saran</button>
            </form>
        </div>
    );
};
export default Feedback;