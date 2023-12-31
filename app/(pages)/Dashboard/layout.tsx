import Sidebar from "@/components/Sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-auto h-full  bg-zinc-200">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
