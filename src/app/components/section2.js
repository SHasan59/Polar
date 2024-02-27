import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

export default function section2() {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
            <div className="grid md:grid-cols-2 md:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="item">
            <div className="immages">
                <Link href={"#"}><Image src={"/images/polarblack.png"}className="rounded" width={500} height={300} /></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="catagories">
                    <Link href={"#"} className="text-blue-300">Sub Heading</Link>
                    <Link href={"#"} className="text-white-600"> - Feb 13,2024</Link>
                </div>
                <div className="title">
                    <Link href ={"#"} className="text-xl font-bold text-white-800 hover:text-gray-600">The Polar Bear Game is the best games ever.</Link>
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