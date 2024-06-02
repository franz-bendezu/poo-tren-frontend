import { useFetch } from "../hooks/useFetch";
export function CardView() {
  const { data: cards, error, isLoading } = useFetch("/tarjetas/mostrar");

  return (
    <div>
      <h3>Tarjetas </h3>
      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Código</th>
            <th>Tipo</th>
            <th>Estación</th>
            <th>Empleado</th>
            <th>Cliente</th>
            <th>Saldo</th>
            <th>Fecha</th>
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
            cards.map((card) => (
              <tr key={card.codigo}>
              <td>{card.codigo}</td>
              <td>{card.tipo}</td>
              <td>{card.estacion}</td>
              <td>{card.empleado}</td>
              <td>{card.cliente}</td>
              <td>{card.saldo}</td>
              <td>{card.fecha}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
