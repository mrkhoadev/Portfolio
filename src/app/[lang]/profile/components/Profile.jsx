import {
  SignInGoogleBtn,
  SignInGithubBtn,
} from "../../../../components/SignInBtn";
import LogoutBtn from "./LogoutBtn";

export default function Profile({ dataLang, session }) {
  return (
    <div className="flex flex-col gap-y-4">
      <h2>{session.name}</h2>
      <h2>{session.email}</h2>
      <>
        {session?.provider === "github" ? (
          <div>
            <SignInGoogleBtn />
          </div>
        ) : session?.provider === undefined ? (
          <>
            <div>
              <SignInGoogleBtn />
            </div>
            <div>
              <SignInGithubBtn />
            </div>
          </>
        ) : (
          <div>
            <SignInGithubBtn />
          </div>
        )}
      </>
      <LogoutBtn dataLang={dataLang} />
    </div>
  );
}
