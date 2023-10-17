import Link from "next/link";
import type { NavItem } from "./NavBar";

export default function NavItem({ label, path, testid }: NavItem) {
  return <Link href={path} data-testid={testid}>{label}</Link>;
}
