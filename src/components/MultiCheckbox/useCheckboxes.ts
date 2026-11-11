import { useCallback, useState } from "react";
import {
  calculateMainCheckboxState,
  toggleCheckedValue,
  setAllCheckedValues,
} from "./helpers";
import { CheckboxHashMap, MainCheckboxState } from "./types";

export const useCheckboxes = () => {
  const [checkedMap, setCheckedMap] = useState<CheckboxHashMap>({});

  const mainState = calculateMainCheckboxState(checkedMap);

  const registerCheckbox = useCallback((id: string) => {
    setCheckedMap((prev) => ({ ...prev, [id]: prev[id] ?? false }));
  }, []);

  const unregisterCheckbox = useCallback((id: string) => {
    setCheckedMap((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const toggleCheckbox = useCallback((id: string) => {
    setCheckedMap((prev) => toggleCheckedValue(prev, id));
  }, []);

  const setAllCheckboxes = useCallback((checked: boolean) => {
    setCheckedMap((prev) => setAllCheckedValues(prev, checked));
  }, []);

  const toggleAllCheckboxes = useCallback(() => {
    setAllCheckboxes(mainState === MainCheckboxState.None);
  }, [mainState, setAllCheckboxes]);

  return {
    checkedMap,
    mainState,
    registerCheckbox,
    unregisterCheckbox,
    toggleCheckbox,
    toggleAllCheckboxes,
  };
};
