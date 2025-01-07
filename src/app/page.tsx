import Image from "next/image"
import Link from "next/link"
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Home(){
    return(
        <>
        <main className="w-full min-h-screen flex-none lg:flex items-center top-0  bg-opacity-50 overflow-x-hidden">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center pt-20 lg:pt-0">
                <div className="w-[100%] lg:w-[50%] lg:px-16 mt-10 lg:mt-20">
                    <h1 className="text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black">The Beauty and Importance of Nature</h1>
                    <p className="text-xl text-center lg:text-left py-5 lg:text-2xl lg:py-12 text-custom2 font-medium"> Nature is the essence of life, a harmonious blend of mountains, forests providing a delicate balance that allows ecosystems to thrive. The serene beauty of nature inspires creativity, brings peace to the soul, and reminds us of the intricate connection between humans and the environment..</p>
                    <Link href="/blog" className="flex justify-center lg:justify-start">
                    <button className=" hover:text-black hover:bg-opacity-80 bg-slate-900 text-amber-100 mb-10 py-4 px-4 rounded-md border border-black flex items-center gap-4 font-medium">Explore Blogs <FaAngleDoubleRight /></button></Link>
                    
                </div>
                <div className="w-[100%] lg:w-[50%]  lg:mt-20 flex justify-center">
                    <Image className="px-3" src={"/images/nature.jpg"} alt="home banner" width={600} height={600}/>
                </div>
            </div>
           
        </main>
        </>
    )
}