
const url = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'localhost:3000'

const defaultOptions:  RequestInit = {
    method: "GET"
}
const api = async (endpoint: string, options: RequestInit = {}) => {
    const res = await fetch(endpoint, {...defaultOptions})
    return await res.json()
}

export default api