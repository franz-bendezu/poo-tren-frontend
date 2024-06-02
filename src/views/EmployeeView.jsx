export function EmployeeView() {
  const employees = [
    {
      id: 1,
      name: "Juan",
      lastName: "Pérez",
      email: "",
    },
    {
      id: 2,
      name: "María",
      lastName: "Gómez",
      email: "",
    },
    {
      id: 3,
      name: "José",
      lastName: "Hernández",
      email: "",
    },
    {
      id: 4,
      name: "Ana",
      lastName: "Martínez",
      email: "",
    },
  ];
  return (
    <div>
      <h3>Contenido de los Empleados </h3>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
