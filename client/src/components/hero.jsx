import React, { useState, useEffect } from "react";
import { Trash2, Plus, Upload, Download } from "lucide-react";
import Popup from "../components/popup";

const BlockList = () => {
  const [blockedSites, setBlockedSites] = useState([]);
  const [visibleAdd, setVisiibleAdd] = useState(false);
  const limit = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/urls/");
        const data = await res.json();
        setBlockedSites(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch("http://localhost:5000/api/urls/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        setBlockedSites((prev) => prev.filter((s) => s._id !== id));
      }
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };

  const handleAddUrl = () => {
    setVisiibleAdd(!visibleAdd);
  };

  return (
    <>
      <Popup visibleAdd={visibleAdd} />
      <div className=" max-w-4xl mx-auto font-sans bg-white p-20 shadow-md rounded-lg  border border-gray-200">
        <div className="text-3xl font-bold mb-2">Block List</div>
        <p className="text-gray-500 mb-6">Block sites permanently</p>

        <button
          onClick={handleAddUrl}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 mb-4"
        >
          <Plus size={18} /> Add to Block List
        </button>

        <div className="space-y-3">
          {blockedSites.map((site, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 flex items-center justify-between rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://store-images.s-microsoft.com/image/apps.60371.4ade795d-2715-4b6f-b475-fba78b835f17.6dfa612f-d2d3-45fb-b3a4-34e1aa4fa810.47252780-ebdc-4cc4-8df3-89310788727e"
                  alt="icon"
                  className="w-8 h-8"
                />
                <div>
                  <div className="font-medium">{site.url}</div>
                  <div className="text-sm text-gray-500">Website</div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(site._id)}
                className="text-gray-600 hover:text-red-500"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded">
            <Upload size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded">
            <Download size={16} /> Import
          </button>
        </div>

        <div className="mt-6 bg-blue-100 p-4 rounded flex justify-between items-center text-sm">
          <span>
            {limit - blockedSites.length} sites left to add to your block list.
            <span className="ml-1 text-blue-600 underline cursor-pointer">
              Click here to upgrade and enjoy an unlimited block list.
            </span>
          </span>
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded text-sm font-semibold">
            Go Unlimited
          </button>
        </div>
      </div>
    </>
  );
};

export default BlockList;
