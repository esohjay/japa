import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import AddPostModal from "./components/AddPostModal";

function App() {
  return (
    <main className="overflow-x-hidden bg-bodyBg">
      <Nav />
      {/* <AddPostModal /> */}
      <section className="min-h-screen mt-[112px] md:mt-32 lg:mt-20 w-full md:max-w-[780px]  lg:max-w-[1100px] mx-auto lg:px-0">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
