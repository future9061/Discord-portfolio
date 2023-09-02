import { configureStore, createSlice } from "@reduxjs/toolkit";
import SkillData from "./SkillData";

//테마모드 state
const themSlice = createSlice({
  name: "theme",
  initialState: "basic",
  reducers: {
    changeTheme: (state, action) => action.payload,
  }
});

export const { changeTheme } = themSlice.actions;

//스킬챗봇 state 
const data = { ...SkillData }
const chatBotSlice = createSlice({
  name: "chatbot",
  initialState: data[0].content,
  reducers: {
    changeTalk: (state, action) => action.payload
  }
})

export const { changeTalk } = chatBotSlice.actions;

//페이지 이동 state
const pageSlice = createSlice({
  name: "pageMove",
  initialState: "home",
  reducers: {
    pathMove: (state, action) => action.payload
  }
})

export const { pathMove } = pageSlice.actions;

//프로젝트 버튼 state
const projectBtn = createSlice({
  name: "projectBtn",
  initialState: "",
  reducers: {
    handleBtn: (state, action) => action.payload
  }
})

export const { handleBtn } = projectBtn.actions;

//슬라이드 메뉴 state
const slideMenuSlice = createSlice({
  name: "slideMenu",
  initialState: false,
  reducers: {
    slideToggle:
      (state, action) => action.payload
  }
})

export const { slideToggle } = slideMenuSlice.actions

export default configureStore({
  reducer: {
    themSlice: themSlice.reducer,
    chatBotSlice: chatBotSlice.reducer,
    pageSlice: pageSlice.reducer,
    projectBtn: projectBtn.reducer,
    slideMenuSlice: slideMenuSlice.reducer
  }
})