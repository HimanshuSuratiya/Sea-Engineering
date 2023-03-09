import React from "react"
import axios from "axios"
const AuthUser = () => {

    const http = axios.create({
        baseURL: "http://69.49.235.253:8069/api/",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return (
        http
    )

}
export default AuthUser;