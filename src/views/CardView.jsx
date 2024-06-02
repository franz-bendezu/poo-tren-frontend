import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardCreateView } from "./CardCreateView";
import { CardRechargeView } from "./CardRechargeView";

export function CardView({ employeeCode }) {
  const {
    data: cards,
    error,
    isLoading,
    mutate,
  } = useFetch("/tarjetas/mostrar");
  const [isOpenCreateCard, setIsOpenCreateCard] = useState(false);
  const handleOnSuccessCreateCard = async () => {
    setIsOpenCreateCard(false);
    await mutate();
  };
  const [isOpenRechargeCard, setIsOpenRechargeCard] = useState(false);

  const handleOnSuccessRechargeCard = async () => {
    setIsOpenRechargeCard(false);
    await mutate();
  }

  return (
    <div>
      <h3>Tarjetas </h3>
      <div className="buttons ">
        <button
          className="button is-primary"
          onClick={() => setIsOpenCreateCard(true)}
        >
          Nueva Tarjeta
        </button>
        <button
          className="button is-primary"
          onClick={() => setIsOpenRechargeCard(true)}
        >
          Recargar Tarjeta
        </button>
      </div>
      {isOpenCreateCard && (
        <CardCreateView
          employeeCode={employeeCode}
          onCancel={() => setIsOpenCreateCard(false)}
          onSuccess={handleOnSuccessCreateCard}
        />
      )}
      {isOpenRechargeCard && (
        <CardRechargeView
          employeeCode={employeeCode}
          onCancel={() => setIsOpenRechargeCard(false)}
          onSuccess={handleOnSuccessRechargeCard}
        />
      )}
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
