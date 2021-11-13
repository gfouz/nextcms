import StyledHeader from "./StyledHeader";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header(props) {
  const routes = ["/about", "/work", "/blog", "/"];
  const router = useRouter();
  const pathname = router.pathname;
  const currentPages = routes.filter((routes) => routes !== pathname);

  return (
    <>
      <StyledHeader
        dark={props.dark}
        light={props.light}
        primary={props.primary}
        color={props.color}
        bg={props.bg}
        fontFamily={props.font}
        position = {props.position}
      >
        <div className="navbar-links row-space--evenly">
          {currentPages.map((items, index) => (
             <div  key={index} >
              <a className={items == "/" ? "visible" : "hidden"} href="/">
                home
              </a>

              <a className="navbar__link" href={`${items}`} >
                    {items.slice(1)}
              </a>
            </div>
          ))}
        </div>
      </StyledHeader>
    </>
  );
}
