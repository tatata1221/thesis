import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast_Comp = ({ msg, renderToast, setToast, type }) => {
  useEffect(() => {
    if (renderToast) {
      if (type === "success") {
        toast.success(`${msg}`);
        setToast(false);
      } else {
        toast.error(`${msg}`);
        setToast(false);
      }
    }
  }, [renderToast]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Toast_Comp;
