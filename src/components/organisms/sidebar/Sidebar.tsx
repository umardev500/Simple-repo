import { About, Profile } from "@/components/molecules";
import { VisitorList } from "./VisitorList";

export const Sidebar = () => {
  return (
    <div className="px-4  flex flex-col justify-center">
      <Profile />
      <About />
      <VisitorList />
    </div>
  );
};
