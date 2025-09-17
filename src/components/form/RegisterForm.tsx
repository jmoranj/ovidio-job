import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default function FormComponent() {
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsError("As senhas não coincidem");
      return;
    }

    window.location.href = "/login";
  };

  return (
    <form className="flex w-full max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <InputField label="Name" name="name" type="text" required />

      <InputField label="Email" name="email" type="email" required />

      <InputField 
      label="Password" 
      name="password" 
      type="password" 
      required value={password} 
      onChange={(e) => setPassword(e.target.value)} />

      <InputField 
      label="Confirm Password" 
      name="confirmPassword" 
      type="password" 
      required value={confirmPassword} 
      onChange={(e) => setConfirmPassword(e.target.value)} />

      {isError && <p className="text-red-500">{isError}</p>}
      <SubmitButton text="Enviar" />
    </form>
  );
}