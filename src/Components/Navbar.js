import Link from 'next/link'

export default function BernNav() {

    return (
        <>
            <nav className="fixed z-5 w-full lg:h-30 md:h-30 h-25 backdrop-blur-md shadow-xl">
                <div className="flex justify-center lg:my-10 md:my-10 my-5">

                    <div className="absolute lg:left-15 md:left-15 left-5 font-extrabold lg:text-5xl md:text-5xl text-2xl text-white">
                        uniVERSE
                    </div>

                    <div className="">
                        <ul className="flex lg:space-x-10 md:space-x-10 space-x-3 lg:mt-5 md:mt-5 mt-10 font-thin">

                            <Link href={'/'}>
                                <li className="hover:underline cursor-pointer hover:scale-110">Home</li>
                            </Link>

                            <Link href={'/about'}>
                                <li className="hover:underline cursor-pointer hover:scale-110">About</li>
                            </Link>
                            
                            <Link href={'/contact'}>
                                <li className="hover:underline cursor-pointer hover:scale-110">Contact</li>
                            </Link>
                          
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}