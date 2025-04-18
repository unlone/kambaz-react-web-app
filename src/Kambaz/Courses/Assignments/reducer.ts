import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {
        title: "New Assignment",
        description: "",
        points: 100,
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: ""
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments.push({
                ...action.payload,
                _id: new Date().getTime().toString()
            });
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                assignment => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(assignment => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                }
                return assignment;
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        }
    }
});

export const {
    setAssignments,
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer; 