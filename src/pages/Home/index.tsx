import { Header, Orders } from "../../components";

import { HouseSimple } from "phosphor-react";

export const Home = () => {
  return (
    <>
      <Header
        title="Home"
        icon={<HouseSimple size={32} />}
        description="Acompanhe os pedidos dos clientes"
      />
      <Orders />
    </>
  );
};
