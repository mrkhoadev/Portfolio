"use client";
// import { auth } from "@/redux/services/auth";
// import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { signIn, useSession } from "next-auth/react";
import { SignInGithubBtn, SignInGoogleBtn } from "@/components/SignInBtn";

const AuthForm = ({ lang, dataLang, session }) => {
  // const warningRef = useRef(null);
  // const [passwordType, setPasswordType] = useState(false);
  const [isRender, setIsRender] = useState(false);

  // const [login, resultLogin] = auth.useLoginMutation();
  // const [register, resultRegister] = auth.useRegisterMutation();

  // const router = useRouter();
  // const { data: session } = useSession();

  // const {
  //   isError: errorLogin,
  //   isLoading: loadingLogin,
  //   isSuccess: successLogin,
  // } = resultLogin;
  // const {
  //   isError: errorRegister,
  //   isLoading: loadingRegister,
  //   isSuccess: successRegister,
  // } = resultRegister;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const username = e.target.username.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   let textWarning = "";
  //   if (!username || !email || !password) {
  //     textWarning = dataLang.warning.shortcoming;
  //   } else if (password.length < 8) {
  //     textWarning = "Mật khẩu tối thiểu 8 ký tự!";
  //   } else {
  //     login({ email, password, name: username });
  //   }
  //   warningRef.current.textContent = textWarning;
  // };
  // const handleLogSocial = () => {
  //   signIn();
  // };
  // useEffect(() => {
  //   if (errorLogin) {
  //     if (resultLogin?.error?.data.message === "Tài khoản không tồn tại") {
  //       register(resultLogin.originalArgs);
  //     } else {
  //       warningRef.current.textContent = dataLang.warning.wrong;
  //     }
  //   }
  //   if (errorRegister) {
  //     warningRef.current.textContent = resultRegister?.error?.data.message;
  //   }
  // }, [errorRegister, errorLogin]);
  // useEffect(() => {
  //   const d = new Date();
  //   d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  //   const expires = "expires=" + d.toUTCString();

  //   if (successLogin || successRegister) {
  //     const userData = {
  //       name: successLogin
  //         ? resultLogin.data.data.name
  //         : resultRegister.originalArgs.name,
  //       email: successLogin
  //         ? resultLogin.data.data.email
  //         : resultRegister.originalArgs.email,
  //     };

  //     const jsonString = JSON.stringify(userData);
  //     document.cookie = "userData=" + jsonString + ";" + expires + ";path=/";
  //   }
  // }, [successLogin, successRegister]);
  // useLayoutEffect(() => {
  //   if (getCookie("userData") || session) {
  //     router.push("/profile", { scroll: false });
  //   } else {
  //     setIsRender(true);
  //   }
  // }, [session]);
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/profile");
    } else {
      setIsRender(true);
    }
  }, [session]);
  if (!isRender) {
    return;
  }
  return (
    <>
      <div className="min-h-[50px]">
        <SignInGoogleBtn />
      </div>
      <div className="min-h-[50px]">
        <SignInGithubBtn />
      </div>
    </>
    // <form
    //   className="dark:bg-dark-200 dark:border-[transparent] py-3 px-4 border-2 border-[#ddd] bg-[#fff] rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] flex flex-col gap-y-3"
    //   onSubmit={handleSubmit}
    // >
    //   <h2 className="text-3xl font-medium mt-2 text-center mb-3 text-100">
    //     {dataLang.button.loginBtn}
    //   </h2>
    //   <div className="border-2 border-[#ddd] rounded-lg py-1 px-2 focus-within:border-blue-500">
    //     <label
    //       htmlFor="username"
    //       className="select-none text-light-200 dark:text-dark-200 block"
    //     >
    //       Username
    //     </label>
    //     <input
    //       type="text"
    //       name="username"
    //       id="username"
    //       className="block outline-none w-[300px] bg-inherit"
    //       placeholder="Tên đăng nhập của bạn"
    //       // autoComplete="off"
    //     />
    //   </div>
    //   <div className="border-2 border-[#ddd] rounded-lg py-1 px-2 focus-within:border-blue-500">
    //     <label
    //       htmlFor="email"
    //       className="select-none text-light-200 dark:text-dark-200 block"
    //     >
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       name="email"
    //       id="email"
    //       className="block outline-none w-[300px] bg-inherit"
    //       placeholder="Email của bạn"
    //     />
    //   </div>
    //   <div className="border-2 border-[#ddd] rounded-lg py-1 px-2 relative focus-within:border-blue-500">
    //     <label
    //       htmlFor="password"
    //       className="select-none text-light-200 dark:text-dark-200 block"
    //     >
    //       Password
    //     </label>
    //     <input
    //       type={passwordType ? "text" : "password"}
    //       name="password"
    //       id="password"
    //       className="block outline-none w-[300px] bg-inherit"
    //       placeholder="Mật khẩu của bạn"
    //     />
    //     <span
    //       onClick={() => setPasswordType(!passwordType)}
    //       className=" absolute right-2 top-[50%] text-xl text-light-200 cursor-pointer dark:text-dark-200"
    //     >
    //       <i className="bx bxs-show"></i>
    //     </span>
    //   </div>
    //   <button
    //     className="border-2 rounded-lg py-1.5 border-blue-500 text-[#4380e1] hover:bg-blue-500 hover:text-[#fff] transition-background"
    //     disabled={loadingLogin || loadingRegister ? true : false}
    //   >
    //     {loadingLogin || loadingRegister
    //       ? dataLang.loading
    //       : dataLang.button.loginBtn}
    //   </button>
    //   <button
    //     className="border-2 rounded-lg py-1.5 border-green-400 text-[#43e187] hover:bg-green-500 hover:text-[#fff] transition-background"
    //     disabled={loadingLogin || loadingRegister ? true : false}
    //     onClick={handleLogSocial}
    //     type="button"
    //   >
    //     {loadingLogin || loadingRegister
    //       ? dataLang.loading
    //       : dataLang.button.logSocial}
    //   </button>
    //   <span className="text-[red]" ref={warningRef}></span>
    // </form>
  );
};

export default AuthForm;
