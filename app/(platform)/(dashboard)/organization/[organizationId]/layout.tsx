import React from "react";
import OrgControl from "./_component/org-control";

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl  />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
