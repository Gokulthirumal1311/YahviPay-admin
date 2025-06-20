import React, { useState } from 'react'
import { Layout } from './Layout/Layout'
import CustomDropdown from '../../components/CustomDropDown/CustomDropDown';
import { NoDataFound } from '../../components/NoDataFound/NoDataFound';

const pageContent = {
    "title": "Get Orders By Status",
    "subTitle": "View soundbox device orders by selecting a specific order status such as Processing, Pick From Shop, Delivered, or Returned.",
    "noDataFoundTitle": "No Order's Found",
    "noDataFoundDescription": "No orders found for the selected status. Please try a different status or check back later."
}

const orders = [
    // {
    //     orderId: "DEVICE174833867625314350",
    //     deviceName: "All In One QR Stickers (Set Of 3)",
    //     img: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/stand01.png",
    //     businessPhone: "7010562663",
    //     language: "NIL",
    //     simType: "NIL",
    //     address: {
    //         name: "Sgwgh",
    //         address: "hah,Bzsb,Jhsn,Chennai",
    //         phone: "6663666666",
    //         pincode: "614616",
    //         landmark: "Ghvggg",
    //     },
    //     productPrice: 69,
    //     orderDate: "2025-05-27T15:07:56.257Z",
    //     status: "processing",
    //     deviceId: "",
    //     orderType: "DEVICE",
    //     orderedBy: "7010562663",
    //     courier: {
    //         courierId: "",
    //         courierName: "",
    //         shipDate: "",
    //         courierStatus: "NONE",
    //         trackingUrl: "nill",
    //         packedBy: "",
    //     },
    //     comments: "",
    //     merchantId: "MC1748335960510",
    // },
    // {
    //     orderId: "DEVICE174833867625314350",
    //     deviceName: "All In One QR Stickers (Set Of 3)",
    //     img: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/stand01.png",
    //     businessPhone: "7010562663",
    //     language: "NIL",
    //     simType: "NIL",
    //     address: {
    //         name: "Sgwgh",
    //         address: "hah,Bzsb,Jhsn,Chennai",
    //         phone: "6663666666",
    //         pincode: "614616",
    //         landmark: "Ghvggg",
    //     },
    //     productPrice: 69,
    //     orderDate: "2025-05-27T15:07:56.257Z",
    //     status: "processing",
    //     deviceId: "",
    //     orderType: "DEVICE",
    //     orderedBy: "7010562663",
    //     courier: {
    //         courierId: "",
    //         courierName: "",
    //         shipDate: "",
    //         courierStatus: "NONE",
    //         trackingUrl: "nill",
    //         packedBy: "",
    //     },
    //     comments: "",
    //     merchantId: "MC1748335960510",
    // },
    // {
    //     orderId: "DEVICE174833867625314350",
    //     deviceName: "All In One QR Stickers (Set Of 3)",
    //     img: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/stand01.png",
    //     businessPhone: "7010562663",
    //     language: "NIL",
    //     simType: "NIL",
    //     address: {
    //         name: "Sgwgh",
    //         address: "hah,Bzsb,Jhsn,Chennai",
    //         phone: "6663666666",
    //         pincode: "614616",
    //         landmark: "Ghvggg",
    //     },
    //     productPrice: 69,
    //     orderDate: "2025-05-27T15:07:56.257Z",
    //     status: "processing",
    //     deviceId: "",
    //     orderType: "DEVICE",
    //     orderedBy: "7010562663",
    //     courier: {
    //         courierId: "",
    //         courierName: "",
    //         shipDate: "",
    //         courierStatus: "NONE",
    //         trackingUrl: "nill",
    //         packedBy: "",
    //     },
    //     comments: "",
    //     merchantId: "MC1748335960510",
    // },
]

const Label = ({ text }) => (
    <span className="text-blue-800 font-semibold capitalize">{text} :</span>
);

const getOrderByStatusList = [
    { label: "Processing", value: "processing" },
    { label: "Pick From Shop", value: "pickfromshop" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Pick From Company", value: "pickfromcompany" },
    { label: "Returned", value: "returned" }
]

export const GetOrderByStatus = () => {

    const [selectedOrderStatus, setSelectedOrderStatus] = useState('');

    return (
        <Layout>
            <div>
                <h2 className='text-xl font-semibold text-gray-800 mb-0.5'>{pageContent.title}</h2>
                <h4 className='text-md font-semibold text-gray-500 mb-5'>{pageContent.subTitle}</h4>
            </div>
            <div>
                <CustomDropdown
                    options={getOrderByStatusList}
                    selected={selectedOrderStatus}
                    setSelected={setSelectedOrderStatus}
                    placeholder='Select Status'
                />
            </div>
            <div className={orders.length ? "overflow-y-auto custom-scroll" : "h-full"}>
                {orders.length ? orders.map((order, index) => (
                    <div
                        key={order.orderId + index}
                        className="bg-white py-6 mt-2 mb-6 rounded-3xl shadow-md border-2 border-gray-100"
                    >
                        <div className="flex flex-wrap gap-6">
                            {/* QR Image */}
                            <div className="w-full md:w-1/4 flex justify-center">
                                <img
                                    src={order.img}
                                    alt="Device"
                                    className="h-64 rounded-xl object-contain border"
                                />
                            </div>

                            {/* Order Details */}
                            <div className="flex-1 space-y-1 text-sm sm:text-base">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <p>
                                        <Label text="Device Name" /> {order.deviceName}
                                    </p>
                                    <p>
                                        <Label text="Order Date" /> {new Date(order.orderDate).toLocaleString()}
                                    </p>
                                    <p>
                                        <Label text="Order Id" /> {order.orderId}
                                    </p>
                                    <p>
                                        <Label text="Status" /> {order.status}
                                    </p>
                                    <p>
                                        <Label text="Product Price" /> ₹{order.productPrice}
                                    </p>
                                    <p>
                                        <Label text="Language" /> {order.language}
                                    </p>
                                    <p>
                                        <Label text="Ordered By" /> {order.orderedBy}
                                    </p>
                                    <p>
                                        <Label text="Sim" /> {order.simType}
                                    </p>
                                    <p>
                                        <Label text="Device Id" /> {order.deviceId || "-"}
                                    </p>
                                    <p>
                                        <Label text="Business Phone" /> {order.businessPhone}
                                    </p>
                                    <p>
                                        <Label text="Order Type" /> {order.orderType}
                                    </p>
                                </div>
                                <hr className="my-4" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <p>
                                        <Label text="Courier Id" /> {order.courier.courierId || "-"}
                                    </p>
                                    <p>
                                        <Label text="Courier Name" /> {order.courier.courierName || "-"}
                                    </p>
                                    <p>
                                        <Label text="Packed By" /> {order.courier.packedBy || "-"}
                                    </p>
                                    <p>
                                        <Label text="Tracking Url" /> {order.courier.trackingUrl || "-"}
                                    </p>
                                    <p>
                                        <Label text="Courier Status" /> {order.courier.courierStatus}
                                    </p>
                                    <p>
                                        <Label text="Ship Date" /> {order.courier.shipDate || "-"}
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition">
                                        Update Status
                                    </button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition">
                                        Update Courier
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) :
                    <div className='h-full bg-gray-100 mt-2 rounded-2xl'>
                        <NoDataFound
                            title={pageContent.noDataFoundTitle}
                            description={pageContent.noDataFoundDescription}
                        />
                    </div>
                }
            </div>
        </Layout>
    )
}
