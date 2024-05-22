import { validateString, ValidationErrorMessage } from "./validateString";
import NavbarStyle from "../templates/Navbar/NavbarStyles";

const renderNavLink = (
  key: string,
  Icon: React.FC | string,
  link: string,
  title: string,
) => {
  if (!validateString(link) || !validateString(title)) {
    return (
      <NavbarStyle.ErrorSection key={key}>
        <ValidationErrorMessage message={`Invalid link or title: ${link}`} />
      </NavbarStyle.ErrorSection>
    );
  }

  if (typeof Icon === "string" && !Icon.trim()) {
    return (
      <NavbarStyle.ErrorSection key={key}>
        <ValidationErrorMessage message={`Invalid Icon: ${Icon}`} />
      </NavbarStyle.ErrorSection>
    );
  }

  if (typeof Icon === "number") {
    return (
      <NavbarStyle.ErrorSection key={key}>
        <ValidationErrorMessage message={`Invalid Icon: ${Icon}`} />
      </NavbarStyle.ErrorSection>
    );
  }

  return (
    <>
      <NavbarStyle.NavLinkInternal key={key} to={link} hovertitle={title}>
        {typeof Icon === "string" ? Icon : <Icon />}
      </NavbarStyle.NavLinkInternal>
    </>
  );
};

export default renderNavLink;
