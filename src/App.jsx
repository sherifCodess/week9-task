import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Counter from "./componenets/Counter";
import TodoApp from "./componenets/ToDoList";
import UserProfileCard from "./componenets/ProfileCard";
import SearchBox from "./componenets/SearchBox";

function App() {
  return (
    <div>
      <Counter />
      <TodoApp />
      <UserProfileCard />
      <SearchBox />
    </div>
  );
}

export default App;
