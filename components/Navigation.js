import { ImStatsDots } from "react-icons/im";
function Nav(){
    return <header className="container max-w-3xl px-1 py-5 mx-auto">
   <div className="flex items-center justify-between">
     {/*User info */}
    <div className="flex items-center gap-2">
    {/* img */}
    <div className="avatar online">
  <div className="w-14 h-14 rounded-full">
    <img src="https://img.wattpad.com/4ebd2f957ee49e4b4fea11d42da38871730e203e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6d4c5731645f7a48563633737a673d3d2d3934323137393237302e313632653432393832323962623938633734323538343439393433342e6a7067?s=fit&w=720&h=720" />
  </div>
</div>
    {/*name*/}
    <small>Hi, Levi</small>
    </div>
    {/*right side of nav*/}
    <nav className="flex items-center gap-2">
      <ImStatsDots className="text-2xl text-secondary"/>
      <button className="btn btn-outline btn-primary ml-4 text-xs capitalize rounded-xlte">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>Sign Out
</button>
    </nav>
   </div>
  </header>
}

export default Nav;