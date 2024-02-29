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
      imageUrl: '/images/polarblack.png',
      title: 'The Polar Bear Game is the best games ever.',
      linkUrl: '#x',
      category: 'Sub Heading',
      date: 'Feb 13,2024',
      content:
        'The Polar Bear Game" is an NOOOO adventure set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. "The Polar Bear Game" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife.',
    },
    {
      id: 3,
      imageUrl: '/images/polarblack.png',
      title: 'The Polar Bear Game is the best games ever.',
      linkUrl: '#',
      category: 'Sub Heading',
      date: 'Feb 13,2024',
      content:
        'The Polar Bear Game" is an YESSSSS adventure set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. "The Polar Bear Game" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife.',
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
