import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CustomerCreateView } from "./CustomerCreateView";

export function CustomerView({ employeeCode }) {
  const {
    data: customers,
    error,
    isLoading,
    mutate,
  } = useFetch("/clientes/mostrar");
  const [isOpenCreateClient, setIsOpenCreateClient] = useState(false);
  const handleOnSuccessCreateClient = async () => {
    setIsOpenCreateClient(false);
    await mutate();
  };

  return (
    <div>
      <h3>Clientes </h3>
      <div className="buttons ">
        <button
          className="button is-primary"
          onClick={() => setIsOpenCreateClient(true)}
        >
          Nuevo Cliente
        </button>
      </div>
      {isOpenCreateClient && (
        <CustomerCreateView
          employeeCode={employeeCode}
          onCancel={() => setIsOpenCreateClient(false)}
          onSuccess={handleOnSuccessCreateClient}
        />
      )}
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
