import { useNavigate } from "react-router-dom";

const NeanderthalsButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="text-white text-sm sm:text-base md:text-lg lg:text-lg font-bold bg-red-500 hover:bg-red-600 p-[0.6vh] rounded-lg shadow-lg transition duration-300 ease-in-out border-2"
      onClick={() => navigate("/neanderthals")}
    >
      Neanderthals
    </button>
  );
};

export default NeanderthalsButton;
