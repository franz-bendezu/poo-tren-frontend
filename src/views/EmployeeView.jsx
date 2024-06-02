import { useFetch } from "../hooks/useFetch";
export function EmployeeView() {
  const { data: employees, error, isLoading } = useFetch("/empleados/mostrar");

  return (
    <div>
      <h3>Contenido de los Empleados </h3>
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
                <td>{employee.nombres}</td>
                <td>{employee.apellidos}</td>
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
