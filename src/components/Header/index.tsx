import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { CreateCategoryModal } from "../CreateCategoryModal";
import { CreateProductModal } from "../CreateProductModal";

import { Container, Content } from "./styles";

export function Header() {
  const [isCreateProductOpenModal, setIsCreateProductOpenModal] =
    useState(false);
  const [isCreateCategoryOpenModal, setIsCreateCategoryOpenModal] =
    useState(false);

  function handleCreateProductOpenModal() {
    setIsCreateProductOpenModal(true);
  }

  function handleCreateProductCloseModal() {
    setIsCreateProductOpenModal(false);
  }

  function handleCreateCategoryOpenModal() {
    setIsCreateCategoryOpenModal(true);
  }

  function handleCreateCategoryCloseModal() {
    setIsCreateCategoryOpenModal(false);
  }

  return (
    <Container>
      <Content>
        <CreateProductModal
          isOpen={isCreateProductOpenModal}
          onClose={handleCreateProductCloseModal}
        />

        <CreateCategoryModal
          isOpen={isCreateCategoryOpenModal}
          onClose={handleCreateCategoryCloseModal}
        />

        <img src={logo} alt="WAITERAPP Logo" />
      </Content>
    </Container>
  );
}
