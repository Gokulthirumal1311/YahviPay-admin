import React from "react";

const order = {
  orderId: "DEVICE174833867625314350",
  deviceName: "All In One QR Stickers (Set Of 3)",
  img: "https://renambl.blr1.cdn.digitaloceanspaces.com/ypay/stand01.png",
  businessPhone: "7010562663",
  language: "NIL",
  simType: "NIL",
  address: {
    name: "Sgwgh",
    address: "hah,Bzsb,Jhsn,Chennai",
    phone: "6663666666",
    pincode: "614616",
    landmark: "Ghvggg",
  },
  productPrice: 69,
  orderDate: "2025-05-27T15:07:56.257Z",
  status: "processing",
  deviceId: "",
  orderType: "DEVICE",
  orderedBy: "7010562663",
  courier: {
    courierId: "",
    courierName: "",
    shipDate: "",
    courierStatus: "NONE",
    trackingUrl: "nill",
    packedBy: "",
  },
  comments: "",
  merchantId: "MC1748335960510",
};

const Label = ({ text }) => (
  <span className="text-blue-800 font-semibold capitalize">{text} :</span>
);

export const CreateOrders=()=>{
  return (
    <div className="bg-white p-6 m-6 rounded-3xl shadow-xl max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-6">
        
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            src={order.img}
            alt="Device"
            className="h-64 rounded-xl object-contain border"
          />
        </div>
        <div className="flex-1 space-y-1 text-sm sm:text-base">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p><Label text="device Name" /> {order.deviceName}</p>
            <p><Label text="Order Date" /> {new Date(order.orderDate).toLocaleString()}</p>
            <p><Label text="Order Id" /> {order.orderId}</p>
            <p><Label text="Status" /> {order.status}</p>
            <p><Label text="productPrice" /> ₹{order.productPrice}</p>
            <p><Label text="Language" /> {order.language}</p>
            <p><Label text="Ordered By" /> {order.orderedBy}</p>
            <p><Label text="Sim" /> {order.simType}</p>
            <p><Label text="Device Id" /> {order.deviceId || "-"}</p>
            <p><Label text="Business Phone" /> {order.businessPhone}</p>
            <p><Label text="Order Type" /> {order.orderType}</p>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p><Label text="Courier Id" /> {order.courier.courierId || "-"}</p>
            <p><Label text="Courier Name" /> {order.courier.courierName || "-"}</p>
            <p><Label text="Packed By" /> {order.courier.packedBy || "-"}</p>
            <p><Label text="Tracking Url" /> {order.courier.trackingUrl || "-"}</p>
            <p><Label text="Courier Status" /> {order.courier.courierStatus}</p>
            <p><Label text="Ship Date" /> {order.courier.shipDate || "-"}</p>
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
  );
};
