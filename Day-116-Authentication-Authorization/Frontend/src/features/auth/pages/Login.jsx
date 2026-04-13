import FormGroup from "../components/FormGroup"

const Login = () => {
  return (
    <div>
        <form>
      <FormGroup label='Email/Username' placeholder='Enter Email or Username' />
      <FormGroup label='Password' placeholder='Enter Password' />
        </form>
    </div>
  )
}

export default Login
