import React, { useState } from "react";

function Popup({ visibleAdd }) {
  const [url, setUrl] = useState("");

  const addBlockUrl = async (e) => {
    e.preventDefault(); // prevent default form submission

    try {
      const res = await fetch("http://localhost:5000/api/urls/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (data.success) {
        console.log(data.message);
        setUrl("");
      } else {
        console.log("Error:", data.message);
      }
    } catch (error) {
      console.error("Error adding URL:", error);
    }
  };

  return (
    <>
      {visibleAdd && (
        <div className="fixed inset-0 bg-[#000000b9] flex justify-center items-center z-200">
          <div className="w-80 bg-white border border-gray-200 shadow-md rounded-lg p-6">
            <form onSubmit={addBlockUrl} className="flex flex-col gap-4">
              <label htmlFor="url" className="text-gray-700 font-medium">
                Enter website to block
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="e.g. youtube.com"
                required
                className="border border-gray-300 px-3 py-2 rounded"
              />
              <button
                type="submit"
                className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Add URL
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
