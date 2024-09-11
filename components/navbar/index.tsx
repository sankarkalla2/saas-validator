import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto flex justify-between sticky top-0 items-center h-16 z-50 bg-[#f8f9fd]">
      <div>
        <p className="font-bold text-2xl">Saas-Validator-AI</p>
      </div>
      <div>
        <nav>
          <ul className="flex items-center gap-x-3">
            <li>
              <Button className="" variant={"outline"}>
                <Link href={"/login"}>Login</Link>
              </Button>
            </li>
            <li>
              <Button>Get Started</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
