import { useCallback, useState } from "react";

export default function usePostApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const performRequest = useCallback(
    ({ body, options }) =>
      new Promise((resolve) => {
        const encodedBody = JSON.stringify(body);

        fetch(endpoint, {
          method: "POST",
          body: encodedBody,
          ...options,
        })
          .then((res) => res.json())
          .then((res) => {
            setData(res);
            resolve(res);
          })
          .finally(() => setLoading(false));
      }),
    [endpoint]
  );

  return [performRequest, { data, loading }];
}
