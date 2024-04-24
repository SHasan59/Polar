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
                        New “Pokémon Legends Z-A” Game Announced for Switch in 2025
                    </h1>
                    <p className="text-blue-100 text-xl text-center">The Pokémon Company announces a groundbreaking new addition to the Pokémon series that promises to redefine the way players experience the world of Pokémon.</p>

                    <div className="py-10">
                        <Image src="/images/pokemon z.png" width={900} height={600} alt="Placeholder Image" />
                    </div>
                    
                    <div className ="content text-gray-200 text-lg flex-col gap-3">
                        <p>
                            The Pokémon Company will release Pokémon Legends: Z-A, an ambitious new entry to the Pokémon video game series, on Nintendo Switch systems simultaneously worldwide in 2025. A new adventure awaits within Lumiose City, where an urban redevelopment plan is under way to shape the city into a place that belongs to both people and Pokémon. Please look forward to seeing it for yourself.
                        </p>
                        <br />
                        <p>
                            In Pokémon Legends: Z-A, players will embark on a journey like never before. As they explore the vibrant streets of Lumiose City, they will encounter a wide variety of Pokémon, both old and new. The game promises to deliver an immersive experience with stunning visuals and engaging gameplay mechanics. Get ready to dive into the world of Pokémon like never before!
                        </p>
                        <br />
                        <p>
                            The announcement of Pokémon Legends: Z-A has generated immense excitement among fans worldwide. With its innovative gameplay mechanics, captivating storyline, and stunning visuals, it's poised to become one of the most memorable entries in the Pokémon series. Stay tuned for more updates and prepare to embark on an unforgettable adventure in the world of Pokémon!
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}