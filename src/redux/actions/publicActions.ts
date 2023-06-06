import { createAsyncThunk } from "@reduxjs/toolkit"
import API from "../api"
import { UserData } from "../../types/public"
export const register = createAsyncThunk("public/register", async (userData: UserData, { rejectWithValue }) => {
    try {
        await API.post("/users", userData)
        return true
    } catch (error: any) {
        return rejectWithValue(error.message || "something went wrong")
    }
})
export const login = createAsyncThunk("public/login", async (userData: { email: string, password: string, type: string }, { rejectWithValue }) => {
    try {
        const { data } = await API.get(`/${userData.type}`, {
            params: {
                email: userData.email,
                password: userData.password
            }
        })

        if (data.length === 0) {
            return rejectWithValue("Invalid Email Or Password")
        }
        return {
            id: data[0].id,
            name: data[0].name,
            email: data[0].email,
        }
    } catch (error: any) {
        return rejectWithValue(error.message || "something went wrong")
    }
})
export const registerCompany = createAsyncThunk("public/company-register", async (userData: UserData, { rejectWithValue }) => {
    try {
        await API.post("/company", userData)
        return true
    } catch (error: any) {
        return rejectWithValue(error.message || "something went wrong")
    }
})

