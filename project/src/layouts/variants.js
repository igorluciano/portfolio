import { TopBar } from "@components/TopBar";
import { useEffect } from "react";

export function MenuLayout(page) {
  useEffect(() => {
    document.querySelector("body").classList.remove("linktree__background");
  });
  return (
    <>
      <TopBar />
      <div className="container-content">{page}</div>
    </>
  );
}

export function LinktreeLayout(page) {
  useEffect(() => {
    document.querySelector("body").classList.add("linktree__background");
  });
  return <>{page}</>;
}
