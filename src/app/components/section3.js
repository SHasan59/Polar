"use client";
import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

import { useEffect } from 'react';
import Swiper from 'swiper';

export default function Section3() {

    useEffect(() => {const mySwiper = new Swiper('.swiper1', { slidesPerView: 2 });}, []);

    const posts = [
        {
            id: 1,
            imageUrl: "/images/polarblack.png",
            title: "The Polar Bear Game is the best games ever.",
            linkUrl: "http://localhost:3000/blog/post1",
            category: "Sub Heading",
            date: "Feb 13,2024",
            content: "The Polar Bear Game\" is an enthralling UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUu set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. \"The Polar Bear Game\" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife."
        },
        {
            id: 2,
            imageUrl: "/images/polarblack.png",
            title: "The Polar Bear Game is the best games ever.",
            linkUrl: "http://localhost:3000/blog/post2",
            category: "Sub Heading",
            date: "Feb 13,2024",
            content: "The Polar Bear Game\" is an NOOOO adventure set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. \"The Polar Bear Game\" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife."
        },
        {
            id: 3,
            imageUrl: "/images/polarblack.png",
            title: "The Polar Bear Game is the best games ever.",
            linkUrl: "http://localhost:3000/blog/post3",
            category: "Sub Heading",
            date: "Feb 13,2024",
            content: "The Polar Bear Game\" is an YESSSSS adventure set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. \"The Polar Bear Game\" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife."
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Most Popular</h1>

                <div className="swiper1">
                    <div className="swiper-wrapper">
                        {posts.map(post => (
                            <div key={post.id} className="swiper-slide">
                                <Slide post={post} />
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </section>
    )
}

function Slide({ post }) {
    return (
        <div className="grid">
            <div className="image">
                <Link href={post.linkUrl}><Image src={post.imageUrl} width={600} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={post.linkUrl} className="text-blue-300">{post.category}</Link>
                    <span className="text-white-600"> - {post.date}</span>
                </div>
                <div className="title">
                    <Link href={post.linkUrl} className="text-3xl md:text-4xl font-bold text-white-800 hover:text-gray-600">{post.title}</Link>
                </div>
                <p className="text-white-500 py-3">
                    {post.content}
                </p>
                <Author />
            </div>
        </div>
    )
}