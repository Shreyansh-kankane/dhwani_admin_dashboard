import { auth, signOut } from "../firebase";

const Logout: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return <button onClick={handleLogout}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
  >Logout</button>;
};

export default Logout;
