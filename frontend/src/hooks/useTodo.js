import { useState } from "react";
import { useTodo as useTodoProvider } from "../store/app/todo-provider";
import { _DELETE, _GET, _PATCH, _POST } from "../services/http";
import { CRUD_ITEM, GET_ITEMS } from "../constant";
import {
  DELETE_ITEM,
  STORE_LIST,
  STORE_SELECTED_ITEM,
  TOGGLE_SHOW_EDIT_MODAL,
  UPDATE_ITEM,
  UPDATE_LIST,
} from "../constant/actions-type";

const useTodo = () => {
  const [state, dispatch] = useTodoProvider(),
    [pending, setPending] = useState(false),
    read = async () => {
      enablePending();
      await _GET(GET_ITEMS).then((response) =>
        dispatch({ type: STORE_LIST, payload: response })
      );
    },
    create = async (item) => {
      enablePending();
      await _POST(CRUD_ITEM, item).then((response) =>
        dispatch({ type: UPDATE_LIST, payload: response })
      );
      disablePending();
    },
    edit = async (id) => {
      enablePending();
      await _GET(`${CRUD_ITEM}${id}`).then((response) => {
        toggleShowEditModal();
        dispatch({ type: STORE_SELECTED_ITEM, payload: response });
      });
      disablePending();
    },
    update = async (item, id) => {
      enablePending();
      await _PATCH(`${CRUD_ITEM}${id}`, item).then((response) => {
        dispatch({ type: UPDATE_ITEM, payload: response });
        toggleShowEditModal();
      });
      disablePending();
    },
    destroy = async (id) => {
      enablePending();
      await _DELETE(`${CRUD_ITEM}${id}`).then(({ _id }) =>
        dispatch({ type: DELETE_ITEM, payload: _id })
      );
    },
    toggleShowEditModal = () => dispatch({ type: TOGGLE_SHOW_EDIT_MODAL }),
    enablePending = () => setPending(true),
    disablePending = () => setPending(false);

  return {
    read,
    create,
    edit,
    update,
    destroy,
    pending,
    state,
    dispatch,
  };
};

export default useTodo;
