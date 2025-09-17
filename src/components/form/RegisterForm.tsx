import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default function FormComponent() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  return (
    <form className="flex w-full max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <InputField label="Name" name="name" type="text" required />
      <InputField label="Email" name="email" type="email" required />
      <InputField label="Password" name="password" type="password" required />
      <InputField label="Confirm Password" name="confirmPassword" type="password" required />

      <SubmitButton text="Enviar"/>
    </form>
  );
}