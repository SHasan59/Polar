import Image from "next/image";
import Format from "../../format/format";
import Author from "../../components/child/author";

export default function Page() {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
             
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-5xl text-center pb-5">
                        Persona 3 Reload Becomes Fastest-Selling Game in Atlus History With 1 Million Sales
                    </h1>
                    <p className="text-blue-100 text-xl text-center">Experience the rebirth of a classic RPG in Persona 3 Reload, hailed as the fastest-selling game in Atlus history, with over 1 million copies sold worldwide.</p>

                    <div className="py-10">
                        <Image src="/images/p3r.png" width={900} height={600} alt="Persona 3 Reload" />
                    </div>
                    
                    <div className="content text-gray-200 text-lg flex-col gap-3">
                        <p>
                            Persona 3 Reload is described as “a captivating reimagining of the genre-defining RPG, reborn for the modern era.” Rumors of this game's existence floated around for a long time but were mostly shunned as fake until the fire was stoked by a snippet of the game's supposed trailer leaked a few months ago. Prior to its debut in the Xbox Showcase, the official ATLUS accounts posted the trailer a few days early which also contained the release date. The posts were quickly taken down, but not before it was reposted and spread throughout the community.
                        </p>
                        <br />
                        <p>
                            The announcement of Persona 3 Reload's success has sent shockwaves through the gaming industry, solidifying its place as a landmark title in Atlus's history. With its captivating storyline, innovative gameplay, and stunning visuals, the game has garnered widespread acclaim from critics and fans alike, further cementing Atlus's reputation as a leading developer in the RPG genre.
                        </p>
                        <br />
                        <p>
                            As Persona 3 Reload continues to fly off shelves and dominate sales charts, it serves as a testament to the enduring appeal of the Persona series and the dedication of its fanbase. With its rich narrative, complex characters, and engaging gameplay mechanics, Persona 3 Reload is sure to be remembered as a classic in the annals of gaming history, leaving an indelible mark on players for years to come.
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}