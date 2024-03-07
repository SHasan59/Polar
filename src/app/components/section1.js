"use client";
import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

export default function Section1() {

    useEffect(() => {const mySwiper = new Swiper('.swiper', {});}, []);
    
    const bg = {
        background:"url('/gamal.jpg') no-repeat",
        backgroundPosition:"right"
    }
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
        // more posts
    ]
    
    return(
    <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

                <div class="swiper">

                    <div class="swiper-wrapper">
                        {posts.map(post => (
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
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={post.linkUrl}><Image src={post.imageUrl} width={600} height={500} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="catagory">
                    <Link href={post.linkUrl} className="text-blue-300">{post.category}</Link>
                    <Link href={post.linkUrl} className="text-white-600"> - {post.date}</Link>
                </div>
                <div className="title">
                    <Link href={post.linkUrl} className="text-3xl md:text-6xl font-bold text-white-800 hover:text-gray-600">{post.title}</Link>
                </div>
                <p className="text-white-500 py-3">
                    {post.content}
                </p>
                <Author></Author>
            </div>
        </div>
    )
}