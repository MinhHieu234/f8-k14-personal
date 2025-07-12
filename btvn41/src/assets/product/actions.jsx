import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "./constants.jsx";

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product,
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});