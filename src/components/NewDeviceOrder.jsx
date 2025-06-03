import React, { useState } from 'react'
const products=[
  {
    "title": "YahviPay SoundBox 4G",
    "Price": "125",
    "id": "P001",
    "img": "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/soundbox01.png",
    "description": [
      "Monthly charges of Rs.125 applicable",
      "In the Box - 1 Soundbox with SIM, User Manual, Power Adapter and Cable",
      "Get instant audio confirmation for every successful payment",
      "Supports all UPI supported applications",
      "Delivered in pre-activated state",
      "Soundbox is delivered pre-linked to your merchant account. To place a valid order, please ensure you are logged in with the Mobile number registered against your YahviPay business account."
    ],
    "enabled": "yes",
    "category": "device",
    "version": "v1",
    "languages": ["english"],
    "sim": ["airtel", "vodafone"],
    "status": "available",
    "fullPrice": "180",
    "delivery": "50",
    "keywords": ["Soundbox", "4G"]
  },
  {
    "title": "YahviPay SoundBox 4G",
    "Price": "150",
    "id": "P004",
    "img": "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/soundbox02.png",
    "description": [
      "Monthly charges of Rs.150 applicable",
      "In the Box - 1 Soundbox with SIM, User Manual, Power Adapter and Cable",
      "Get instant audio confirmation for every successful payment",
      "Supports all UPI supported applications",
      "Delivered in pre-activated state",
      "Soundbox is delivered pre-linked to your merchant account. To place a valid order, please ensure you are logged in with the Mobile number registered against your YahviPay business account."
    ],
    "enabled": "yes",
    "category": "device",
    "version": "v2",
    "languages": ["english", "hindi", "tamil", "telugu", "malayalam", "kannada"],
    "sim": ["airtel", "vodafone"],
    "status": "available",
    "fullPrice": "200",
    "delivery": "50",
    "keywords": ["Soundbox", "4G"]
  }
]





export const NewDeviceOrder = ({ category }) => {
  let filteredProducts;

    if (category !== "All") {
        filteredProducts = products.filter((ele) => ele.category === category);
    } else {
        filteredProducts = products;
    }

    return filteredProducts.map((ele, ind) => (
        <div
            key={ind}
            className="m-5 p-5 rounded-3xl shadow-lg transition duration-300 ease-in-out bg-white"
        >
            <div className="flex flex-wrap gap-5 justify-center">
                {/* Left Image and Status */}
                <div className="flex flex-col items-center gap-3 w-1/5 min-w-[200px]">
                    <div
                        className={`flex items-center justify-center border w-full h-60 rounded-xl overflow-hidden ${ele.status === "outofstock" ? "opacity-30" : "opacity-100"
                            }`}
                    >
                        <img
                            src={ele.img}
                            alt=""
                            className={`object-fill ${ele.title === "All In One QR Stickers (Set Of 3)"
                                ? "w-48 h-56"
                                : "w-60 h-56"
                                }`}
                        />
                    </div>
                    <div className="text-center font-semibold text-lg">
                        {ele.status === "outofstock" ? (
                            <span className="text-red-600">Out of Stock</span>
                        ) : (
                            <span className="text-green-600">Available</span>
                        )}
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-primary h-9 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-3"
                        disabled={ele.status === "outofstock"}
                        onClick={() => revieworder(ele, ind)}
                    >
                        Order Now
                    </button>
                </div>

                {/* Right Details */}
                <div className="flex-1 p-2 space-y-3">
                    <p className="text-xl font-bold">{ele.title}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-gray-600 font-medium">Price:</label>
                            <span className="font-semibold">₹{ele.Price}</span>
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Delivery:</label>
                            <span className="font-semibold">₹{ele.delivery}</span>
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Order ID:</label>
                            <span className="font-semibold">{ele.id}</span>
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Version:</label>
                            <span className="font-semibold">{ele.version || "nill"}</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Description:</label>
                        <ul className="list-disc pl-5 space-y-1 text-sm mt-1">
                            {ele.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Device specific options */}
                    {ele.category === "device" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Languages:</label>
                                <select
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={ele.languages[ind] || ""}
                                    onChange={(e) => handleLanguageChange(ind, e.target.value)}
                                >
                                    <option value="">Select Language</option>
                                    { ele.languages ? ele.languages.map((lang, i) => (
                                        <option key={i} value={lang}>
                                            {lang}
                                        </option>
                                    )) : ''}
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Sim:</label>
                                <select
                                    className="border border-gray-300 rounded-md p-2 w-full"
                                    value={ele.sim[ind] || ""}
                                    onChange={(e) => handlesimChange(ind, e.target.value)}
                                >
                                    <option value="">Select Sim</option>
                                    {ele.sim.map((simItem, i) => (
                                        <option key={i} value={simItem}>
                                            {simItem}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ));
};

