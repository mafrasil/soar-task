import { Outlet, useMatches } from "react-router";
import { Sidebar } from "~/components/ui/sidebar";
import { useState, useEffect } from "react";
import { Header } from "~/components/ui/header";

interface RouteHandle {
  title: string;
}

function isRouteHandle(handle: unknown): handle is RouteHandle {
  return !!handle && typeof (handle as RouteHandle).title === "string";
}

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const matches = useMatches();
  const lastMatch = matches[matches.length - 1];
  const title = isRouteHandle(lastMatch?.handle) ? lastMatch.handle.title : "Dashboard";

  return (
    <div className="flex flex-col min-h-screen">
      <Header isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(true)} title={title} />
      <main className="flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="2xl:ml-64 transition-[margin] duration-300">
          <div className="2xl:container mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
