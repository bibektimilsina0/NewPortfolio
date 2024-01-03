import Image from "next/image";
function Footer() {
    return (
        <footer className="h-12  mb-4 flex  justify-around">
            <div className="flex">
            <Image
                src="/logo.jpg"
                width={60}
                height={60}
                alt='logo'
                className="rounded-full">

            </Image>
            <h1 className="text-md  mt-4 text-center items-center">Thanks for scrolling,<span className="text-sm text-gray-500">that's all folks.</span></h1>

            </div>
           
            <p className="text-center mt-4 text-md">&copy; 2022 Bibek Timilsina. All rights reserved.</p>

        </footer>
    );
}

export default Footer;