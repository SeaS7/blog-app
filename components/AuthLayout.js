'use client'
import { useRouter } from  "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Protected = ({ children, authentication = true }) => {
  const router = useRouter()
  const [loader, setLoader] = useState(true);
  const authState = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authState !== authentication) {
      router.push("/login");
    } else {
      if (!authentication && authState !== authentication) {
        router.push("/");
      }
    }
    setLoader(false);
  }, [ authentication, router]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
