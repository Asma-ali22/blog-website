import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <main className="w-full pt-20 lg:pt-40 lg:px-8 pb-8  bg-opacity-50 overflow-x-hidden">
        {/* main div which'll separate left/right sections */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* left section, (image) */}
          <div className="w-[100%] lg:w-[50%] flex justify-center px-3 sm:px-0 lg:flex-none lg:pt-14 xl:pt-0">
            <Image
              src="/images/nature1.jpg"
              alt="about banner"
              width={600}
              height={600}
            />
          </div>
          {/* right section, (text) */}
          <div className="w-[100%] lg:w-[50%] px-4">
            <h1 className="text-3xl py-10 lg:py-0 lg:text-4xl xl:text-5xl font-bold text-center underline underline-offset-4">
              About Nature in Pakistan
            </h1>

            <p className="text-lg lg:pt-8 sm:px-5 md:px-20 lg:px-0 xl:pt-10 font-bold text-custom2">
            Pakistan is a country blessed with a rich tapestry of natural beauty, encompassing majestic mountains, lush green valleys, vast deserts, fertile plains, and serene coastlines. Its diverse geography makes it one of the most ecologically unique regions in the world. From the snow-capped peaks of the Himalayas and Karakoram ranges to the tranquil waters of the Arabian Sea, Pakistan offers a breathtaking array of natural wonders.
            </p>
           
          </div>
        </div>

       
        <div className="bg-slate-50 py-10 mx-3 rounded-[20px] mt-20">
          <h2 className="text-3xl font-bold text-black pb-10 text-center">
            Our Mission
          </h2>
          <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
          The mission is to safeguard Pakistans diverse ecosystems, from towering mountains and fertile plains to serene rivers and wildlife habitats, through effective conservation practices and policies. It emphasizes combating climate change, protecting endangered species, and promoting reforestation and renewable energy. Public awareness and community engagement are central to this mission, encouraging citizens to take responsibility for environmental preservation. Additionally, Pakistan aims to develop ecotourism, showcasing its natural beauty while minimizing environmental impacts, and to collaborate with global partners to address shared environmental challenges. Together, these efforts ensure a greener and more sustainable future for Pakistan.
          </p>
        </div>
        <div className="bg-slate-50 py-10 mx-3 rounded-[20px] mt-20">
          <h2 className="text-3xl font-bold text-black pb-10 text-center">
            Our Vision
          </h2>
          <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
          The vision for nature in Pakistan is to preserve, protect, and sustainably manage the country’s rich natural resources and biodiversity, ensuring a harmonious balance between environmental conservation and development for the well-being of present and future generations. This vision seeks to maintain the ecological balance while promoting sustainable livelihoods and fostering a deep respect for nature.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-custom2 pt-20 pb-10 text-center">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium sm:px-5 md:px-20 lg:px-10 text-center">
              {`Have a question or comment? We'd love to hear from you! Feel free to reach out to us at `}
            </p>
            <span className="text-custom2 font-bold">ABC@.com</span>
            <span className="text-custom2 font-bold"></span>
          </div>
        </div>
       
      </main>
    </>
  );
}
