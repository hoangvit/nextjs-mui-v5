import { placeholderApi } from "api/placehorderApi";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, setOnMore } from "state/infomation";

export const useDataInfo = () => {
//   const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const dispatch = useDispatch();
  const { onMore, data } = useSelector((state: any) => state.info);

  const getData = useCallback(async () => {
    try {
      if (onMore) {
        const { data: result } = await placeholderApi.getPhoto(1, limit);
        dispatch(setData(result));
        dispatch(setOnMore(false));
      }
    } catch (error) {
      console.log(error);
      setData([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, onMore]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, getData, setLimit, limit };
};
