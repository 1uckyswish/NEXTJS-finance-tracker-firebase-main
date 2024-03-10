import { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { ImStatsBars, ImUser } from "react-icons/im";

function Nav() {
  const { user, loading, logout } = useContext(authContext);

  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        {user && !loading && (
          <div className="flex items-center gap-2">
            {/* img */}
            <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
              {user.photoURL ? (
                <img
                  className="object-cover w-full h-full"
                  src={user.photoURL}
                  alt={user.displayName || "Anonymous"}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="bg-gray-200 text-gray-400 flex items-center justify-center w-full h-full">
                  <ImUser className="text-2xl" />
                </div>
              )}
            </div>

            {/* name */}
            <small>Hi, {user.displayName || "Anonymous"}!</small>
          </div>
        )}

        {/* Right side of our navigation */}
        {user && !loading && (
          <nav className="flex items-center gap-4">
            <div>
              <ImStatsBars className="text-2xl" />
            </div>
            <div>
              <button onClick={logout} className="btn btn-danger">
                Sign out
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
