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
    issueId: -1,
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
      console.log(action.payload);
      state.issues = state.issues.filter((el) => el.issueId !== action.payload);
      state.modalOpen = false;
    },
    updateIssues: (state, action) => {
      state.issues = action.payload;
    },
    toggleModal: (state, action) => {
      if (action.payload === "newIssue") {
        state.isAddNewIssue = true;
      } else {
        state.isAddNewIssue = false;
        console.log(action.payload);
        const targetIssue = state.issues.find(
          (el) => el.issueId === action.payload
        );
        state.editContents = { ...targetIssue };
      }
      state.modalOpen = !state.modalOpen;
    },
    editContentsInput: (state, action) => {
      state.issues.push(action.payload);
      state.modalOpen = false;
    },
    changeIssueStatus: (state, action) => {
      console.log(action.payload);
      state.currStatus = action.payload;
      state.editContents.status = action.payload;
    },
    updatIssueContents: (state, action) => {
      console.log(action.payload);
      state.issues = state.issues.map((el) =>
        el.issueId === action.payload.issueId
          ? (el = { ...el, ...action.payload })
          : el
      );
      state.modalOpen = false;
    },
    syncData: (state, action) => {
      state.issues = JSON.parse(localStorage.getItem("issues"));
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
  updatIssueContents,
  syncData,
} = mainSlice.actions;

export default mainSlice.reducer;
