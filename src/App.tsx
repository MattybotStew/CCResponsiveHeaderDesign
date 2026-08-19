import { useEffect, useState } from "react";
import Header from "./Header";
import Breakpoints from "./Breakpoints";

function readRoute() {
  return window.location.hash.replace(/^#\/?/, "");
}

export default function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route === "breakpoints") {
    return <Breakpoints />;
  }

  if (route === "header") {
    return <Header />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <a
        href="./#/breakpoints"
        className="fixed bottom-5 right-5 z-[60] bg-[#2a2a2e] text-white text-[13px] px-4 py-2 rounded-none shadow-md hover:bg-[#6a6c74] transition-colors"
      >
        View header at all breakpoints →
      </a>
    </div>
  );
}
