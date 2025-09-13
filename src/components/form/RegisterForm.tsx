import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default function FormComponent() {
  return (
    <form className="flex w-full max-w-md flex-col gap-4">
      <InputField label="Name" name="name" type="text" required />
      <InputField label="Email" name="email" type="email" required />
      <InputField label="Password" name="password" type="password" required />
      <InputField label="Confirm Password" name="confirmPassword" type="password" required />

      <SubmitButton name="Enviar" />
    </form>
  );
}