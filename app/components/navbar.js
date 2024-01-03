import Image from "next/image";
import Link from "next/link"

function Navbar() {
   return (
      <div className=" flex mt-4">
         <div className="flex-1 w-1/4 flex  justify-center">
            <Image
             src="/logo.jpg"
             width={60}
             height={60}
             alt='logo'
             className="rounded-full">

            </Image>
            <h2 className="mt-4">
            Hey What's Up?
            </h2>
           
         </div>
         <div className="flex-1 flex mt-4 w-3/4 justify-around">
         <Link href='/' className="">
               Home
            </Link>
            <Link href='#journey' className="">
               Journey
            </Link>
            <Link href='#projects' className="">
               Projects
            </Link>
            {/* <Link href='/service' className="">
               Services
            </Link> */}
            <Link href='#contact' className="">
               Contact Me
            </Link>
           
         </div>

      </div>
   );
}

export default Navbar;