export default function Home(): JSX.Element {
  return (
    <>
      <header className="text-white border-b border-slate-700 flex items-center  h-20">
        <h1 className="ml-8 text-3xl  font-semiboldpy-4 ">Payment</h1>
      </header>
      <main className=" px-8 py-8 border-2 rounded-lg border-slate-700   max-w-fit mx-auto mt-16 text-white flex-1">
        <h2 className="text-4xl font-bold">Welcome to payment</h2>
        <p className="text-lg mt-2">
          Sign in to your account or create a new one to get started
        </p>
        <div className="mt-16">
          <div className="bg-gray-400   gap-3 p-1 rounded-lg">
            <button className="w-2/4 h-9 bg-white text-black rounded-md">
              Login
            </button>
            <button className="w-2/4 h-9 text-black rounded-md">Sign In</button>
          </div>
          <form className="mt-8">
            <p>Email</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600  p-2"
              placeholder="myemail@.com"
              type="text"
            />
            <p className="mt-4">Password</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600 p-2"
              placeholder="Your password"
              type="password"
            />
            <button className="mt-4 w-full text-center bg-green-600 h-10 rounded-md hover:bg-green-700">
              SEND
            </button>
          </form>
        </div>
      </main>
      <footer className=" flex justify-between items-center p-4 text-white border-slate-700 border-t fixed bottom-0 h-16 w-full">
        <p>&copy;{new Date().getFullYear()} Payment. All rights reserved.</p>
        <div className="flex gap-10" >
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <a href="">Contact Support</a>
        </div>
      </footer>
    </>
  );
}
