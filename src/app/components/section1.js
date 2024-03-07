'use client';
import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';

import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function section1() {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper', {});
  }, []);

  const bg = {
    background: "url('#') no-repeat",
    backgroundPosition: 'right',
  };
  const posts = [
    {
      id: 1,
      imageUrl: '/images/pokemon z.png',
      title: 'New “Pokémon Legends Z-A” Game Announced for Switch in 2025',
      linkUrl: 'http://localhost:3000/blog/post1',
      category: 'Nintendo',
      date: 'Feb 28,2024',
      content:
        'The Pokémon Company International announced a new game titled Pokémon Legends Z-A that will be released in 2025 for Nintendo Switch. The game news was announced during the Pokémon Presents stream on February 27th, known as Pokémon Day. The game’s official website describes the game as a new adventure within Lumiose City, where an urban redevelopment plan is underway to shape the city into a place that belongs to both people and Pokémon. The website also confirms that the game will be released simultaneously worldwide in 2025.',
    },
    {
      id: 2,
      imageUrl: '/images/ff7.png',
      title:
        'Final Fantasy VII Rebirth and how it revisits the twist that changed video game history',
      linkUrl: '#x',
      category: 'Square Enix',
      date: 'Feb 29,2024',
      content:
        'Predecessor Final Fantasy VI, for instance, has sold 3.8 million copies worldwide; to date, Final Fantasy VII has sold 14.4 million. It has inspired a CGI-animated feature film sequel; a range of middling spin-off games; and most recently, a long-anticipated project to remake the original title as a trilogy, using the full high-fidelity might of modern video game technology. The second of that trilogy, Final Fantasy VII Rebirth, is released today.',
    },
    {
      id: 3,
      imageUrl: '/images/p3r.png',
      title:
        'Persona 3 Reload Becomes Fastest-Selling Game in Atlus History With 1 Million Sales',
      linkUrl: '#',
      category: 'Atlus',
      date: 'Feb 13,2024',
      content:
        'Persona 3 Reload is described as “a captivating reimagining of the genre-defining RPG, reborn for the modern era.” Rumors of this games existence floated around for a long time but were mostly shunned as fake until the fire was stoked by a snippet of the games supposed trailer leaked a few months ago. Prior to its debut in the Xbox Showcase, the official ATLUS accounts posted the trailer a few days early which also contained the release date. The posts were quickly taken down, but not before it was reposted and spread throughout the community.',
    },
    {
      id: 4,
      imageUrl: '/images/polarblack.png',
      title: 'The Polar Bear Game is the best game ever.',
      linkUrl: '#',
      category: 'Sub Heading',
      date: 'Feb 13,2024',
      content:
        'The Polar Bear Game" is an YESSSSS adventure set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. "The Polar Bear Game" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife.',
    },
    {
      id: 5,
      imageUrl: '/images/dragon.jpg',
      title: 'Like a Dragon: Infinite Wealth sold a million copies worldwide',
      linkUrl: '#',
      category: 'RGG',
      date: 'March 1,2024',
      content:
        "Kiryu and friends continue to be popular as Like a Dragon: Infinite Wealth has cracked a million sales one week after its release, as revealed by publisher Sega and developer Ryu Ga Gotoku Studio. This combines digital and physical sales around the globe. This makes Like a Dragon: Infinite Wealth the fastest-selling series entry to date. Predecessor Yakuza: Like a Dragon, which came out in January 2020, sold 1.8 million copies by December 2023, making Infinite Wealth’s pace absolutely rapid by comparison.",
    },
    {
      id: 6,
      imageUrl: '/images/ssquad.png',
      title: 'The Joker joins Suicide Squad: Kill the Justice League at the end of March',
      linkUrl: '#',
      category: 'Rocksteady',
      date: 'March 4,2024',
      content:
        "The first season of Suicide Squad: Kill the Justice League will go live on March 28, and as promised it will see the arrival of one of DC's most infamous villains: The Joker. The date was revealed on Twitter in a very straightforward, un-Joker-like announcement: Get ready for Season 1! The jokes are coming March 28, HA! That sounds more like a triumphant in your face, Batfink! than the maniacal laughter the Joker is famed for, although given the events of Suicide Squad (which we won't get into for spoiler reasons) I suppose that might be appropriate.",
    },
    // more posts
  ];

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <div class="swiper">
          <div class="swiper-wrapper">
            {posts.map((post) => (
              <div key={post.id} className="swiper-slide">
                <Slide post={post} />
              </div>
            ))}
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </section>
  );
}

function Slide({ post }) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={post.linkUrl}>
          <Image src={post.imageUrl} width={600} height={500} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="catagory">
          <Link href={post.linkUrl} className="text-blue-300">
            {post.category}
          </Link>
          <Link href={post.linkUrl} className="text-white-600">
            {' '}
            - {post.date}
          </Link>
        </div>
        <div className="title">
          <Link
            href={post.linkUrl}
            className="text-3xl md:text-6xl font-bold text-white-800 hover:text-gray-600"
          >
            {post.title}
          </Link>
        </div>
        <p className="text-white-500 py-3">{post.content}</p>
        <Author></Author>
      </div>
    </div>
  );
}
