// client/src/components/HomeButton.tsx
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="text-white text-sm sm:text-base md:text-lg lg:text-lg font-bold bg-yellow-500 hover:bg-yellow-600 p-[0.6vh] rounded-lg shadow-lg transition duration-300 ease-in-out border-2"
      onClick={() => navigate("/")}
    >
      Home
    </button>
  );
};

export default HomeButton;
