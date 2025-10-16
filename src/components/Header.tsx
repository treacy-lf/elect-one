import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const navItems = [
    { name: "首页", href: "/" },
    { name: "租办公室", href: "/offices" },
    { name: "写字楼", href: "/office-buildings" },
    { name: "创意园区", href: "/creative-parks" },
    { name: "共享办公", href: "/coworking" },
    { name: "总部独栋", href: "/standalone" },
    { name: "资讯中心", href: "/news" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="超办网" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-2 text-primary">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">021-64202027</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
