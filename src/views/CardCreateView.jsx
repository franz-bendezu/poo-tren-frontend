import { useState } from "react";
import { useFetchMutation } from "../hooks/useFetch";

export function CardCreateView({
  onCancel,
  onSuccess,
  customerCode,
  employeeCode,
}) {
  const { mutate, isMutating, error } = useFetchMutation("/tarjetas/crear");
  const [internalCustomerCode, setInternalCustomerCode] =
    useState(customerCode);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate({
      empleado: employeeCode,
      cliente: event.target.cliente.value,
      tipo: event.target.tipo.value,
    });
    onSuccess?.();
  };
  return (
    <form className="card" onSubmit={handleSubmit}>
      <header className="card-header">
        <h3 className="card-header-title">Crear tarjeta</h3>
      </header>
      <div className="card-content">
        <div className="field">
          <label className="label">Tipo</label>
          <div className="control">
            <div className="select">
              <select
                className="input"
                type="text"
                placeholder="Tipo"
                name="tipo"
              >
                <option value="01">Normal</option>
                <option value="02">Medio</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Cliente</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Cliente"
              name="cliente"
              value={internalCustomerCode}
              onChange={(event) => setInternalCustomerCode(event.target.value)}
            />
          </div>
        </div>
        <div className="field">
          {error && <p className="help is-danger">{error}</p>}
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button
            type="submit"
            className={`button is-link ${isMutating ? "is-loading" : ""}`}
          >
            Guardar
          </button>
        </div>
        <div className="card-footer-item">
          <button type="button" className="button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </footer>
    </form>
  );
}
