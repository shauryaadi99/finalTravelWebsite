import React from "react";
import { Link } from "react-router-dom";
import styles from "./TrandingSlider.module.css";
import img1 from "../../../../assets/img1.jpg";
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";
import img4 from "../../../../assets/img4.jpg";
import img5 from "../../../../assets/img5.jpg";
import img6 from "../../../../assets/img6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const slideData = [
  {
    id: 1,
    title: "Mystical Varanasi: A Journey to the Soul",
    description:
      "Experience the spiritual essence of Varanasi. Witness the Ganga Aarti on the ghats and immerse yourself in the city's deep-rooted traditions.",
    imgSrc: "https://wallpapercave.com/wp/wp6612913.jpg",
    fullDescription:
      "Varanasi's charm extends beyond its ghats and rituals, as the city is steeped in traditions that have been preserved for centuries. The aroma of street food wafts through the air, enticing visitors to sample local delicacies like kachoris and jalebis. Every dish tells a story, reflecting the city's culinary heritage influenced by diverse cultures. The vibrant atmosphere of the markets is a feast for the senses, with merchants calling out to passersby, colorful fabrics on display, and the sounds of daily life blending harmoniously. Engaging with local artisans provides insight into the meticulous craftsmanship that goes into creating intricate Banarasi silk sarees, pottery, and other handicrafts, making for memorable souvenirs that embody the spirit of Varanasi \n\n\n\n As you delve deeper into the spiritual essence of Varanasi, a visit to Sarnath is highly recommended. Just a short distance from the city, Sarnath is where Lord Buddha delivered his first sermon after attaining enlightenment. The site is adorned with ancient stupas and monasteries, serving as a peaceful retreat from the bustling city. The Dhamek Stupa stands tall, reminding visitors of the profound teachings of Buddhism. The serene ambiance of Sarnath offers an opportunity for contemplation and introspection, allowing one to connect with the teachings of compassion and mindfulness that resonate deeply within Varanasi's spiritual landscapeNo visit to Varanasi would be complete without experiencing the warmth of its people. The locals embody the spirit of hospitality, often eager to share their stories and traditions with visitors. Engaging in conversations with residents provides a richer understanding of the city's complex history and cultural tapestry. Whether it's listening to a storyteller recounting tales of ancient times or joining in a traditional dance during a festival, the interactions you have in Varanasi create lasting memories. This unique blend of spirituality, culture, and community makes Varanasi not just a destination, but a transformative journey for anyone seeking a deeper connection to the essence of India.",
    extraImages: [
      "https://images.pexels.com/photos/20518303/pexels-photo-20518303/free-photo-of-ganga-aarti-ceremony-on-street-in-india.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1723485664001-122971f79f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
    ],
  },
  {
    id: 2,
    title: "The Tranquility of Kerala's Backwaters",
    description:
      "Discover the peaceful backwaters of Kerala, where you can relax on a houseboat and enjoy the lush greenery and traditional village life along the waterways.",
    imgSrc:
      "https://i.pinimg.com/736x/61/ed/3c/61ed3c0fd3015272dbd6b2381915b1f1.jpg",
    fullDescription:
      "The backwaters of Kerala are a serene network of lagoons, lakes, and canals that offer a peaceful retreat from the hustle and bustle of city life. As you embark on a houseboat cruise, you are greeted by the tranquil sounds of nature, from the gentle lapping of water against the boat to the melodic calls of local birds. The lush greenery that flanks the waterways creates a picturesque backdrop, inviting you to immerse yourself in the beauty of this unique ecosystem.\n\nDuring your journey, you will have the chance to witness the traditional village life that thrives along the banks. Small hamlets dot the landscape, where locals engage in age-old practices such as fishing and farming. Stop by these charming villages to interact with the warm and welcoming residents, who are eager to share their stories and cultural heritage. You might even find yourself sampling delicious home-cooked meals made with fresh ingredients sourced from the surrounding land and water.\n\nThe backwaters are not just a feast for the eyes; they are also a sanctuary for diverse wildlife. Keep your eyes peeled for herons, kingfishers, and otters as you glide through the shimmering waters. The ever-changing scenery, from rice paddies to coconut groves, offers endless opportunities for photography and reflection. As the sun sets, the golden hues reflect off the water, creating a serene atmosphere that enhances the experience of this enchanting destination. Kerala’s backwaters are truly a place to unwind, reconnect with nature, and embrace the simplicity of life.",
    extraImages: [
      "https://images.unsplash.com/photo-1696965663086-7e632299ce0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtI7bS0qYOP5ds3zW6A2NICh4lRwayBDCbuaZPfwEB9Llax2QZByldxAiF3g&shttps://cdn.pixabay.com/photo/2016/09/02/14/25/kerala-1639325_640.jpg",
      "https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: 3,
    title: "The Vibrant Streets of Mumbai",
    description:
      "Dive into the bustling life of Mumbai, India’s financial capital. From iconic landmarks like the Gateway of India to the vibrant street food scene.",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1661962392861-c3cb1cf6dd82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVtYmFpJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D",
    fullDescription:
      "Mumbai, often referred to as the city that never sleeps, is a vibrant metropolis filled with energy and diversity. The moment you step onto its bustling streets, you are greeted by a whirlwind of sights, sounds, and smells that define this iconic city. From the majestic Gateway of India, standing proud against the Arabian Sea, to the chaotic charm of local markets, every corner tells a story of resilience and innovation.\n\nAs you explore Mumbai, you’ll find a unique blend of modernity and tradition coexisting harmoniously. The city's financial district bustles with ambitious professionals, while the colorful streets of Colaba and Bandra teem with artists, musicians, and street vendors. The street food scene is a gastronomic adventure, offering an array of flavors that reflect the city's multicultural essence. Don’t miss trying local favorites like vada pav, pav bhaji, and the ever-popular bhel puri as you navigate through the crowded lanes.\n\nThe city's cultural richness is evident in its vibrant art scene and historical landmarks. Museums, galleries, and theaters are scattered throughout Mumbai, showcasing the creativity and talent of its inhabitants. Take a moment to visit the Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage site, or explore the stunning architecture of the Taj Mahal Palace Hotel. Each visit to Mumbai offers a fresh perspective on its dynamic spirit, making it a destination that lingers in the hearts of those who experience its charm.",
    extraImages: [
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUXgjZJq6rPGUdWE-Ym7SEj0DdOtkVaWA92pAE7rVW9UQODfMEN-YlHpkG-u8s_UMuas&usqp=CAU",
      "https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: 4,
    title: "Royal Heritage in Jaipur",
    description:
      "Explore the royal heritage of Jaipur, the Pink City. Visit grand palaces, majestic forts, and vibrant markets that reflect the rich history and culture of Rajasthan.",
    imgSrc:
      "https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=raUKDB1Mris9Z7SjvuuTieZRzF2-CaKukGvTC8t1kuo=",
    fullDescription:
      "Jaipur, known as the Pink City, is a captivating destination that showcases the regal heritage of Rajasthan. As you wander through its colorful streets, you’ll be greeted by grand palaces, majestic forts, and bustling markets, all steeped in history and culture. The city’s iconic architecture, characterized by intricate carvings and vibrant hues, invites you to delve into the stories of its royal past.\n\nOne of the must-visit sites is the magnificent Amber Fort, perched atop a hill, offering breathtaking views of the surrounding landscape. Explore its opulent halls, ornate courtyards, and stunning mirror work that reflect the grandeur of the bygone era. Another highlight is the City Palace, a stunning blend of Rajasthani and Mughal architecture, where you can marvel at the royal artifacts and learn about the history of the Kachwaha dynasty.\n\nBeyond the historical sites, Jaipur’s vibrant markets provide a glimpse into the local way of life. The bustling bazaars, such as Johari Bazaar and Bapu Bazaar, are filled with colorful textiles, traditional handicrafts, and exquisite jewelry. Bargaining with local artisans and shopkeepers is part of the experience, allowing you to take home unique souvenirs that reflect the essence of Rajasthan. Jaipur's royal heritage is not just about the monuments; it is also about the warmth and hospitality of its people, making your visit a memorable one.",
    extraImages: [
      "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1716534133678-4eb3eee6e098?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fHww",
    ],
  },
  {
    id: 5,
    title: "The Serenity of Himachal Pradesh",
    description:
      "Escape to the serene landscapes of Himachal Pradesh, where the mountains offer a perfect retreat. Enjoy trekking and breathe in the fresh mountain air.",
    imgSrc:
      "https://t4.ftcdn.net/jpg/04/70/76/19/360_F_470761995_6ru1SxTV2KCienxwZ5H2U8gZrqJH0fiI.jpg",
    fullDescription:
      "Nestled in the lap of the Himalayas, Himachal Pradesh is a paradise for nature lovers and adventure seekers alike. The serene landscapes, characterized by lush green valleys, snow-capped peaks, and crystal-clear rivers, provide the perfect backdrop for a refreshing escape from the chaos of everyday life. The region is known for its picturesque hill stations like Manali, Shimla, and Dharamshala, each offering unique experiences that cater to different tastes.\n\nTrekking through the scenic trails of Himachal Pradesh is an exhilarating way to immerse yourself in the region's natural beauty. From the challenging treks of the Hampta Pass to the leisurely walks through cedar forests, the diversity of landscapes offers something for everyone. As you ascend the mountains, you are rewarded with breathtaking views and the invigorating scent of pine and wildflowers. The tranquility of the surroundings invites you to pause, breathe, and connect with nature.\n\nIn addition to trekking, Himachal Pradesh is rich in culture and tradition. The locals, known for their hospitality, welcome visitors with open arms and often share their stories, customs, and cuisine. Don’t miss the opportunity to savor traditional dishes such as Chana Madra and Siddu while enjoying the warmth of a Himachali home. Whether you seek adventure or a peaceful retreat, Himachal Pradesh promises a rejuvenating experience that leaves a lasting impression.",
    extraImages: [
      "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1651319489252-584346703ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.pexels.com/photos/9977240/pexels-photo-9977240.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: 6,
    title: "Exploring the Rann of Kutch",
    description:
      "Experience the unique beauty of the Rann of Kutch, where the white salt desert stretches as far as the eye can see. Visit during the Rann Utsav for cultural performances, handicrafts, and traditional cuisine.",
    imgSrc: "https://live.staticflickr.com/3709/11567459685_2e6f8616d1_b.jpg",
    fullDescription:
      "The Rann of Kutch is a mesmerizing landscape characterized by its vast expanse of white salt desert, creating an otherworldly atmosphere that captivates all who visit. Spanning over 7,500 square kilometers, this unique ecosystem comes alive during the Rann Utsav, a vibrant festival celebrating the culture, art, and traditions of the region. The festival offers an incredible opportunity to experience the rich heritage of Gujarat through folk dances, music performances, and handicraft exhibitions.\n\nAs you traverse the salt flats, you’ll be enchanted by the play of light and shadow as the sun rises and sets over the horizon. The shimmering white landscape creates a breathtaking view, especially during the full moon nights when the Rann sparkles under the silvery glow. Engage with local artisans who showcase their intricate handicrafts, including mirror work and handwoven textiles, providing insight into the skills passed down through generations.\n\nThe culinary experience in the Rann of Kutch is equally delightful, with traditional dishes that reflect the local flavors and ingredients. Savor dishes like dhokla and theplas while enjoying the warmth of a community gathering. The Rann of Kutch is not just a destination; it is an experience that immerses you in the culture and beauty of one of India's most unique landscapes, leaving you with cherished memories long after your visit.",
    extraImages: [
      "https://images.pexels.com/photos/10874408/pexels-photo-10874408.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/7023880/pexels-photo-7023880.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://media.istockphoto.com/id/1321292335/photo/decorated-camels-in-rann-utsav-at-white-rann-of-kutch.jpg?b=1&s=612x612&w=0&k=20&c=dHzEqUO8m9_ojPbLAkN6nuLDt6ctZ7pnu_bIh82rsm8=",
    ],
  },
];

const TrandingSlider = () => {
  return (
    <>
      <h1 className={styles.sliderHeadinggg}>Blog Posts</h1>

      <div className={styles.sliderContainer}>
        <Swiper
          loop={true}
          style={{ height: "32rem", paddingLeft: "10px", paddingRight: "10px" }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: `.${styles.next}`,
            prevEl: `.${styles.prev}`,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide on iphones
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides on medium screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // 3 slides on large screens
              spaceBetween: 30,
            },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide className={styles.content} key={index}>
              <img src={slide.imgSrc} alt={slide.title} />
              <div className={styles.textContent}>
                <h3 className={styles.heavy}>{slide.title}</h3>
                <p>{slide.description}</p>
                <Link
                  to={`/blog/${slide.id}`}
                  className="btn btn-outline-dark"
                  state={{ blogPost: slide }}
                >
                  Read more
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.buttonContainer}>
          <button className={styles.prev} aria-label="Prev Slide">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={styles.next} aria-label="Next Slide">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
};
export default TrandingSlider;
