import styles from "@/styles/global/toast.module.css";

interface params {
  msg: string;
  color?: string;
}

const Toast = ({ msg, color }: params) => {
  color = color ? color : "#333";

  return (
    <>
      <div className={styles.snackbar}>{msg}</div>
      <style jsx>{`
        div {
          background-color: ${color};
        }
      `}</style>
    </>
  );
};

export default Toast;
