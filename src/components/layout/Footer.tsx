import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900">
              SportVenue
            </h3>

            <p className="text-sm text-slate-600">
              Discover and book sports venues with ease.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-900">
              Company
            </h4>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-900">
              Explore
            </h4>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>Turfs</li>
              <li>Leagues</li>
              <li>For Owners</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-slate-900">
              Legal
            </h4>

            <ul className="space-y-2 text-sm text-slate-600">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © 2026 SportVenue. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}