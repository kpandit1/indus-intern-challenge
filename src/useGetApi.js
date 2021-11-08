import { useCallback, useEffect, useState } from "react";

export default function useGetApi(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const refetch = useCallback(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [setLoading, setData, url]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, refetch };
}
