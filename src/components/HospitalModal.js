import { useRef } from "react";
import formatCurrency from "../util/formatCurrency";
import Modal from "react-modal";
// import { useCart } from "../context/CartContext";

Modal.setAppElement("#root");

export default function HospitalModal({ item, open, closeModal }) {
  //   const { addToCart } = useCart();
  const quantityRef = useRef();
  ///The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

  function handleSubmit(e) {
    e.preventDefault(); //Reloading se prevent

    // const quantity = parseInt(quantityRef.current.value);
    // addToCart(item.id, quantity);
    closeModal();
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
        content: {
          margin: "10px",
          padding: "0",
          inset: "auto",
          //Hello
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-4 py-4 mx-auto">
          <div className="mx-auto flex items-center">
            <img
              alt="ecommerce"
              className="object-cover object-center rounded"
              src={`${item.imageUrl}`}
            />
            {/*   */}
            <div className="pl-8 py-2">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {item.category}
              </h2>
              <h1 className="text-red-600 text-3xl title-font font-medium mb-1">
                {item.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">1.6M+ Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed max-w-lg">{item.description}</p>
              <h2 className="leading-relaxed max-w-lg text-yellow-400">
                {item.Address}
              </h2>
              <div className="flex mt-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {formatCurrency(item.priceCents)}
                </span>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center ml-auto"
                >
                  <button
                    type="submit"
                    className="flex text-white bg-red-500 rounded-l-none border-0 py-2 px-3 focus:outline-none hover:bg-yellow-600 rounded"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}
