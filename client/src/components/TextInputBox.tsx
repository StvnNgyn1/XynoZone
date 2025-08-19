// client/src/components/TextInputBox.tsx

interface TextInputBoxProps {
    placeholder?: string;
}
const TextInputBox: React.FC<TextInputBoxProps> = ({placeholder = "Input text"}) => {
    return (
        <input
            type="text"
            className="w-4/5 p-1 bg-white text-black text-sm font-bold border-2 focus:outline-none rounded-lg shadow-lg focus:border-blue-500 transition duration-300 ease-in-out"
            placeholder={placeholder}
        />
    );
};

export default TextInputBox;