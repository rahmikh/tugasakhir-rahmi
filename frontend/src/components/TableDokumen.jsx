import { useState } from "react";
import EditList from "./EditList";
import axios from "axios";

const TableDokumen = ({ lists, onRefresh }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState(null);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false); // modal edit sukses

  const handleEditClick = (item) => {
    setSelectedList(item);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`http://localhost:5000/list/${id}`);
        onRefresh();

        // modal sukses hapus
        setIsDeleteSuccess(true);
        setTimeout(() => setIsDeleteSuccess(false), 2000);
      } catch (error) {
        console.error("Gagal hapus data:", error);
      }
    }
  };

  // callback saat edit berhasil
  const handleEditSuccess = () => {
    setIsEditSuccess(true);
    setTimeout(() => setIsEditSuccess(false), 2000);
    onRefresh(); // refresh tabel
  };

  return (
    <>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-3 px-4 text-gray-600 font-semibold">Nama List</th>
            <th className="py-3 px-4 text-gray-600 font-semibold">Keterangan</th>
            <th className="py-3 px-4 text-gray-600 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((item) => (
            <tr
              key={item.id_list}
              className="border-b hover:bg-gray-50 transition text-gray-600"
            >
              <td className="py-2 px-4">{item.nama_list}</td>
              <td className="py-2 px-4">{item.keterangan}</td>
              <td className="py-2 flex gap-2 px-4">
                <button
                  onClick={() => handleEditClick(item)}
                  className="px-3 py-1 bg-blue-300 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(item.id_list)}
                  className="px-3 py-1 bg-red-400 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Edit */}
      <EditList
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        listData={selectedList}
        onUpdate={handleEditSuccess} // callback untuk modal sukses
      />

      {/* Modal Sukses Hapus */}
      {isDeleteSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in">
            <h3 className="text-lg font-semibold">✅ Data berhasil dihapus!</h3>
          </div>
        </div>
      )}

      {/* Modal Sukses Edit */}
      {isEditSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in">
            <h3 className="text-lg font-semibold">✅ Data berhasil diubah!</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default TableDokumen;
