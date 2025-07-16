"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { setRedirectUrl } from "./redux/slices/LoginReducer";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const AuthGaurd = ({ children }: { children: React.ReactNode }) => {
  const authState = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  console.log("AuthGuard loaded");
  console.log("Authenticated:", authState);
  console.log("Current Path:", pathname);

  useEffect(() => {
    if (!authState) {
      dispatch(setRedirectUrl(pathname));
      router.push("/signin");
    }
  }, [authState, dispatch, pathname, router]);
  if (!authState) return null;

  return <>{children}</>;
};

export default AuthGaurd;
