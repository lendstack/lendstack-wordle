'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import z from "zod";
import toast from "react-hot-toast";

const requestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signUp = async () => {
    try {
      const req = requestSchema.parse({
        name: username,
        email: email,
        password: password,
      });
      const res = await axios.post("/api/user", JSON.stringify(req));
      if (res.status === 201) {
        toast.success(`User signup successfully`);
        router.push("/login");
      }
    } catch (error: any) {
      toast.error (`Error : signup faild`)
    }
  };
  return (
   <main className='flex justify-center items-center w-full h-full'>
     <div className="flex min-w-[450px] max-w-[550px] flex-col justify-center gap-4 rounded-md">
      <h1>Create New Acount</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp();
        }}
      >
        <div className="flex flex-col gap-3 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Your Username</label>
            <input
              type="text"
              id="username"
              className="input-regular"
              placeholder="Your Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="input-regular"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="email"
              placeholder="Your password"
              className="input-regular"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
   </main>
  );
};

export default page;
