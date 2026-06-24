import Logo from "@/components/ui/Logo";
import Container from "./Container";
import Button from "../ui/Button";
import Link from "next/link";
import AuthButtons from "@/components/auth/AuthButtons";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
  <Logo />
</Link>
          <nav className="hidden gap-8 md:flex">
            <Link
  href="/explore"
  className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
>
  Explore
</Link>
<a
  href="/owner"
  className="text-slate-600 hover:text-slate-900"
>
  Owner Portal
</a>
<a
  href="/dashboard"
  className="text-slate-600 hover:text-slate-900"
>
  Dashboard
</a>
<a
  href="/my-bookings"
  className="text-slate-600 hover:text-slate-900"
>
  My Bookings
</a>

            <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Leagues
            </a>

            <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Owners
            </a>

            <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              Contact
            </a>
          </nav>

         <AuthButtons />
        </div>
      </Container>
    </header>
  );
}   