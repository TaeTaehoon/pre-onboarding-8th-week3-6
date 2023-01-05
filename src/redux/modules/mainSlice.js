import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  isAddNewIssue: false,
  isLoading: false,
  editContents: {
    title: "",
    date: "",
    status: "",
    author: "",
    content: "",
    issueId: -1,
  },
  authors: ["강태훈", "강머훈", "강태식", "닷지마렵ㄴ"],
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
      state.isLoading = true;
      state.issues = state.issues.filter((el) => el.issueId !== action.payload);
      state.modalOpen = false;
      state.isLoading = false;
    },
    updateIssues: (state, action) => {
      state.isLoading = true;
      state.issues = action.payload;
      state.isLoading = false;
    },
    toggleModal: (state, action) => {
      state.isLoading = true;
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
      state.isLoading = false;
    },
    editContentsInput: (state, action) => {
      state.isLoading = true;
      state.issues.push(action.payload);
      state.modalOpen = false;
      state.isLoading = false;
    },
    changeIssueStatus: (state, action) => {
      state.isLoading = true;
      console.log(action.payload);
      state.editContents.status = action.payload;
      state.isLoading = false;
    },
    updatIssueContents: (state, action) => {
      state.isLoading = true;
      console.log(action.payload);
      state.issues = state.issues.map((el) =>
        el.issueId === action.payload.issueId
          ? (el = { ...el, ...action.payload })
          : el
      );
      state.modalOpen = false;
      state.isLoading = false;
    },
    syncData: (state, action) => {
      state.isLoading = true;
      state.issues = JSON.parse(localStorage.getItem("issues"));
      state.isLoading = false;
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
