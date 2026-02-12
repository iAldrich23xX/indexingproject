import { useMemo } from "react";

export default function useDuplicatedList(items = []) {
    return useMemo(() => [...items, ...items], [items]);
}
