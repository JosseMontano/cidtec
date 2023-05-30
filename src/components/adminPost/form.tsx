"use client";

import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import {
  initialValuesPost,
  validationSchemaPost,
  FormDataPost,
} from "@/validations/adminPost/validationSchema";
import { savePost } from "@/services/adminPost/post";
import { PostType } from "@/interfaces/adminPost/postType";
import { usePost } from "@/hooks/global/usePost";

interface Params {
  addNewValue: (val: PostType) => void;
}

const FormComponent = ({ addNewValue }: Params) => {
  const {
    handleShowLoadingBtn,
    handleLoadMsg,
    handleShowToast,
    showToastJSX,
    showBtnJSX,
  } = usePost();

  const handleSubmit = async (values: FormDataPost) => {
    handleShowLoadingBtn();
    const { data, msg } = await savePost<FormDataPost, PostType>(values);
    handleLoadMsg(msg);

    //add new value to the post
    addNewValue(data);

    //show the toast
    handleShowToast();
  };

  return (
    <div>
      <h2>Crear publicacion</h2>
      <Formik
        validateOnChange={false}
        initialValues={initialValuesPost}
        validationSchema={validationSchemaPost}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" id="title" name={"title"} />
          <ErrorMessage name="title" component="span" />

          <Field type="text" id="description" name="description" />
          <ErrorMessage name="description" component="div" />

          <Field type="number" id="authorId" name="authorId" />
          <ErrorMessage name="authorId" component="div" />

          {showBtnJSX()}
        </Form>
      </Formik>
      {showToastJSX()}
    </div>
  );
};

export default FormComponent;
