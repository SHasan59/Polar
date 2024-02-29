import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"


export default function section4() {

    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {/*Posts*/}
                        { Post() }
                        { Post() }
                        { Post() }
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Finance</h1>
                        {/*Posts*/}
                        { Post() }
                        { Post() }
                        { Post() }
                </div>
            </div>
        </section>
    )
}

function Post() {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"#"}><Image src={"/images/polarblack.png"} className="rounded" width={300} height={250} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="catagory">
                    <Link href={"#"} className="text-blue-300">Sub Heading</Link>
                    <Link href={"#"} className="text-white-600"> - Feb 13,2024</Link>
                </div>
                <div className="title">
                    <Link href ={"#"} className="text-xl font-bold text-white-800 hover:text-gray-600">The Polar Bear Game is the best games ever.</Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}
