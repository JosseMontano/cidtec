"use client";

import React from "react";
import { useModal, Modal } from "@/hooks/global/useModal";
import Usefetch from "@/hooks/global/usefetch";
import { getPosts } from "@/services/adminPost/post";
import { PostType } from "@/interfaces/adminPost/postType";

const AdminPost = () => {
  const { stateModal, toggle } = useModal();

  const { data, loading, showMsgEmptyJSX, showLoading, empty } =
    Usefetch<PostType>({
      services: getPosts,
    });

  return (
    <div>
      <button onClick={() => toggle()}>Agregar Publicacion</button>

      {loading && showLoading()}

      {empty && showMsgEmptyJSX()}

      {data.map((v) => (
        <div key={v.id}>
          <h2>{v.title}</h2>
          <p>{v.description}</p>
        </div>
      ))}

      <Modal
        modalContent={<p>funciona</p>}
        stateModal={stateModal}
        toggle={toggle}
      />
    </div>
  );
};

export default AdminPost;
