import { useState, useEffect } from "react";

export function Counter() {
  const [msj, setMsj] = useState("hols");
const [cont, setCont] = useState(0)

  useEffect(() => {
    if(cont === 3)
        setCont(cont - 1)
  }, [cont]);

  return (
    <div>
      <input
        onChange={(e) => {
          setMsj(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(msj);
        }}
      >
        guardar
      </button>

      <hr/>
      <h1>Contador: {cont}</h1>
      <button onClick={() => {
        setCont(cont + 1)
      }}>Incrementar</button>
    </div>
  );
}
