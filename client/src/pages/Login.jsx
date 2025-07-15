import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const {signInUser, googleSignIn, setUser} = use(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  // Login with Email and Password
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    signInUser(email, password)
    .then(res => {
      console.log(res.user);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch(err => {
      console.log(err);
    })
  };

  // Login with Google
  const handleGoogleLogin = () => {
    googleSignIn()
    .then(res => {
      setUser(res?.user);
      Swal.fire({
        icon: "success",
        title: "Login Google",
        text: "Your account has been successfully logedin!",
      });
      navigate(location?.state || "/");
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex justify-center items-center">
      <div className="w-full mx-5 md:mx-auto max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">or</div>

        <button onClick={handleGoogleLogin} className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer">
          Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-indigo-600 hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
