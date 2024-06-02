import { useFetch } from "../hooks/useFetch";
export function CustomerView() {
  const { data: customers, error, isLoading } = useFetch("/clientes/mostrar");

  return (
    <div>
      <h3>Clientes </h3>
    <div className="buttons ">
      <button className="button is-primary">Nuevo Cliente</button>
    </div>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Código</th>
            <th>DNI</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Ciudad</th>
            <th>Dirección</th>
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
            customers.map((customer) => (
              <tr key={customer.codigo}>
                <td>{customer.codigo}</td>
                <td>{customer.dni}</td>
                <td>{customer.nombre}</td>
                <td>
                  {customer.paterno} {customer.materno}
                </td>
                <td>{customer.ciudad}</td>
                <td>{customer.direccion}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
