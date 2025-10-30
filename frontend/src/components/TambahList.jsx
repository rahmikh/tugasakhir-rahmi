import { useState } from "react";

const TambahList = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    nama_list: "",
    keterangan: "",
    sublist: "",
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  if (!isOpen) return null; // jika modal utama tidak terbuka, tidak render apapun

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const API_URL = import.meta.env.VITE_API_URL;
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/list/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // kirim ke parent agar langsung tampil di tabel
      onAdd(data.data);

      // reset form
      setFormData({ nama_list: "", keterangan: "", sublist: "" });

      // tampilkan modal sukses
      setIsSuccessModalOpen(true);

      // sembunyikan modal sukses otomatis setelah 2 detik, lalu tutup modal utama
      setTimeout(() => {
        setIsSuccessModalOpen(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Gagal menambah data:", err);
    }
  };

  return (
    <>
      {/* Modal Utama Tambah Data */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Tambah List
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Nama List
              </label>
              <input
                type="text"
                name="nama_list"
                value={formData.nama_list}
                onChange={handleChange}
                className="border border-gray-400 p-2 w-full rounded text-gray-700"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Keterangan
              </label>
              <select
                name="keterangan"
                value={formData.keterangan}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-3 text-gray-700 bg-white"
              >
                <option value="">-- Pilih Keterangan --</option>
                <option value="Sudah">Sudah</option>
                <option value="Belum">Belum</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Sublist
              </label>
              <select
                name="sublist"
                value={formData.sublist}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg mb-3 text-gray-700 bg-white"
              >
                <option value="">-- Pilih Sublist --</option>
                <option value="Dokumen">Dokumen</option>
                <option value="Mahar & Seserahan">Mahar & Seserahan</option>
                <option value="Persiapan Acara">Persiapan Acara</option>
                <option value="Konsumsi">Konsumsi</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-400 border rounded hover:bg-gray-500 text-white"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Sukses */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-center animate-fade-in">
            <h3 className="text-lg font-semibold">✅ Data berhasil ditambahkan!</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default TambahList;
