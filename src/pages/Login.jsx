import { TypeAnimation } from "react-type-animation";
import img from "../assets/img.png";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const {signInWithGoogle,currentUser} = UserAuth();
  console.log(currentUser);

  const handleLogin = async ()=>{
      // implement sign in
      try{
        await signInWithGoogle();
      }catch(error){
        console.log(error)
      }
  }
    return (
    <div className="flex h-screen">
      {/* pics */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
          {/* <h4 className="text-white font-semibold text-3xl ">Hello World</h4> */}
          <TypeAnimation
        sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome back to social chatapp',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Pick Up From just where you left',
        1000,
        'Developed by NIIT React Students',
        1000,
        'Meet users from different part',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3em', display: 'inline-block', fontWeight: 'bold' }}
      repeat={Infinity}
    />
        </div>
      </div>

      {/* Other half of the screen */}
      <div className="flex w-1/2 items-center justify-center bg-amber-100">
        <div className="max-w-md w-full p-8 bg-white rounded lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome back
            <span className="text-amber-400"> Buddy!</span>
          </h2>

          <div className="space-y-4">
            {/* social Login buttons */}
            <button onClick={handleLogin} className="w-full bg-red-400 rounded-full shadow-lg hover:bg-red-200">Login with Google</button>
            <button className="w-full bg-blue-400 rounded-full shadow-lg hover:bg-blue-200">Login with Facebook</button>
            <button className="w-full bg-black rounded-full shadow-lg hover:bg-gray-700 text-white">Login with Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
