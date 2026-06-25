import Logo from "@/components/ui/Logo";
import Container from "./Container";
import Link from "next/link";
import AuthButtons from "@/components/auth/AuthButtons";
import RoleNav from "./RoleNav";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <nav className="hidden gap-8 md:flex">
            <RoleNav />
          </nav>

          <AuthButtons />
        </div>
      </Container>
    </header>
  );
}