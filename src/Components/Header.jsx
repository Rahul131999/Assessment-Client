import { useContext } from "react";
import { UserContext } from "../App";

function Header() {
  const {userData} = useContext(UserContext);
  const email = userData?.email
  const avatar = userData?.avatar
  return (
    <header className="bg-slate-400 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3">
        <h1 className="font-bold">{email ? email : "Rahul's Bank"}</h1>
        {avatar ?<img className="rounded-full h-7 w-7 object-cover" src={avatar}></img> :<div>Login to see the magic</div>}
      </div>
    </header>
  );
}

export default Header;
