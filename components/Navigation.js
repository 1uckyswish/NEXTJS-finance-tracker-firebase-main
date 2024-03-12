import { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { IoIosStats } from "react-icons/io";
import { FaUserSecret } from 'react-icons/fa';

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
                <div className="bg-primary text-gray-400 flex items-center justify-center w-full h-full">
                  <FaUserSecret className="text-2xl text-black" />
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
             <a href="#stats">
               <IoIosStats className="text-2xl" />
             </a>
            </div>
            <div>
              <button onClick={logout} className="btn btn-outline btn-primary ml-4 text-xs capitalize rounded-xlte">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>Sign Out
</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Nav;
