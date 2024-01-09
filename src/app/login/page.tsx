const page = () => {
  return (
    <div className="flex min-w-[450px] max-w-[550px] flex-col justify-center gap-4 rounded-md">
      <h1>Login to your account</h1>
      <div className="flex flex-col gap-3 ">
        <div className="gap-2 flex flex-col">
          <label htmlFor="email">Your Email</label>
          <input type="email" id='email' className="input-regular"  placeholder="Your email"/>
        </div>
        <div className="gap-2 flex flex-col">
          <label htmlFor="password">Your Password</label>
          <input type="password" id="email" placeholder="Your password" className="input-regular" />
        </div>
        <button className="btn-primary">Login</button>
      </div>
    </div>
  );
};


export default page