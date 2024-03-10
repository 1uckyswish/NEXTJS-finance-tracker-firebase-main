import { ImStatsBars } from "react-icons/im";

function Nav() {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
             src="https://img.wattpad.com/4ebd2f957ee49e4b4fea11d42da38871730e203e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6d4c5731645f7a48563633737a673d3d2d3934323137393237302e313632653432393832323962623938633734323538343439393433342e6a7067?s=fit&w=720&h=720"
              alt="Profile image"
            />
          </div>

          {/* name */}
          <small>Hi, Leon!</small>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex items-center gap-4">
          <div>
            <ImStatsBars className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign out</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
