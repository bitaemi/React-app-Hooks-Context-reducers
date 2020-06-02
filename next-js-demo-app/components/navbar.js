import Link from "next/link";
const NavbarComp = () => (
    <div>
        <Link href='/'>
        <a>Home Page</a>
        </Link>
        <Link href='/contact'>
        <a>Contact</a>
        </Link>
    </div>
    );
    export default NavbarComp;