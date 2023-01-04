import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  isAddNewIssue: false,
  currStatus: "",
  editContents: {
    title: "",
    date: "",
    status: "",
    author: "",
    content: "",
  },
  issues: [
    {
      title: "titlettittlelee",
      date: "2023",
      status: "시작전",
      author: "닷지강",
      content: "1",
      issueId: 121,
    },
    {
      title: "ffffffff",
      date: "2024",
      status: "진행중",
      author: "닷지강",
      content: "1",
      issueId: 122,
    },
    {
      title: "eeeeee",
      date: "2025",
      status: "완료",
      author: "닷지강",
      content: "1",
      issueId: 123,
    },
  ],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    addIssue: (state, action) => {
      state.issues.push({ ...action.payload });
    },
    removeIssue: (state, action) => {
      state.issues = state.issues.filter((el) => el.id !== action.payload.id);
    },
    updateIssues: (state, action) => {
      state.issues = action.payload;
    },
    toggleModal: (state, action) => {
      if (action.payload === "newIssue") {
        state.isAddNewIssue = true;
      } else {
        state.isAddNewIssue = false;
      }
      state.modalOpen = !state.modalOpen;
    },
    editContentsInput: (state, action) => {
      state.issues.push(action.payload);
      state.modalOpen = false;
    },
    changeIssueStatus: (state, action) => {
      state.currStatus = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  addIssue,
  removeIssue,
  updateIssues,
  toggleModal,
  editContentsInput,
  changeIssueStatus,
} = mainSlice.actions;

export default mainSlice.reducer;
