import React, { useState, useEffect } from "react";
import axios from "axios";

const EditList = ({ isOpen, onClose, listData, onUpdate }) => {
  const [formData, setFormData] = useState({
    nama_list: "",
    keterangan: "",
    sublist: "",
  });

  useEffect(() => {
    if (listData) {
      setFormData({
        nama_list: listData.nama_list,
        keterangan: listData.keterangan,
        sublist: listData.sublist,
      });
    }
  }, [listData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/list/${listData.id_list}`, formData);
      onUpdate(); // refresh list data di parent
      onClose();
    } catch (error) {
      console.error("Gagal update list:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit List</h2>

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Nama List</label>
          <input
            name="nama_list"
            value={formData.nama_list}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mb-3 text-gray-700"
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">Keterangan</label>
          <select name="keterangan" value={formData.keterangan} onChange={handleChange}
          className="w-full p-2 border rounded-lg mb-3 text-gray-700 bg-white">
            <option value="">-- Pilih Keterangan --</option>
            <option value="Sudah">Sudah</option>
            <option value="Belum">Belum</option>
          </select>
          <label className="block mb-2 text-sm font-medium text-gray-700">Sublist</label>
          <select name="sublist" value={formData.sublist} onChange={handleChange}
          className="w-full p-2 border rounded-lg mb-3 text-gray-700 bg-white">
            <option value="">-- Pilih Keterangan --</option>
            <option value="Dokumen">Dokumen</option>
            <option value="Mahar & Seserahan">Mahar & Seserahan</option>
            <option value="Persiapan Acara">Persiapan Acara</option>
            <option value="Konsumsi">Konsumsi</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditList;
