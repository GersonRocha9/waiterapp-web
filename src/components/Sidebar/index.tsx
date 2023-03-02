import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
