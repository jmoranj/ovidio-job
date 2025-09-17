import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4">
      <InputField label="Email" name="email" type="email" required />
      <InputField label="Password" name="password" type="password" required />

      <SubmitButton text="Enviar" />
    </form>
  );
}