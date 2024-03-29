import Nabar from "./_components/navbar";
import OrganizationSidebar from "./_components/org-sidebar";
import Sidebar from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-full">
      <Sidebar />
      <div></div>
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrganizationSidebar />
          <div className="h-full flex-1">
            <Nabar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
