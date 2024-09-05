import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "@/components/theme-switch";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isBordered isBlurred>
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand>
            <Link
              className="flex justify-start items-center gap-1"
              color="foreground"
              href="#"
            >
              {/* put logo here */}
              <p className="font-bold text-inherit">FDTT</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="end">
          <ThemeSwitch />
        </NavbarContent>
      </Navbar>
      <main className="flex flex-grow items-center justify-center">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="text-xs text-default-600">
          &copy; 2024-2024 Fire Department Tracking & Testing
        </span>
      </footer>
    </div>
  );
}
