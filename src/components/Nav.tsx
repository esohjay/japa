import LScreenNav from "./LScreenNav";
import MScreenNav from "./MScreenNav";
import SScreenNav from "./SScreenNav";

function Nav() {
  return (
    <nav className="w-full bg-white shadow-sm lg:shadow-md fixed top-0 left-0 ">
      <LScreenNav />
      <MScreenNav />
      <SScreenNav />
    </nav>
  );
}

export default Nav;
