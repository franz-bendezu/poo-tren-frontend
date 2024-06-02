import { useFetchMutation } from "../hooks/useFetch";

export function CustomerCreateView({ onCancel, onSuccess, employeeCode }) {
  const { mutate, isMutating, error } = useFetchMutation("/clientes/crear");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await mutate({
      apellPaterno: event.target.apellPaterno.value,
      apellMaterno: event.target.apellMaterno.value,
      nombre: event.target.nombre.value,
      dni: event.target.dni.value,
      ciudad: event.target.ciudad.value,
      direccion: event.target.direccion.value,
      telefono: event.target.telefono.value,
      email: event.target.email.value,
      empleado: employeeCode,
    });
    onSuccess?.();
  };
  return (
    <form className="card" onSubmit={handleSubmit}>
      <header className="card-header">
        <h3 className="card-header-title">Agregar empleado</h3>
      </header>
      <div className="card-content">
        <div className="field">
          <label className="label">Apellido paterno</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Apellido paterno"
              name="apellPaterno"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Apellido materno</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Apellido materno"
              name="apellMaterno"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="nombre"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">DNI</label>
          <div className="control">
            <input className="input" type="text" placeholder="DNI" name="dni" />
          </div>
        </div>

        <div className="field">
          <label className="label">Ciudad</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Ciudad"
              name="ciudad"
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
          <label className="label">Dirección</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Dirección"
              name="direccion"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Teléfono</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Teléfono"
              name="telefono"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
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
