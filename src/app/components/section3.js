"use client";
import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

import { useEffect } from 'react';
import Swiper from 'swiper';

export default function Section3() {

useEffect(() => {const mySwiper = new Swiper('.swiper1', {slidesPerView:2});}, []);

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
  ]

return(
    <section className="py-16">
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Most Popular</h1>

                <div class="swiper1">

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
  )
}

function Slide({ post }) {
  return (
    <div className="grid">
      <div className="image">
        <Link href={post.linkUrl}>
          <Image src={post.imageUrl} width={600} height={400} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category">
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
            className="text-3xl md:text-4xl font-bold text-white-800 hover:text-gray-600"
          >
            {post.title}
          </Link>
        </div>
        <p className="text-white-500 py-3">{post.content}</p>
        <Author />
      </div>
    </div>
  )
}