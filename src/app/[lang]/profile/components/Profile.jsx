// "use client";
// import { useEffect, useState } from "react";
import {
  SignInGoogleBtn,
  SignInGithubBtn,
} from "../../../../components/SignInBtn";
import LogoutBtn from "./LogoutBtn";
// import { useRouter } from "next/navigation";

export default function Profile({ dataLang, session }) {
  // const router = useRouter();
  // const [isRender, setIsRender] = useState(false);
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/auth");
  //   } else {
  //     setIsRender(true);
  //   }
  // }, [session]);
  // if (!isRender) {
  //   return;
  // }
  return (
    <div className="flex flex-col gap-y-4">
      <h2>{session?.name}</h2>
      <h2>{session?.email}</h2>
      <>
        {session?.provider === "github" ? (
          <div className="min-h-[50px]">
            <SignInGoogleBtn />
          </div>
        ) : session?.provider === undefined ? (
          <>
            <div className="min-h-[50px]">
              <SignInGoogleBtn />
            </div>
            <div className="min-h-[50px]">
              <SignInGithubBtn />
            </div>
          </>
        ) : (
          <div className="min-h-[50px]">
            <SignInGithubBtn />
          </div>
        )}
      </>
      <LogoutBtn dataLang={dataLang} />
    </div>
  );
}
