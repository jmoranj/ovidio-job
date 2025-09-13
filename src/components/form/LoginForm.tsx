import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default function LoginForm() {
  return (
    <form className="flex w-full max-w-md flex-col gap-4">
      <InputField label="Email" name="email" type="email" required />
      <InputField label="Password" name="password" type="password" required />

      <SubmitButton name="Enviar" />
    </form>
  );
}