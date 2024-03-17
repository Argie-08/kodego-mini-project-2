import Hero from "./pages/Hero";
import Body from "./pages/Body";
import Items from "./pages/Items";
import ContactUs from "./pages/ContactUs";
import "./routes.css";

const routes = [
  {
    name: "HOME",
    path: "/",
    element: <Hero />,
  },
  {
    name: "ABOUT",
    path: "/body",
    element: <Body />,
  },
  {
    name: "RECIPES",
    path: "/items",
    element: <Items />,
  },
  {
    name: (
      <button className="px-3 py-1 contactBtn">
        <b>CONTACT US</b>
      </button>
    ),
    path: "/contact",
    element: <ContactUs />,
  },
];

export default routes;
