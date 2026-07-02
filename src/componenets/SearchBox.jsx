import { useState, useRef, useEffect } from "react";

function SearchBox() {
  // Ref for the input element
  const inputRef = useRef(null);

  // State for the input text
  const [searchText, setSearchText] = useState("");

  // Ref for counting renders
  const renderCount = useRef(0);

  // Increment render count on every render
  renderCount.current++;

  // Focus the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Search Input</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <p>
        <strong>You typed:</strong> {searchText}
      </p>

      <p>
        <strong>Render Count:</strong> {renderCount.current}
      </p>
    </div>
  );
}

export default SearchBox;
