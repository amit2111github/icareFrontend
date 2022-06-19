import { useState } from "react";
import formatCurrency from "../util/formatCurrency";
import HospitalModal from "./HospitalModal";

export default function StoreHospital({ item }) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
    //Set open ko open krega
  }

  function closeModal() {
    setOpen(false);
    //setOpen ko close
  }
  //http://assets.stickpng.com/images/58ac4b660aaa10546adf2701.png
  return (
    <>
      <div className="lg:w-1/4 w-1/2 p-4">
        <div className="block relative  rounded overflow-hidden">
          <img
            alt="Hospital"
            className="object-cover object-center w-full h-full block"
            src={`${item.imageUrl}`}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h2 className="text-red-900 title-font text-lg font-medium">
              {item.name}
            </h2>
            <h3 className="text-white-500 text-xs tracking-widest title-font uppercase mb-1 font-bold">
              {item.category}
            </h3>
            <p className="mt-1">{formatCurrency(item.priceCents)}</p>
            {/* Direct Money */}
          </div>
          <button
            onClick={openModal} //onclick open Modal
            className="text-white py-2 px-4 text-lg bg-yellow-500 rounded hover:bg-purple-900"
          >
            Details
          </button>
        </div>
      </div>
      <HospitalModal item={item} open={open} closeModal={closeModal} />
    </>
  );
}
