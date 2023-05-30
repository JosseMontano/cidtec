import * as Yup from "yup";

export interface FormDataPost{
    title: string;
    description: string;
    authorId: number;
  }
  
 export const initialValuesPost: FormDataPost = {
    title: "",
    description: "",
    authorId: 0,
  };
  
 export const validationSchemaPost = Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    description: Yup.string().required("La descripción es obligatoria"),
    authorId: Yup.number()
      .required("El ID del autor es obligatorio")
      .positive("El ID del autor debe ser un número positivo"),
  });