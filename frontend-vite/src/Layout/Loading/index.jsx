import { useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import useLoading from "../../hooks/useLoading";

export default function Loading({ children }) {
  //children é uma func passada como parâmetro
  // e dentro dela juntamente do componente com outro parâmetro nele.
  const loading = useLoading();

  useEffect(() => {
    loading.start();
  }, []);

  return (
    <>
      <ProgressBar progress={loading.progress} status={loading.status} />

      {children(loading)}
    </>
  );
}
