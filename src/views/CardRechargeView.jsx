import { useFetchMutation } from "../hooks/useFetch";
import { useState } from "react";

export function CardRechargeView({
  onCancel,
  onSuccess,
  customerCode,
  cardCode,
  employeeCode,
}) {
  const { mutate, isMutating, error } = useFetchMutation("/tarjetas/recargar", {
    method: "PUT",
  });
  const [internalCardCode, setInternalCardCode] = useState(cardCode);
  const [internalCustomerCode, setInternalCustomerCode] =
    useState(customerCode);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate({
      tarjeta: event.target.tarjeta.value,
      dineroRecarga: event.target.dineroRecarga.value,
      estacion: event.target.estacion.value,
      empleado: employeeCode,
      cliente: event.target.cliente.value,
    });
    onSuccess?.();
  };
  return (
    <form className="card" onSubmit={handleSubmit}>
      <header className="card-header">
        <h3 className="card-header-title">Recargar tarjeta</h3>
      </header>
      <div className="card-content">
        <div className="field">
          <label className="label">Tarjeta</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Tarjeta"
              name="tarjeta"
              value={internalCardCode}
              onChange={(event) => setInternalCardCode(event.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Dinero recarga</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Dinero recarga"
              name="dineroRecarga"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Estación</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Estación"
              name="estacion"
            />
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
