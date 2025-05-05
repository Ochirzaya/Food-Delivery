import Login from "./login/page";
import SignupPage from "./sign-up/page";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-[54px]">
      {children}
      <div className=" w-[856px] h-[904px] pr-[20px] rounded-[16px]">
        <img src="zurag.png"></img>
      </div>
    </div>
  );
}
