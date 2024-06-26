import List from "./list";
import NewButton from "./new-button";

const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white bg-black">
      <List />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
