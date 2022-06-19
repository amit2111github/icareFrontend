// import { withTheme } from "@emotion/react";
import StoreHospital from "./StoreHospital";

export default function Hospital({ items }) {
  // console.log("Fuckoff");
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <StoreHospital key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
