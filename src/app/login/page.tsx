'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
const page = () => {

  const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    // const {setIsAuth} = useContext (authContext)
    const router = useRouter ()
    const handleSignIn = async ()=>{
    
        const signInData = await signIn ('credentials', {
            email:email,
            password:password,
            redirect:false
        })
        if (signInData!.error)
          toast.error (`Error: ${signInData!.error}`)
        else {
                // setIsAuth! (true)
                toast.success (`Welcome back`)
                router.refresh ()
                router.push ('/')
        }
    }
  return (
    <div className="flex min-w-[450px] max-w-[550px] flex-col justify-center gap-4 rounded-md">
      <h1>Login to your account</h1>
      <form onSubmit={(e)=>{
            e.preventDefault ()
            handleSignIn ()
        }}>
      <div className="flex flex-col gap-3 ">
        <div className="gap-2 flex flex-col">
          <label htmlFor="email">Your Email</label>
          <input type="email" id='email' className="input-regular"  placeholder="Your email" onChange={(e)=> setEmail (e.target.value)}/>
        </div>
        <div className="gap-2 flex flex-col">
          <label htmlFor="password">Your Password</label>
          <input type="password" id="email" placeholder="Your password" className="input-regular"  onChange={(e)=> setPassword (e.target.value)}/>
        </div>
        <button className="btn-primary" type='submit'>Login</button>
      </div>
      </form>
    </div>
  );
};


export default page