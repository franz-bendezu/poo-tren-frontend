import { useState } from "react";

export default function App() {
  const [employeeCode, setEmmployeeCode] = useState();
  function handleChangeEmployeeCode(event) {
    setEmmployeeCode(event.target.value);
  }
  return (
    <div>
      <h1 className="title">Bienvenido</h1>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            value={employeeCode}
            onChange={handleChangeEmployeeCode}
            type="text"
            placeholder="Ingresa tu código de empleado"
          />
        </div>
      </div>
      <p>{employeeCode}</p>
    </div>
  );
}
