"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'

function Login() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    try {
      const response : any = axios.post("http://localhost:4000/login", {email : form.email, password: form.password});

      if(response.status == 200) {
          alert("Form Submitted")
      }

    } catch (error) {
      alert("Something went wrong");
      console.error("Error occured in login form: " , error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setForm({ ...form, [id]: value });

    console.log(form);
  };

  return (
    <>
      <center>
        <form onSubmit={onSubmitHandler}>
          <input
            id="email"
            value={form.email}
            type="email"
            onChange={handleChange}
            placeholder="Email"
            className="bg-black"
          />
          <br /> <br />
          <input
            id="password"
            value={form.password}
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="bg-black"
          />
          <br />
          <input type="submit" />
        </form>
      </center>
    </>
  );
}

export default Login;
