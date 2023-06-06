import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { jobPost } from "../../types/compnay";

export const createJobPost = createAsyncThunk("job", async (jobData: jobPost, { rejectWithValue }) => {
    try {
        const { data } = await API.post("/jobs", jobData)
        return true
    } catch (error: any) {
        return rejectWithValue(error.message || "Something went wrong")
    }
})
export const getJobPosts = createAsyncThunk("get-jobs", async (jobData, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/jobs")
        return data
    } catch (error: any) {
        return rejectWithValue(error.message || "Something went wrong")
    }
})