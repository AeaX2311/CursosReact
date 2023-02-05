import {FaBurn} from "react-icons/fa";

export const Post = () => {
  return (
    <button 
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => console.log(json));
      }}
    >
      <FaBurn/>Traer datos
    </button>
  );
};
