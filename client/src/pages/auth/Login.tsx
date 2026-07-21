import { SignIn } from "@clerk/react";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-5.1rem)] flex items-center justify-center">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          fallbackRedirectUrl="/"
        />
    </div>
  );
};

export default Login;
