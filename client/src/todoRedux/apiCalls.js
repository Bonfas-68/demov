import axios from "axios"
import {logout, login} from "./userSlice"
import {fetchTodos, update,create,deleteTodo} from "./todoSlice"
import { apiDomain } from "../utils/utils"


export const loginUser = async (dispatch, user) => {
  try {
    const { data } = await axios.post(`${apiDomain}/auth/login`, user);
    dispatch(login(data));
    alert("logged in succesfully");
    localStorage.setItem("user",JSON.stringify(res.data))

  } catch (err) {
    console.log(err);
  }
};
export const logoutUser = async (dispatch) => {
  dispatch(logout());
};

export const getTodos = async (dispatch, user) => {
  try {
    const { data } = await axios.get(`${apiDomain}/todos`, {
      headers: { authorization: `${user.token}` },
    });
    dispatch(fetchTodos(data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (id, dispatch, user) => {
  console.log(id, "val");
  try {
    await axios.delete(`${apiDomain}/todo/${id}`, {
      headers: { authorization: `${user.token}` },
    });
    dispatch(deleteTodo(id));
  } catch (err) {
    console.log(err)
  }
};

export const addTodo = async (dispatch, data) => {
  try {
    await axios.post(`${apiDomain}/todos`, data);
    dispatch(create(data));
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (todo, id, dispatch) => {
  console.log(todo, id, "all products");
 
  try {
    const { data } = await axios.put(`${apiDomain}/todo/${id}`, todo);
    dispatch(update({ todo, id }));
  } catch (err) {
    console.log(err);
  }
};
