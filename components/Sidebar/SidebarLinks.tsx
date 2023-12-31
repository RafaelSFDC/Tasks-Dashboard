"use client";
import React from "react";
import sidebarConstants from "./SidebarConstants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SidebarLinks = () => {
  const path = usePathname();
  return (
    <ul className="flex flex-col gap-4">
      {sidebarConstants.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={index}>
            <Link
              href={item.path}
              className={`flex gap-3 items-center text-lg text-white transition duration-300] border-2 rounded p-1 ${
                path === item.path ? "text-sky-400" : ""
              } ${path === item.path ? "border-sky-400" : "border-transparent"}
              `}
            >
              <Icon
                className="text-2
              xl"
              />
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarLinks;
