import Toast from "@/components/global/toast";
import { useState } from "react";

export const usePost = () => {
  const [showToast, setShowToast] = useState(false);
  const [msg, setmsg] = useState("");

  const [loadingPost, setLoadingPost] = useState(false);

  const handleShowLoadingBtn = () => {
    setLoadingPost(true);
  };

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    //it won't show the msg 'loading' in the btn
    setLoadingPost(false);
  };

  const handleLoadMsg = (msg: string) => {
    setmsg(msg);
  };

  function showToastJSX() {
    if (showToast) return <Toast msg={msg} />;
  }

  function showBtnJSX() {
    return <button type="submit">{loadingPost ? "Cargando" : "Enviar"}</button>;
  }

  return {
    handleShowLoadingBtn,
    handleShowToast,
    handleLoadMsg,
    showToastJSX,
    showBtnJSX
  };
};
