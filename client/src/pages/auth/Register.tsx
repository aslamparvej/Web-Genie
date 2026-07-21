import { SignUp } from "@clerk/react";

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-5.1rem)] flex items-center justify-center">
         <SignUp
          routing="path"
          path="/register"
          signInUrl="/login"
          afterSignUpUrl="/dashboard"
        />
    </div>
  )
}

export default Register;
