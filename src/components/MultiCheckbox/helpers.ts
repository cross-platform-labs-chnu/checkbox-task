import { CheckboxHashMap, CheckboxState, MainCheckboxState } from "./types";

export const createInitialCheckedMap = (
  items: CheckboxState[],
): CheckboxHashMap =>
  Object.fromEntries(items.map((item) => [item.id, item.checked]));

export const toggleCheckedValue = (
  checkedMap: CheckboxHashMap,
  id: string,
): CheckboxHashMap => ({
  ...checkedMap,
  [id]: !checkedMap[id],
});

export const setAllCheckedValues = (
  checkedMap: CheckboxHashMap,
  checked: boolean,
): CheckboxHashMap =>
  Object.fromEntries(
    Object.keys(checkedMap).map((key) => [key, checked]),
  );

export const calculateMainCheckboxState = (
  checkedMap: CheckboxHashMap,
): MainCheckboxState => {
  const checkedCount = Object.values(checkedMap).filter(Boolean).length;
  const itemCount = Object.keys(checkedMap).length;

  if (checkedCount === 0) return MainCheckboxState.None;
  if (checkedCount === itemCount) return MainCheckboxState.Full;

  return MainCheckboxState.Partial;
};
