interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({
  label,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col text-white">
      <div className="flex">
        <label className="mb-1 font-medium">{label}</label>
      </div>
      <input
        className="bg-white/5 rounded-lg ring-1 ring-gray-700 px-3 py-2 focus:ring-gray-400 focus:outline-none hover:ring-gray-500 transition-all duration-300"
        {...props}
      />
    </div>
  );
}