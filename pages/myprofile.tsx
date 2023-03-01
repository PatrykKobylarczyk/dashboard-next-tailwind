import PageContent from "@/components/PageContent";
import React from "react";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user?.email)

  return <PageContent>{}</PageContent>;
};

export default MyProfile;
