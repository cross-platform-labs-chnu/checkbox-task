type CheckboxState = {
  checked: boolean;
  id: string;
};

type CheckboxHashMap = Record<string, boolean>;

enum MainCheckboxState {
  Full,
  Partial,
  None,
}

export { MainCheckboxState };
export type { CheckboxState, CheckboxHashMap };
