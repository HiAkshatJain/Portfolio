import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void; // Changed from 'click' to 'onClick'
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={onClick} // Use onClick here
    >
      {title}
    </Link>
  );
};

export default NavLink;
