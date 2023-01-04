import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  mordalOpen: false,
  issues: [
    {
      title: "titlettittlelee",
      date: "2023",
      status: "시작전",
      author: "닷지강",
    },
    {
      title: "ffffffff",
      date: "2024",
      status: "진행중",
      author: "닷지강",
    },
    {
      title: "eeeeee",
      date: "2025",
      status: "완료",
      author: "닷지강",
    },
  ],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    addIssue: (state, action) => {
      state.issues.push(...action.payload);
    },
    removeIssue: (state, action) => {
      state.issues = state.issues.filter((el) => el.id !== action.payload.id);
    },
    updateIssues: (state, action) => {
      state.issues = action.payload;
    },
  },
  extraReducers: {},
});

export const { addIssue, removeIssue, updateIssues } = mainSlice.actions;

export default mainSlice.reducer;
