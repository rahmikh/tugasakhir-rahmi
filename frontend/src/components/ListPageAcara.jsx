import { useEffect, useState } from "react";
import axios from "axios";
import TableDokumen from "./TableDokumen";
import TambahList from "./TambahList";
import SideBar from "./SideBar";

const ListPageAcara = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Pindahkan fetchData ke fungsi yang bisa dipanggil ulang
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/list/acara");
      setLists(res.data.data);
      setError("");
    } catch (err) {
      setError("Gagal memuat data list 😢");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddList = (newItem) => {
    setLists((prev) => [...prev, newItem]);
  };

  return (
    <div className="w-full h-screen p-5 grid grid-cols-5  gap-6">
      <SideBar/>
    <div className="col-start-2 col-end-6 bg-white shadow-md rounded-4xl p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">📋 Daftar List</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-300 shadow-md text-white px-4 py-2 rounded transition delay-100 duration-200 ease-in-out hover:bg-rose-400 hover:-translate-y-0.5 hover:scale-105 mb-5"
      >
        + Tambah List
      </button>

      {loading && <p className="text-gray-500">Memuat data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && lists.length > 0 ? (
        // ✅ Kirim fungsi fetchData sebagai onRefresh
        <TableDokumen lists={lists} onRefresh={fetchData} />
      ) : (
        !loading && <p className="text-gray-500">Belum ada data list.</p>
      )}

      <TambahList
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddList}
      />
    </div>
    </div>
  );
};

export default ListPageAcara;
