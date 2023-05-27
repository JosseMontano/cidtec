"use client";

import React from "react";
import { useModal, Modal } from "@/hooks/global/useModal";

const AdminPost = () => {
  const { stateModal, toggle } = useModal();
  return (
    <div>
      <button onClick={() => toggle()}>Agregar</button>
      <Modal
        modalContent={<p>funciona</p>}
        stateModal={stateModal}
        toggle={toggle}
      />
    </div>
  );
};

export default AdminPost;
