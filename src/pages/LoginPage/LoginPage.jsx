import { useState } from "react"
const LoginPage = ({handleLogin}) => {
    
    const [loginUser, setLoginUser] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(loginUser)
    }

    const handleChange = (e) => {
        setLoginUser((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }


  return (
    <div className="LoginPage">
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange}/>
            <button type="submit"> log in </button>
        </form>
    </div>
  )
}
export default LoginPage