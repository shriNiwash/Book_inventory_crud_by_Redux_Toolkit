import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://my-web-crud.herokuapp.com/data").then((res) =>
    res.json()
  );
});

export const deletePost = createAsyncThunk("posts/delete", async (id) => {
  console.log(id);
  return fetch(`https://my-web-crud.herokuapp.com/delete/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
});

export const insertPost = createAsyncThunk("posts/insert", async (data) => {
  fetch("https://my-web-crud.herokuapp.com/insert", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
});

export const getPostById = createAsyncThunk("post/:id", async (id) => {
  console.log(id);
  return fetch(`https://my-web-crud.herokuapp.com/getData/${id}`).then((res) =>
    res.json()
  );
});

export const updatePost = createAsyncThunk("post/update", async (datas) => {
  const id = datas.id;
  const name = datas.name;
  const sold = datas.sold;
  const updateData = { name: name, sold: sold };
  return fetch(`https://my-web-crud.herokuapp.com/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
});

const initialState = { users: [], user: [] };

export const couterSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.users = [action.payload];
    },
    [deletePost.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    [getPostById.fulfilled]: (state, action) => {
      state.user = [action.payload];
    },
    [updatePost.fulfilled]: (state, action) => {
      // const index = state.users.findIndex(users=>users.id===action.payload.id);
      // state.users[index]={
      //     ...state.users[index],
      //     ...action.payload
      // }
      state.users = action.payload;
    },
  },
});

export default couterSlice.reducer;
