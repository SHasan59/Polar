import Image from "next/image"
import Format from "../../format/format"
import Author from "../../components/child/author"

export default function Page() {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author></Author>
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">
                        New “Pokémon Legends Z-A” Game Announced for Switch in 2025
                    </h1>
                    <p className="text-white text-xl text-center">Paragraph</p>

                    <div className="py-10">
                        <Image src="/images/polarblack.png" width={900} height={600} alt="Placeholder Image" />
                    </div>
                    
                    <div className ="content text-white text-lg flex-col gap-4">
                        <p>
                            The Pokémon Company will release Pokémon Legends: Z-A, an ambitious new entry to the Pokémon video game series, on Nintendo Switch systems simultaneously worldwide in 2025. A new adventure awaits within Lumiose City, where an urban redevelopment plan is under way to shape the city into a place that belongs to both people and Pokémon. Please look forward to seeing it for yourself.
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}