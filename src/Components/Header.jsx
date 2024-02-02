import { Link } from "react-router-dom";

function Header() {
  const currentUser = null;
  return (
    <header className="bg-slate-400 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3">
        <Link to="/home">
          <h1 className="font-bold">
            Rahul's Bank
          </h1>
        </Link>
        <div>Login to see the magic</div>
      </div>
    </header>
  );
}

export default Header;
