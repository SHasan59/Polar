"use client";
import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

import { useEffect } from 'react';
import Swiper from 'swiper';

export default function section3() {

    useEffect(() => {const mySwiper = new Swiper('.swiper1', {slidesPerView:2});}, []);
    
    return(
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Most Popular</h1>
    
                    <div class="swiper1">
    
                        <div class="swiper-wrapper">
    
                            <div class="swiper-slide">{Slide()}</div>
                            <div class="swiper-slide">{Slide()}</div>
                            <div class="swiper-slide">{Slide()}</div>
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

function Slide(){
    return (
        <div className="grid">
            <div className="image">
                <Link href={"#"}><Image src={"/images/polarblack.png"} width={600} height={400} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="catagory">
                    <Link href={"#"} className="text-blue-300">Sub Heading</Link>
                    <Link href={"#"} className="text-white-600"> - Feb 13,2024</Link>
                </div>
                <div className="title">
                    <Link href ={"#"} className="text-3xl md:text-4xl font-bold text-white-800 hover:text-gray-600">The Polar Bear Game is the best games ever.</Link>
                </div>
                <p className="text-white-500 py-3">
                The Polar Bear Game" is an enthralling adventure set in the vast and unforgiving Arctic landscape, placing players in the furry paws of a courageous polar bear protagonist. 
                As they navigate through icy terrain and face the harsh elements, players must overcome a series of challenges, from evading dangerous predators to solving puzzles and unraveling the mysteries of the Arctic wilderness. 
                With stunning visuals and immersive storytelling, the game offers an unforgettable experience that not only entertains but also educates players about the importance of environmental conservation and the delicate balance of ecosystems. 
                "The Polar Bear Game" promises an exhilarating journey where survival instincts and environmental awareness are key to success, inviting players to embark on an epic quest that celebrates the wonders of nature and the resilience of Arctic wildlife.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}