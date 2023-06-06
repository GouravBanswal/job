import { createSlice } from "@reduxjs/toolkit"
import { createJobPost, getJobPosts } from "../actions/companyActions"
import { jobPost } from "../../types/compnay"
type CompanySliceType = {
    loading?: boolean,
    jobAdded?: boolean,
    update?: boolean,
    delete?: boolean,
    error?: string,
    jobs?: [jobPost]

}
const initialState: CompanySliceType = {}
const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createJobPost.pending, (state) => {
                state.loading = true
            })
            .addCase(createJobPost.fulfilled, (state) => {
                state.loading = false
                state.jobAdded = true
            })
            .addCase(createJobPost.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload as string
            })


            .addCase(getJobPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getJobPosts.fulfilled, (state, { payload }) => {
                state.loading = false
                state.jobs = payload
            })
            .addCase(getJobPosts.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload as string
            })
    }
})

export default companySlice.reducer