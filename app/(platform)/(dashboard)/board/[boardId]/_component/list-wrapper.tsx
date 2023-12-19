import React from "react";

interface IListWrapper {
  children: React.ReactNode;
}

export function ListWrapper({ children }: IListWrapper) {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>;
}
