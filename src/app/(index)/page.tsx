import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div
      className="
        flex 
        h-screen
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      "
    >
      <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          className="
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
        <p className="text-center text-gray-800">It&apos;s good to talk</p>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;

// export default function Home() {
//   return (
//     <main className="flex flex-col justify-center items-center min-h-screen">
//       <div className={styles.container}>
//         <h2>Login</h2>
//         <form>
//           <div className={styles.input}>
//             <input type="text" name="" required />
//             <label>Username</label>
//           </div>
//           <div className={styles.input}>
//             <input type="password" name="" required />
//             <label>Password</label>
//           </div>

//           <a href="#">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             Login
//           </a>
//         </form>
//       </div>
//     </main>
//   );
// }
