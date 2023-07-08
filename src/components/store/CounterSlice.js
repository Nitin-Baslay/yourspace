import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  //   initialState: { clr: "rgba(245, 245, 245, 0.521)" },
  initialState: {
    color1: "rgba(245, 245, 245, 0.521)",
    color2: "#9a9b9c00",
    color3: "black",
  },
  reducers: {
    colorHandler: (state, action) => {
      if (state.color1 == "rgba(245, 245, 245, 0.521)") {
        state.color1 = "black";
      } else if (state.color1 == "black") {
        state.color1 = "rgba(245, 245, 245, 0.521)";
      }
      if (state.color2 == "#9a9b9c00") {
        state.color2 = "black";
      } else if (state.color2 == "black") {
        state.color2 = "#9a9b9c00";
      }
      if (state.color3 == "black") {
        state.color3 = "white";
      } else if (state.color3 == "white") {
        state.color3 = "black";
      }
    },
  },
});
export const counterAction = CounterSlice.actions;
export default CounterSlice.reducer;
