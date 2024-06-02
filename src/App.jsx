import { useState } from "react";

export default function App() {
  const [employeeCode, setEmmployeeCode] = useState();
  function handleChangeEmployeeCode(event) {
    setEmmployeeCode(event.target.value);
  }
  return (
    <div>
      <h1>Bienvenido</h1>
      <input
        value={employeeCode}
        onChange={handleChangeEmployeeCode}
        type="text"
        placeholder="Ingresa tu código de empleado"
      />
      <p>{employeeCode}</p>
    </div>
  );
}
