import { useFetchMutation } from "../hooks/useFetch";

export function EmployeeCreateView({ employeeCode }) {
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
      telefono: elForm.telefono.value,
      email: elForm.email.value,
      empleado: employeeCode,
    });
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
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button type="submit">Guardar</button>
        </div>
        <div className="card-footer-item">
          <button type="button" className="button">
            Cancelar
          </button>
        </div>
      </footer>
    </form>
  );
}
