import "./App.css";
import {
  CheckboxList,
  CheckboxListItem,
} from "./components/MultiCheckbox/MultiCheckbox";

function App() {
  return (
    <main className="container mx-auto p-16">
      <CheckboxList>
        <CheckboxListItem>First option</CheckboxListItem>
        <CheckboxListItem>Second option</CheckboxListItem>
        <CheckboxListItem>Third option</CheckboxListItem>
      </CheckboxList>
    </main>
  );
}

export default App;
