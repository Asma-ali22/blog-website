export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  button: string;
  content: {
    p: string;
    p1: string;
    p2: string;
  
    h1: string;
    h2: string;
   
    List1: string;
    List2: string;
  };
  image: string;
  
}

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "Every-day-AI",
    title: "mountain region",
    excerpt:
      "Pakistan is home to the Himalayas, Karakoram, and Hindu Kush ranges, renowned worldwide for their towering peaks and natural beauty.",
    button: "Read More",
    image: "/images/mountains1.webp",
    content: {
      p: "ush valleys such as Hunza, Swat, and Kaghan are nestled within these ranges, offering picturesque landscapes and serene lakes..",
      h1: "Many peaks, like Takht-e-Sulaiman, are deeply rooted in local myths and spiritual beliefs.",
      p1: "Pakistan is blessed with some of the most majestic mountain ranges in the world, including the Himalayas, Karakoram, and Hindu Kush. These towering ranges define the northern landscape of the country, offering breathtaking views, challenging terrains, and ecological significance. The peaks of these ranges, such as K2 and Nanga Parbat, are globally renowned for their grandeur and allure, attracting climbers and adventurers from every corner of the world.",
      List1: `<ul>
<li><strong>Lush Valleys:</strong>  Encompasses picturesque valleys such as Swat, Kaghan, and Hunza, famous for their serene beauty, lakes, and greenery..</li>
<li><strong>Glaciers and Water Sources:</strong> Features massive glaciers like the Baltoro and Siachen, essential for feeding rivers like the Indus.
.</li>
<li><strong>Climate Regulation:</strong>The mountains influence weather patterns and act as natural barriers, protecting the plains from harsh winds and regulating monsoon rains..</li>
<li><strong>Spiritual and Mythological Significance:</strong>Many peaks, such as Takht-e-Sulaiman, are rooted in myths and religious traditions, adding a spiritual dimension to their natural beauty..</li>
</ul>`,
      h2: "Hindukash Mountain",
      p2: "The Hindu Kush mountain range stretches across northern Pakistan, Afghanistan, and parts of Tajikistan It serves as a natural boundary between Central Asia and the South Asian subcontinent..",
      List2: `<ul>

<li><strong>Cultural Richness:</strong>  The range is home to the Kalash people, known for their unique culture, festivals, and polytheistic traditions..</li>
<li><strong>Climate and Water Source:</strong> The Hindu Kush glaciers are vital for the Kabul River and Chitral River systems, supporting agriculture and drinking water needs.. </li>
<li><strong>Strategic Importance:</strong>.</li>
</ul>`,
      
    },
    
  },
  {
    id: "2",
    slug: "Career-Success-Without-Doubt",
    title: "The Enchanting Beauty of Saiful Malook Lake",
    excerpt:"Nestled in the serene Kaghan Valley of Pakistan, Saiful Malook Lake is a pristine jewel renowned for its crystal-clear waters, surrounded by snow-capped peaks and lush meadows. This alpine wonder, steeped in folklore and natural charm, captivates visitors with its tranquil beauty and mythical allure. Often called a paradise on earth, the lake is a popular destination for adventure seekers, nature lovers, and those seeking a glimpse of Pakistan's breathtaking landscapes..",
    button: "Read More",
    image: "/images/lake.webp",
    content: {
      p: "Saiful Malook, a picturesque alpine lake located in the Kaghan Valley of Pakistan, is a symbol of natural beauty and serenity. Surrounded by towering snow-capped mountains, the lake is renowned for its crystal-clear, emerald-green waters that create a magical reflection of the sky and peaks. Perched at an altitude of 3,224 meters, it is one of the highest lakes in Pakistan and a popular destination for nature lovers and adventure enthusiasts.. ",
      h1: "Saiful Malook: A Jewel of Nature: ",
      p1: "The lake is steeped in folklore, famously linked to the legend of Prince Saiful Malook and a fairy princess, adding a layer of mystique to its charm. Visitors are captivated by the tranquil ambiance, stunning landscapes, and opportunities for trekking, camping, and exploring nearby trails. Saiful Malook stands as a testament to the unspoiled beauty of Pakistan’s northern region, leaving a lasting impression on all who visit.",
      List1: `
            <ul>
            <li><strong>Location:</strong> Situated in the Kaghan Valley, near the town of Naran in Khyber Pakhtunkhwa, Pakistan.</li>
            <li><strong>Altitude:</strong> Lies at an elevation of 3,224 meters (10,578 feet), making it one of the highest alpine lakes in the region..</li>
            <li><strong>Natural Beauty:</strong> Famous for its emerald-green waters, reflecting the surrounding snow-capped peaks and blue skies..</li>
            <li><strong>Adventure and Tourism:</strong> A hub for activities such as boating, camping, and trekking to nearby areas like Ansoo Lake..</li>
            </ul>`,
      h2: "The Enchanting Saiful Malook Lake",
      p2: "Steeped in folklore, the lake is said to be the setting of a legendary love story between Prince Saiful Malook and a fairy princess, adding a mystical allure to its charm. Visitors are drawn to the lake not only for its natural beauty but also for adventure activities like boating, hiking, and exploring nearby trails. Saiful Malook Lake is a true gem of Pakistan’s natural heritage, inspiring awe and admiration in all who visit..",
      List2: `<ul>
            <li><strong>Climate:</strong> The lake remains frozen during winter, while summer unveils its full beauty with blooming wildflowers and flowing streams.
.</li>
            <li><strong>Cultural Significance:</strong> A symbol of Pakistan's natural heritage, frequently celebrated in poetry, music, and travelogues..</li>
            <li><strong>Accessibility:</strong> Accessible via a jeep track or hiking trails from Naran, offering stunning views along the way..</li>
            
            </ul>`,
     
    },
   
  },
  {
    id: "3",
    slug: "Story-telling-And-Communities",
    title: "Changa Manga: The Man-Made Forest Paradise",
    excerpt:
      "Changa Manga, located in the Punjab province of Pakistan, is one of the largest and oldest man-made forests in the world. Established in 1866 by the British, this lush green sanctuary spans over 12,000 acres and is a haven for biodiversity and recreation. Initially planted to supply timber for the railways, Changa Manga has evolved into a vital ecological reserve, supporting numerous species of flora and fauna..",
    button: "Read More",
    image: "/images/forest.jpg",
    content: {
      p: "Situated in Punjab, Pakistan, approximately 80 kilometers from Lahore..",
      h1: " A Sanctuary of Greenery and Wildlife",
        p1: "The forest is a popular destination for picnics and nature enthusiasts, offering serene walking trails, a mini-zoo, and a boating lake. It plays a crucial role in environmental conservation and serves as a natural habitat for wildlife, including jackals, hog deer, and a variety of bird species. Changa Manga stands as a testament to the harmony between human innovation and nature's resilience.",
      List1: `
            <ul>
            <li><strong>Historical Background:</strong> Created in 1866 by the British to provide timber for the railway system.
Originally planted with Eucalyptus trees to meet industrial demands.</li>
            <li><strong>Ecological Importance:</strong> Over time, the forest has transformed into an ecological reserve, supporting a variety of plant species..</li>
            <li><strong>Environmental Significance:</strong> Changa Manga helps in maintaining ecological balance in an urbanizing region..</li>
            <li><strong>Conservation Efforts:</strong> Acts as a carbon sink, contributing to air purification and the reduction of pollution..</li>
            </ul>`,
      h2: "A Man-Made Forest and Wildlife Haven",
      p2: "Today, Changa Manga serves as a popular recreational spot, offering visitors the chance to explore scenic walking trails, enjoy peaceful picnics, or observe the wildlife in its natural setting. The forest’s significance extends beyond leisure; it plays a crucial role in environmental conservation, combating urban pollution, and maintaining a healthy ecosystem. Changa Manga stands as a true testament to the power of nature’s resilience and human foresight..",
      List2: `
            <ul>
            <li><strong>Conservation Efforts:</strong> The forest contributes to environmental sustainability by providing a green space in an otherwise urbanizing region..</li>
            <li><strong>Tourism and Accessibility:</strong> Easily accessible for day trips, making it a favorite among both local and international visitors..</li>
            <li><strong>Biodiversity and Wildlife:</strong> Home to a variety of wildlife including jackals, deer, and several bird species like peacocks.</li>
           
            </ul>`,
    
    },
  },
  
];

export async function getPostBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}
