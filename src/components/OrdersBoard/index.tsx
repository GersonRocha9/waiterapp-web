import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus?: (orderId: string, status: Order["status"]) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrdersBoardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModalOrder(order: Order) {
    setIsOpenModal(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);
    const status =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";
    await api.patch(`/orders/${selectedOrder?._id}`, { status });
    toast.success(
      `O pedido da mesa ${selectedOrder?.table} teve o status alterado!`
    );
    onChangeOrderStatus?.(selectedOrder?._id as string, status);
    setIsLoading(false);
    handleCloseModal();
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);
    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder?._id as string);
    setIsLoading(false);
    handleCloseModal();
  }

  return (
    <Board>
      <OrderModal
        isOpen={isOpenModal}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModalOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>
                {order.products.length}
                {order.products.length === 1 ? " item" : " items"}
              </span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
