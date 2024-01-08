import { SidebarContainer, SidebarInnerContainer } from "./sidebarStyles";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarInnerContainer>
        <ul>
          <li>
            <Link to="/">
              <FaUser size={35} />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </SidebarInnerContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
