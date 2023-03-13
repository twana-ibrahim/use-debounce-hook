import { ChangeEvent, useState } from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");

  const debouncedValue = useDebounce(search, 1000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} />
      <div>{debouncedValue}</div>
    </div>
  );
}

export default App;
