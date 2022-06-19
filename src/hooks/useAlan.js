import { useEffect, useState, useCallback } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useCart } from "../context/CartContext";
import storeItems from "../items.json";
import hospitalItems from "../hospital.json";

const COMMANDS = {
  OPEN_CART: "open-cart",
  CLOSE_CART: "close-cart",
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  PURCHASE_ITEMS: "purchase-items",
  DETAILS: "details",
  HOSPITAL_DETAIL: "hospital-detail",
  BED_DETAIL: "bed-detail",
  KEY_FEATURE: "key-features",
  ADDRESS: "address",
  //close-cart command aayega udhar alan se or idhar ussi ko text de die CLOSE_CART ka
};

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState();
  const {
    setShowCartItems,
    isCartEmpty,
    addToCart,
    removeFromCart,
    cart,
    checkout,
  } = useCart();

  const openCart = useCallback(() => {
    if (isCartEmpty) {
      alanInstance.playText("Sorry! You have no items in your cart");
      //play text ka use krke jo likhoge wo alan bolega
    } else {
      alanInstance.playText("Opening the cart");
      setShowCartItems(true);
      //cart items show ko true kr die
    }
  }, [alanInstance, isCartEmpty, setShowCartItems]);
  //use call back depending on these 3 things

  const closeCart = useCallback(() => {
    if (isCartEmpty) {
      alanInstance.playText("Sorry to say but! You have no items in your cart");
    } else {
      alanInstance.playText("Closing your cart");
      setShowCartItems(false);
    }
  }, [alanInstance, isCartEmpty, setShowCartItems]);

  const addItem = useCallback(
    ({ detail: { name, quantity } }) => {
      const item = storeItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      //name ko lower case me kr do
      if (item == null) {
        alanInstance.playText(
          `Sorry to say , we do not have ${name} item in our store , Stay Tuned! We will come with your choice soon`
        );
      } else {
        addToCart(item.id, quantity);
        alanInstance.playText(
          `Added ${quantity} of the ${name} item to your cart! Wishing you for your greater health`
        );
      }
    },
    [alanInstance, addToCart]
  );

  const removeItem = useCallback(
    ({ detail: { name } }) => {
      const entry = cart.find(
        (e) => e.item.name.toLowerCase() === name.toLowerCase()
      );
      if (entry == null) {
        alanInstance.playText(
          `Sorry to say but ,I cannot find the ${name} item in your cart. I am informing about this to Ayush! Hope he will update the details soon.`
        );
      } else {
        removeFromCart(entry.itemId);
        alanInstance.playText(
          `Removed the ${name} item from your cart, Wishing you a healthy life`
        );
      }
    },
    [alanInstance, removeFromCart, cart]
  );

  const details = useCallback(
    ({ detail: { name } }) => {
      const item = storeItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      if (item == null) {
        alanInstance.playText(
          `Sorry to say but ,I cannot find the ${name} in my store. ! I am informing about this to Ayush! Hope he will update the details soon.  `
        );
      } else {
        // removeFromCart(.itemId);
        alanInstance.playText(
          ` ${item.description} , Thats all about ${item.name}  I hope this will be helpful to you , Thank You! `
        );
      }
    },
    [alanInstance]
  );

  const purchaseItems = useCallback(() => {
    if (isCartEmpty) {
      alanInstance.playText("Your cart is empty!");
    } else {
      alanInstance.playText(
        "Checking out, Thank you for ordering from our website , We will try to deliver your product as soon as possible. I hope we were able to help you , I am informing about this to Ayush! Hope he will come with Payment options soon.  "
      );
      checkout();
    }
  }, [alanInstance, isCartEmpty, checkout]);

  //Hospital

  const Hospitaldetail = useCallback(
    ({ detail: { name } }) => {
      const item = hospitalItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      if (item == null) {
        alanInstance.playText(
          `Sorry to say but ,I cannot find the ${name} here.! I am informing about this to Ayush! Hope he will update the details soon.  `
        );
      } else {
        // removeFromCart(.itemId);
        alanInstance.playText(
          `${item.description}, Address of ${item.name} is ${item.Address} whereas ${item.category} here.Thats all about ${item.name}  Thank You! `
        );
      }
    },
    [alanInstance]
  );

  const Address = useCallback(
    ({ detail: { name } }) => {
      const item = hospitalItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      if (item == null) {
        alanInstance.playText(
          `Stay Tuned , We will come with this information too`
        );
      } else {
        // removeFromCart(.itemId);
        alanInstance.playText(
          ` ,  address of ${item.name} is  ${item.Address}.  I hope this will be helpful to you , Thank You! `
        );
      }
    },
    [alanInstance]
  );

  const keyFeature = useCallback(
    ({ detail: { name } }) => {
      const item = hospitalItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      if (item == null) {
        alanInstance.playText(
          `Sorry to say but ,I cannot find the ${name} in my database! I am informing about this to Ayush! Hope he will update the details soon.  `
        );
      } else {
        // removeFromCart(.itemId);
        alanInstance.playText(
          ` Some of the Salient features of  ${item.name} are ${item.key} , I hope this will be helpful to you ,I am informing about this to Ayush!  he will definitely  provide more details to my database,Thank You! `
        );
      }
    },
    [alanInstance]
  );

  const beddetail = useCallback(
    ({ detail: { name } }) => {
      const item = hospitalItems.find(
        (i) => i.name.toLowerCase() === name.toLowerCase()
      );
      if (item == null) {
        alanInstance.playText(
          `Sorry to say but ,I cannot find the ${name} item in my store! I am informing about this to Ayush! Hope he will update the details soon.  `
        );
      } else {
        // removeFromCart(.itemId);
        alanInstance.playText(
          `  ${item.category} at ${item.name} . The above information was updated on 18th june 2022 .I am informing about this to Ayush! Hope he will update the details as fast as possible. Thank you! `
        );
      }
    },
    [alanInstance]
  );

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart);
    window.addEventListener(COMMANDS.CLOSE_CART, closeCart);
    window.addEventListener(COMMANDS.ADD_ITEM, addItem);
    window.addEventListener(COMMANDS.REMOVE_ITEM, removeItem);
    window.addEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems);
    window.addEventListener(COMMANDS.DETAILS, details);
    window.addEventListener(COMMANDS.HOSPITAL_DETAIL, Hospitaldetail);
    window.addEventListener(COMMANDS.BED_DETAIL, beddetail);
    window.addEventListener(COMMANDS.KEY_FEATURE, keyFeature);
    window.addEventListener(COMMANDS.ADDRESS, Address);
    //Idhar event listener set kr die
    //or CLOSE_CART command se function jod die iss side

    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.CLOSE_CART, closeCart);
      window.removeEventListener(COMMANDS.ADD_ITEM, addItem);
      window.removeEventListener(COMMANDS.REMOVE_ITEM, removeItem);
      window.removeEventListener(COMMANDS.PURCHASE_ITEMS, purchaseItems);
      window.removeEventListener(COMMANDS.DETAILS, details);
      window.removeEventListener(COMMANDS.HOSPITAL_DETAIL, Hospitaldetail);
      window.removeEventListener(COMMANDS.BED_DETAIL, beddetail);
      window.removeEventListener(COMMANDS.KEY_FEATURE, keyFeature);
      window.removeEventListener(COMMANDS.ADDRESS, Address);
    };
  }, [openCart, closeCart, addItem, removeItem, purchaseItems]);
  //Ye charo niche dependencies dal die

  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        top: "15px",
        left: "15px",
        //alan btn wo microphone hn
        //key was the integration key
        key: "55ea3e6a5f211d63c974767caae6fe522e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }));
          //payload object ko detail me store kr die
        },
      })
    );
  }, [alanInstance]);

  return null;
}
//
