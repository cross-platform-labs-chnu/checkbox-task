import {
  createContext,
  type MouseEvent,
  type PropsWithChildren,
  useContext,
  useEffect,
  useId,
} from "react";
import { FaCheck, FaMinus } from "react-icons/fa6";
import { useCheckboxes } from "./useCheckboxes";
import { MainCheckboxState } from "./types";

type CheckboxListContextValue = ReturnType<typeof useCheckboxes>;

const CheckboxListContext = createContext<CheckboxListContextValue | null>(
  null,
);

const useCheckboxListContext = () => {
  const context = useContext(CheckboxListContext);

  if (!context) {
    throw new Error("CheckboxListItem must be used inside CheckboxList");
  }

  return context;
};

const CheckboxList = ({ children }: PropsWithChildren) => {
  const checkboxState = useCheckboxes();
  const { mainState, toggleAllCheckboxes } = checkboxState;

  return (
    <CheckboxListContext.Provider value={checkboxState}>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          aria-label="Toggle all checkboxes"
          onClick={toggleAllCheckboxes}
          className={`flex size-10 items-center justify-center border rounded-md cursor-pointer ${mainState !== MainCheckboxState.None ? "bg-blue-500" : ""}`}
        >
          {mainState === MainCheckboxState.Full ? (
            <FaCheck className="size-10 text-white" />
          ) : null}
          {mainState === MainCheckboxState.Partial ? (
            <FaMinus className="size-10 text-white" />
          ) : null}
        </button>

        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </CheckboxListContext.Provider>
  );
};

const CheckboxListItem = ({ children }: PropsWithChildren) => {
  const id = useId();
  const { checkedMap, registerCheckbox, unregisterCheckbox, toggleCheckbox } =
    useCheckboxListContext();

  useEffect(() => {
    registerCheckbox(id);

    return () => unregisterCheckbox(id);
  }, [id, registerCheckbox, unregisterCheckbox]);

  const checked = checkedMap[id] ?? false;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    toggleCheckbox(id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={checked}
      className="flex items-center gap-2 cursor-pointer text-left"
    >
      <span
        aria-hidden="true"
        className={`flex size-10 items-center justify-center border rounded-md ${checked ? "bg-blue-500" : ""}`}
      >
        {checked ? <FaCheck className="size-10 text-white" /> : null}
      </span>
      <span>{children}</span>
    </button>
  );
};

export { CheckboxList, CheckboxListItem };
