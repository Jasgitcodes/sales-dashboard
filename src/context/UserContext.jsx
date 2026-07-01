import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadUsers = async () => {

            try {
                const res = await fetch("http://localhost:5000/users")

                const data = await res.json()
                setUsers(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        loadUsers()
    }, [])

    return (
        <UserContext.Provider value={{ users, loading, error }}>
            {children}
        </UserContext.Provider>
    )

}

export const useUsers = () => {
    return useContext(UserContext)
}