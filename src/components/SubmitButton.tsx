export default function SubmitButton({
  name
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className="text-black rounded-lg bg-[#D0D1D1] ring-1 ring-gray-700 px-4 py-2 font-semibold hover:shadow-[0_0_200px_#61DAFB] transition-all duration-300 disabled:opacity-50"
    >
      {name}
    </button>
  );
}