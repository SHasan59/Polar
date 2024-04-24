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
                        Final Fantasy VII Rebirth and how it revisits the twist that changed video game history
                    </h1>
                    <p className="text-blue-100 text-xl text-center">Final Fantasy VII Rebirth, the highly anticipated remake of the iconic title, is set to redefine the gaming landscape with its groundbreaking visuals and immersive storytelling.</p>

                    <div className="py-10">
                        <Image src="/images/ff7.png" width={900} height={600} alt="Placeholder Image" />
                    </div>
                    
                    <div className ="content text-gray-200 text-lg flex-col gap-3">
                        <p>
                            Final Fantasy VII has left an indelible mark on the gaming industry, with over 14.4 million copies sold worldwide. Its impact extends beyond sales figures, inspiring a CGI-animated feature film sequel and a range of spin-off games. Now, with Final Fantasy VII Rebirth, fans can experience the beloved story in a whole new light.
                        </p>
                        <br />
                        <p>
                            The remake promises to leverage modern technology to deliver a truly immersive experience. From the bustling streets of Midgar to the epic battles against the forces of Shinra, players will rediscover the magic of Final Fantasy VII in stunning detail. With enhanced graphics and revamped gameplay mechanics, Final Fantasy VII Rebirth is poised to captivate both longtime fans and newcomers alike.
                        </p>
                        <br />
                        <p>
                            As anticipation for Final Fantasy VII Rebirth reaches a fever pitch, fans around the world eagerly await its release. With each new trailer and gameplay reveal, excitement continues to build, setting the stage for what promises to be an unforgettable gaming experience. Get ready to embark on a journey through Midgar like never before and immerse yourself in the epic tale of Cloud Strife and the fight against tyranny.
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}