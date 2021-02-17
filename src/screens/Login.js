function Login({ setIsLoggedIn }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setIsLoggedIn(true)}>Log in now!</button>
    </div>
  );
}
export default Login;
