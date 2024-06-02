import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { EmployeeCreateView } from "./EmployeeCreateView";

export function EmployeeView(props) {
  const { data: employees, error, isLoading } = useFetch("/empleados/mostrar");
  const { employeeCode } = props;

  const [isOpenCreateEmployee, setIsOpenCreateEmployee] = useState(false);
  return (
    <div>
      <h3>Contenido de los Empleados </h3>
      {isOpenCreateEmployee && (
        <EmployeeCreateView employeeCode={employeeCode} />
      )}
      <div className="buttons ">
        <button
          className="button is-primary"
          onClick={() => setIsOpenCreateEmployee(true)}
        >
          Nuevo Empleado
        </button>
      </div>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Dni</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="6">Cargando...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="6">Error: {error}</td>
            </tr>
          ) : (
            employees.map((employee) => (
              <tr key={employee.codigo}>
                <td>{employee.nombre}</td>
                <td>
                  {employee.materno} {employee.paterno}
                </td>
                <td>{employee.dni}</td>
                <td>{employee.ciudad}</td>
                <td>{employee.direccion}</td>
                <td>{employee.usuario}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
