import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="w-full pt-40 lg:px-8  bg-opacity-50 overflow-x-hidden">
        <h1 className="text-5xl font-bold text-center">Contact Us</h1>
        <p className="px-3 md:px-0 text-center mt-2">
        Have questions, feedback ,or ideas to share? Get in touch with us ! we dont love to hear from you!
        </p>
        <div className="flex flex-col gap-y-12 md:flex-row justify-between mt-10">
          <div className=" md:w-[50%] space-y-3 border-1 border-black rounded-[10px] p-4 m-2 shadow-custom2 shadow-lg">
            <h1 className="text-center text-xl font-bold py-5">
              Contact Information
            </h1>
            <p className="text-center px-2 mt-2 flex items-center gap-3  sm:text-xl">
              <FaLocationDot className="md:w-8 md:h-8" /> 789, AC Street, XYZ
              City, 0000000000
            </p>
            <p className="text-center px-2 mt-2 flex items-center gap-3 sm:text-xl">
              <IoIosMail className="md:w-8 md:h-8" /> info@Nature.com
            </p>
            <p className="text-center px-2 mt-2 flex items-center gap-3 sm:text-xl">
              <FaPhoneVolume className="md:w-8 hmd:-8" />
              {`+1(234)567-8910`}
            </p>
            
          </div>

          <div className="md:w-[50%] border-1 border-black rounded-[10px] p-2 m-2 shadow-custom2 shadow-lg">
            <h1 className="text-center text-xl font-bold py-5">Contact Form</h1>
            <form className="flex flex-col gap-y-3">
              <input
                type="text"
                placeholder="Name"
                className="border-2 border-custom2 rounded-md p-2 m-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-custom2 rounded-md p-2 m-2"
              />
              <textarea
                placeholder="Message"
                className="border-2 border-custom2 rounded-md p-2 m-2"
              />
              <button className="bg-slate-900 hover:text-black hover:bg-opacity-80 hover:border-2 border-black text-white p-2 m-2">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="text-center mt-20 text-3xl font-bold">Follow us on</p>
          <div className="flex justify-center gap-x-4 mt-7 mb-20">
            <FaFacebookF className="w-12 h-12 text-slate-500 hover:text-amber-100 hover:bg-slate-900 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
            <RiInstagramFill className="w-12 h-12 text-slate-500 hover:text-amber-100 hover:bg-slate-900 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
            <FaTwitter className="w-12 h-12 text-slate-500 hover:text-amber-100 hover:bg-slate-900 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
            <FaSnapchatGhost className="w-12 h-12 text-slate-500 hover:text-amber-100 hover:bg-slate-900 hover:border hover:rounded-full hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </>
  );
}
