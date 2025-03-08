// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   auth,
//   googleProvider,
//   signInWithPopup,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "../firebase";

// const AuthScreen: React.FC = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [emailSent, setEmailSent] = useState(false);
//   const [confirmation, setConfirmation] = useState<any>(null);
//   const [method, setMethod] = useState<"email" | "google" | "phone">("email");

//   // Email & Password Authentication
//   const handleAuth = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         if (!userCredential.user.emailVerified) {
//           alert("Please verify your email before logging in.");
//           return;
//         }
//         navigate("/dashboard");
//       } else {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         await sendEmailVerification(userCredential.user);
//         setEmailSent(true);
//       }
//     } catch (error: any) {
//       alert(error.message);
//       console.error(error.message);
//     }
//   };

//   // Google Authentication
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       navigate("/dashboard");
//     } catch (error: any) {
//       console.error(error.message);
//     }
//   };

//   // Phone Authentication
//   const sendOtp = async () => {
//     try {
//       if (!phone) {
//         alert("Please enter a valid phone number.");
//         return;
//       }
//       const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
//         size: "invisible",
//       });
//       const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
//       setConfirmation(confirmationResult);
//       alert("OTP Sent! Please check your phone.");
//     } catch (error: any) {
//       alert(error.message);
//       console.error(error.message);
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       if (!confirmation) {
//         alert("Please request an OTP first.");
//         return;
//       }
//       await confirmation.confirm(otp);
//       alert("Phone verification successful!");
//       navigate("/dashboard");
//     } catch (error: any) {
//       alert("Invalid OTP, please try again.");
//       console.error(error.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-xl w-96">
//         <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? "Login" : "Sign Up"}</h2>

//         {/* Authentication Method Selection */}
//         <div className="flex justify-center gap-4 mb-4">
//           <button className={`px-4 py-2 rounded ${method === "email" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setMethod("email")}>
//             Email
//           </button>
//           <button className={`px-4 py-2 rounded ${method === "google" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setMethod("google")}>
//             Google
//           </button>
//           <button className={`px-4 py-2 rounded ${method === "phone" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setMethod("phone")}>
//             Phone
//           </button>
//         </div>

//         {/* Email Authentication */}
//         {method === "email" && (
//           emailSent ? (
//             <div className="text-center">
//               <p className="text-green-500 font-semibold">Verification email sent!</p>
//               <p className="text-sm text-gray-500">Check your inbox and verify your email before logging in.</p>
//             </div>
//           ) : (
//             <form onSubmit={handleAuth} className="space-y-4">
//               <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded" />
//               <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded" />
//               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">{isLogin ? "Login" : "Sign Up"}</button>
//             </form>
//           )
//         )}

//         {/* Google Authentication */}
//         {method === "google" && (
//           <button onClick={handleGoogleSignIn} className="w-full bg-red-500 text-white py-2 rounded mt-4">
//             Sign in with Google
//           </button>
//         )}

//         {/* Phone Authentication */}
//         {method === "phone" && (
//           <div className="space-y-4">
//             <input type="text" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 border rounded" />
//             <button onClick={sendOtp} className="w-full bg-blue-500 text-white py-2 rounded">Send OTP</button>
//             <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full px-4 py-2 border rounded" />
//             <button onClick={verifyOtp} className="w-full bg-green-500 text-white py-2 rounded">Verify OTP</button>
//             <div id="recaptcha-container"></div>
//           </div>
//         )}

//         <button onClick={() => setIsLogin(!isLogin)} className="w-full text-blue-500 mt-4">
//           {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthScreen;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,  sendEmailVerification, } from "../firebase";

const AuthScreen: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [emailSent, setEmailSent] = useState(false);


  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        if (!userCredential.user.emailVerified) {
          alert("Please verify your email before logging in.");
          return;
        }
        navigate("/dashboard");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        setEmailSent(true);
      }
    } catch (error: any) {
      alert(error.message); 
      console.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? "Login" : "Sign Up"}</h2>

        {emailSent ? (
          <div className="text-center">
            <p className="text-green-500 font-semibold">Verification email sent!</p>
            <p className="text-sm text-gray-500">Check your inbox and verify your email before logging in.</p>
          </div>
        ) : (
          <form onSubmit={handleAuth} className="space-y-4">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded" />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
        )}

        <button onClick={handleGoogleSignIn} className="w-full bg-red-500 text-white py-2 rounded mt-4">Sign in with Google</button>

        <button onClick={() => setIsLogin(!isLogin)} className="w-full text-blue-500 mt-4">{isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}</button>
      </div>
    </div>
  );
};

export default AuthScreen;