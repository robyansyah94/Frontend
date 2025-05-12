export default function Login() {
  return (
    <>
      <h1 className="title">Login To Your Account</h1>

      <form className="w-1/2 mx-auto space-y-6">
        <div>
          <input type="text" placeholder="Name" />
        </div>

        <div>
          <input type="text" placeholder="Email" />
        </div>

        <div>
          <input type="password" placeholder="Password" />
        </div>

        <div>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <button className="primary-btn">Register</button>
      </form>
    </>
  );
}
