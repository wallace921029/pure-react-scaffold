import {useNavigate} from 'react-router-dom'

function LogIn() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/home')
  }

  return (
    <div>
      <h1>Log In</h1>

      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default LogIn
