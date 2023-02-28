import { FC } from "react";
import { Category } from "@/types";

export interface ProjectsNavBarProps {
  handlerFilterCategory: Function;
  active: Category | "all";
}

const NavItem: FC<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: Category | "all";
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) {
    className += " text-green";
  }

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavBar = ({
  handlerFilterCategory,
  active,
}: ProjectsNavBarProps) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem
        value="all"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="react"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="node"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="express"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="django"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <NavItem
        value="mongo"
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
    </div>
  );
};

export default ProjectsNavBar;
