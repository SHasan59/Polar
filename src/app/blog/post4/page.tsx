import Image from "next/image";
import Format from "../../format/format";
import Author from "../../components/child/author";

export default function Page() {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author />
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-5xl text-center pb-5">
                        Like a Dragon: Infinite Wealth sold a million copies worldwide
                    </h1>
                    <p className="text-blue-100 text-xl text-center">Join Kazuma Kiryu and his companions on an epic journey in Like a Dragon: Infinite Wealth, the fastest-selling entry in the series with over a million copies sold worldwide.</p>

                    <div className="py-10">
                        <Image src="/images/dragon.jpg" width={900} height={600} alt="Like a Dragon: Infinite Wealth" />
                    </div>
                    
                    <div className="content text-gray-200 text-lg flex-col gap-3">
                        <p>
                            Kiryu and friends continue to be popular as Like a Dragon: Infinite Wealth has cracked a million sales one week after its release, as revealed by publisher Sega and developer Ryu Ga Gotoku Studio. This combines digital and physical sales around the globe. This makes Like a Dragon: Infinite Wealth the fastest-selling series entry to date. Predecessor Yakuza: Like a Dragon, which came out in January 2020, sold 1.8 million copies by December 2023, making Infinite Wealth’s pace absolutely rapid by comparison.
                        </p>
                        <br />
                        <p>
                            As the game continues to captivate players worldwide, it underscores the enduring popularity of the Yakuza series and the unique charm of its protagonist, Kazuma Kiryu. With its immersive storyline, dynamic combat system, and vibrant open-world setting, Like a Dragon: Infinite Wealth offers an unparalleled gaming experience that resonates with both longtime fans and newcomers to the series.
                        </p>
                        <br />
                        <p>
                            Join Kazuma Kiryu on an unforgettable journey through the streets of Kamurocho and beyond as he navigates the criminal underworld and confronts his past. With its blend of action, drama, and humor, Like a Dragon: Infinite Wealth delivers a gaming experience unlike any other, solidifying its place as a must-play title for fans of the Yakuza series and newcomers alike.
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}
