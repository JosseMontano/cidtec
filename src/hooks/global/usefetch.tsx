import { useEffect, useState } from "react";
import Nofound from "@/assets/global/img/noFound1.png";
import Image from "next/image";

interface Params<T> {
  services: () => Promise<{ data: T[] }>;
}

const Usefetch = <T,>({ services }: Params<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    const handleLoadData = async () => {
      const { data } = await services();
      setLoading(false);
      setData(data);
      if (data.length > 0) {
        setEmpty(false);
      }
    };

    handleLoadData();
  }, [services]);

  const addNewValue = (newData: T) => {
    setData([...data, newData]);
  };

  function showMsgEmptyJSX() {
    return <p>No hay datos</p>;
  }

  function showLoading() {
    return <p>CARGANDO</p>;
  }

  return {
    data,
    loading,
    empty,
    showMsgEmptyJSX,
    showLoading,
    addNewValue
  };
};

export default Usefetch;
