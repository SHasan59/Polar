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
                        The Joker joins Suicide Squad: Kill the Justice League at the end of March
                    </h1>
                    <p className="text-blue-100 text-xl text-center">Get ready for chaos as The Joker makes his explosive debut in Suicide Squad: Kill the Justice League, arriving at the end of March in the highly anticipated first season.</p>

                    <div className="py-10">
                        <Image src="/images/ssquad.png" width={900} height={500} alt="Suicide Squad: Kill the Justice League" />
                    </div>
                    
                    <div className="content text-gray-200 text-lg flex-col gap-3">
                        <p>
                            The first season of Suicide Squad: Kill the Justice League will go live on March 28, and as promised it will see the arrival of one of DC's most infamous villains: The Joker. The date was revealed on Twitter in a very straightforward, un-Joker-like announcement: Get ready for Season 1! The jokes are coming March 28, HA! That sounds more like a triumphant in your face, Batfink! than the maniacal laughter the Joker is famed for, although given the events of Suicide Squad (which we won't get into for spoiler reasons) I suppose that might be appropriate.
                        </p>
                        <br />
                        <p>
                            The addition of The Joker to the Suicide Squad lineup marks a significant turning point in the game's narrative, promising unexpected twists and thrilling encounters as players navigate the chaotic streets of Metropolis. With his trademark blend of insanity and unpredictability, The Joker is sure to shake up the status quo and leave players on the edge of their seats as they battle against the forces of the Justice League.
                        </p>
                        <br />
                        <p>
                            As anticipation for The Joker's arrival reaches a fever pitch, fans eagerly await the chance to step into the shoes of their favorite DC antiheroes and wreak havoc on the streets of Metropolis. With its dynamic gameplay, stunning visuals, and immersive storyline, Suicide Squad: Kill the Justice League promises an exhilarating gaming experience that will leave players craving more. Get ready to join the Suicide Squad and unleash chaos like never before!
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}
