import {
  STORE_LIST,
  STORE_SELECTED_ITEM,
  TOGGLE_SHOW_ADD_MODAL,
  TOGGLE_SHOW_EDIT_MODAL,
  UPDATE_LIST,
  UPDATE_ITEM,
  DELETE_ITEM,
} from "../../constant/actions-type";

const TodoReducer = (state, { type, payload }) => {
  switch (type) {
    case STORE_LIST:
      return {
        ...state,
        list: payload,
      };
    case UPDATE_LIST:
      return {
        ...state,
        list: [payload, ...state.list],
      };
    case TOGGLE_SHOW_ADD_MODAL:
      return {
        ...state,
        addModalIsOpen: !state.addModalIsOpen,
      };
    case TOGGLE_SHOW_EDIT_MODAL:
      return {
        ...state,
        updateModalIsOpen: !state.updateModalIsOpen,
      };
    case STORE_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: payload,
      };
    case UPDATE_ITEM:
      const { _id: updatedItemId } = payload,
        updatedItemIndex = state.list.findIndex(
          (item) => item._id === updatedItemId
        );
      state.list[updatedItemIndex] = payload;
      return {
        ...state,
      };
    case DELETE_ITEM:
      const deletedItemIndex = state.list.findIndex(
        (item) => item._id === payload
      );
      state.list.splice(deletedItemIndex, 1);
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default TodoReducer;
