import { useFetchMutation } from "../hooks/useFetch";

export function EmployeeCreateView({ employeeCode, onSucess, onCancel }) {
  const { mutate } = useFetchMutation("/empleados/crear");
  async function handleSubmit(event) {
    event.preventDefault();
    const elForm = event.target;
    await mutate({
      apellPaterno: elForm.apellPaterno.value,
      apellMaterno: elForm.apellMaterno.value,
      nombre: elForm.nombre.value,
      dni: elForm.dni.value,
      ciudad: elForm.ciudad.value,
      estacion: elForm.estacion.value,
      direccion: elForm.direccion.value,
      usuario: elForm.usuario.value,
      clave: elForm.clave.value,
    });
    onSucess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <header className="card-header">
        <p className="card-header-title">Nuevo Empleado</p>
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
          <label className="label">Usuario</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Usuario"
              name="usuario"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Clave</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Clave"
              name="clave"
            />
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button type="submit">Guardar</button>
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
