import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { sendEmailVerification } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FiMail, FiCheckCircle } from "react-icons/fi";

const VerifyEmail: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [checking, setChecking] = useState(false);

  // Function to check email verification status periodically
  useEffect(() => {
    if (!user){
        navigate("/auth");
        return;
    }

    const checkVerification = async () => {
      setChecking(true);
      await user.reload(); // Refresh user data
      if (user.emailVerified) {
        navigate("/dashboard"); // Redirect as soon as email is verified
      }
      setChecking(false);
    };

    const interval = setInterval(() => {
      checkVerification();
    }, 3000); // Check every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [user, navigate]);

  const handleResendEmail = async () => {
    if (user) {
      setResendLoading(true);
      try {
        await sendEmailVerification(user);
        setMessage("Verification email sent. Check your inbox!");
      } catch (error: any) {
        setMessage("Error sending email. Please try again.");
      } finally {
        setResendLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center transform transition-all hover:scale-105">
        <div className="flex justify-center mb-4">
          <FiMail className="text-blue-500 text-6xl" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900">Verify Your Email</h2>
        <p className="text-gray-600 mt-2 text-lg">
          A verification link has been sent to <br />
          <span className="font-semibold text-blue-600">{user?.email}</span>.  
          <br /> Please check your inbox and verify your email before proceeding.
        </p>

        <div className="flex flex-col items-center mt-4">
            <button
            onClick={handleResendEmail}
            disabled={resendLoading}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md text-lg font-medium shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
            {resendLoading ? "Sending..." : "Resend Verification Email"}
            </button>

            {message && (
            <div className="mt-4 flex items-center justify-center text-green-600 text-lg">
                <FiCheckCircle className="mr-2 text-xl" />
                {message}
            </div>
            )}
            <button
                onClick={logout}
                className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md font-medium shadow-md transition-transform transform hover:scale-105 hover:bg-red-600"
                >
                Logout
            </button>

        </div>


      </div>
    </div>
  );
};

export default VerifyEmail;
