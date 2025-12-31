
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "ui",
  initialState: { sidebarCollapsed: false },
  reducers: {
    toggleSidebar(s) { s.sidebarCollapsed = !s.sidebarCollapsed; }
  }
});
export const { toggleSidebar } = slice.actions;
export default slice.reducer;
