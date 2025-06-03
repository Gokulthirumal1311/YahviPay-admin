import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import SingleSearchBar from '../../components/SingleSearchBar';


const pageContent = {
    "title": "Create Orders",

    "subTitle": "View and manage settlements organized by specific phone numbers.",
    "searchInputPlaceholderName": 'Enter the Phone Number'
}

const products = [
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
export const CreateOrders = ({ category = "All" }) => {
    const [selections, setSelections] = useState({});

    const filteredProducts = category !== "All" ? products.filter((ele) => ele.category === category) : products;

    const handleLanguageChange = (id, value) => {
        setSelections((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                language: value
            }
        }));
    };

    const handleSimChange = (id, value) => {
        setSelections((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                sim: value
            }
        }));
    };

    const revieworder = (ele) => {
        console.log("Order review", ele, selections[ele.id]);
    };

    return (
        <Layout>

            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div className='flex items-end justify-between'>

                <div className='flex flex-col'>
                                    <label className="text-base font-medium mb-1">Search by Options </label>
                                    <select className="border border-gray-400 rounded px-2 py-1">
                                        <option>Devices</option>
                                        <option>Stickers</option>
                                    </select>
                                </div>
                                <div>
                                    <SingleSearchBar placeholderName = {pageContent.searchInputPlaceholderName} />
                                </div>
            </div>
            <div className="overflow-y-auto">
                {filteredProducts.map((ele) => (
                    <div
                        key={ele.id}
                        className="my-5 border border-gray-200 rounded-2xl overflow-hidden w-full hover:shadow-lg transition duration-300"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Product Image */}
                            <div className="md:w-1/3 flex flex-col items-center justify-center p-4">
                                <img
                                    src={ele.img}
                                    alt={ele.title}
                                    className="object-cover w-48 h-48 rounded-xl"
                                />
                                <span
                                    className={`mt-4 font-semibold text-sm ${ele.status === "available"
                                        ? "text-green-600"
                                        : "text-red-500"
                                        }`}
                                >
                                    {ele.status === "available" ? "Available" : "Out of Stock"}
                                </span>
                                <button
                                    onClick={() => revieworder(ele)}
                                    disabled={ele.status !== "available"}
                                    className={`mt-3 px-4 py-2 rounded-lg text-sm font-medium border transition duration-300 ${ele.status === "available"
                                        ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                                        : "border-gray-300 text-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    Order Now
                                </button>
                            </div>

                            {/* Product Details */}
                            <div className="md:w-2/3 p-5 flex flex-col justify-between space-y-4">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">{ele.title}</h2>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500">Price:</span>{" "}
                                            <span className="font-medium">₹{ele.Price}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Delivery:</span>{" "}
                                            <span className="font-medium">₹{ele.delivery}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Order ID:</span>{" "}
                                            <span className="font-medium">{ele.id}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Version:</span>{" "}
                                            <span className="font-medium">{ele.version}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 font-medium">Description:</p>
                                    <ul className="list-disc ml-5 mt-1 text-gray-600 text-sm space-y-1">
                                        {ele.description.map((desc, idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Selection Options */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Language
                                        </label>
                                        <select
                                            value={selections[ele.id]?.language || ""}
                                            onChange={(e) =>
                                                handleLanguageChange(ele.id, e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select Language</option>
                                            {ele.languages.map((lang, i) => (
                                                <option key={i} value={lang}>
                                                    {lang}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            SIM
                                        </label>
                                        <select
                                            value={selections[ele.id]?.sim || ""}
                                            onChange={(e) => handleSimChange(ele.id, e.target.value)}
                                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select SIM</option>
                                            {ele.sim.map((simItem, i) => (
                                                <option key={i} value={simItem}>
                                                    {simItem}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

