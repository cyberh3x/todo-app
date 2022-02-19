import { useState } from "react";
import { CRUD_ITEM, GET_ITEMS } from "../constant";
import { _GET, _POST } from "../services/http";

const useTodoCrud = () => {
  const read = () => _GET(GET_ITEMS),
    create = (item) => _POST(CRUD_ITEM, item),
    edit = (id) => _GET(`${CRUD_ITEM}${id}`),
    updateModalHandler = () => setUpdateModalIsOpen(!updateModalIsOpen);

  return {
    read,
    create,
    edit,
    updateModalIsOpen,
    updateModalHandler,
  };
};

export default useTodoCrud;
