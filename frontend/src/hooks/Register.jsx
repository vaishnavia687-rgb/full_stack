
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(3, "Name must have minimum of 3 letters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = registerSchema.safeParse(formData);

    if (result.success) {
      console.log(formData);
      alert("Registration Successful!");
    } else {
      alert(result.error.issues[0].message);
    }
  };

  return (
    <div>
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit}>

        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your name"
        />

        <br />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your Email"
        />

        <br />

        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter your password"
        />

        <br />

        <Button type="submit">Submit</Button>

      </form>
    </div>
  );
};

export default Register;
