import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <header></header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
