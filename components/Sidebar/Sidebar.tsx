import Image from "next/image";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <nav className="h-full bg-amber-400 w-[200px] border-r-2 border-sky-400 p-4 flex flex-col gap-3">
      <div className="flex gap-3">
        <Image
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p>UserName</p>
          <p>Role</p>
        </div>
      </div>
      <hr className="border-sky-400" />
      <SidebarLinks />
    </nav>
  );
};

export default Sidebar;
