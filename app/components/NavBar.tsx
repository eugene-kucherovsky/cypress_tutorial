import NavElement from "./NavElement";

export type NavItem = {
  label: string;
  path: string;
  testid: string;
};

const elements = [
  {
    label: "Why Cypress?",
    path: "/",
    testid: "nav-why-cypress",
  },
  {
    label: "Overview",
    path: "/overview",
    testid: "nav-overview",
  },
  {
    label: "Fundamentals",
    path: "/fundamentals",
    testid: "nav-fundamentals",
  },
  {
    label: "Forms",
    path: "/forms",
    testid: "nav-forms",
  },
  {
    label: "Examples",
    path: "/examples",
    testid: "nav-examples",
  },
  {
    label: "Component",
    path: "/component",
    testid: "nav-component",
  },
  {
    label: "Best Practices",
    path: "/best-practices",
    testid: "nav-best-practices",
  },
];

export default function NavBar() {
  return (
    <ul className="nav-bar">
      {elements.map((e) => (
        <NavElement
          key={e.label}
          label={e.label}
          path={e.path}
          testid={e.testid}
          data-testid={e.testid}
        />
      ))}
    </ul>
  );
}
