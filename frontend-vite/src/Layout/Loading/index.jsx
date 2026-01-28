import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import useLoading from "../../hooks/useLoading";
import LoadingContext from "./LoadingContext";

export default function AppLayout() {
  const loading = useLoading({ debug: true });
  const location = useLocation();

  useEffect(() => {
    loading.start();
  }, [location.pathname]);

  return (
    <LoadingContext.Provider value={loading}>
      <ProgressBar progress={loading.progress} status={loading.status} />
      <Outlet />
    </LoadingContext.Provider>
  );
}
