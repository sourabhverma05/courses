import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item")) : [],
}
const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        enroll: (state, action) => {
            const itemIndex = state.courses.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                alert("Already enrolled !")
                state.courses[itemIndex]
            }
            else {
                const tempCourse = { ...action.payload };
                state.courses.push(tempCourse)
                localStorage.setItem("item", JSON.stringify(state.courses))
            }

        }

    }
})

export const { enroll } = courseSlice.actions;
export default courseSlice.reducer;