import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

export default function Section4() {

    const posts = [
        {
            id: 1,
            imageUrl: '/images/fortnite.jpg',
            title: 'Fortnite: Battle Royale',
            authorId: 1,
            category: 'Battle Royale',
            date: 'July 25, 2017',
        },
        {
            id: 2,
            imageUrl: '/images/apex.jpg',
            title: 'Apex Legends: The Next Legend',
            authorId: 1,
            category: 'Battle Royale',
            date: 'Feb 4, 2019',
        },
        {
            id: 3,
            imageUrl: '/images/cod.jpg',
            title: 'Call of Duty: Modern Warfare',
            authorId: 1,
            category: 'First-Person Shooter',
            date: 'Oct 25, 2019',
        },
        {
            id: 4,
            imageUrl: '/images/minecraft.jpg',
            title: 'Minecraft: Java Edition',
            authorId: 1,
            category: 'Sandbox',
            date: 'May 17, 2009',
        },
        {
            id: 5,
            imageUrl: '/images/elden.jpg',
            title: 'Elden Ring: Shadow of the Frdtree',
            authorId: 1,
            category: 'Action RPG',
            date: 'Feb 25, 2022',
        },
        {
            id: 6,
            imageUrl: '/images/gta.jpg',
            title: 'Grand Theft Auto V: The Trilogy',
            authorId: 1,
            category: 'Action-Adventure',
            date: 'Sept 17, 2013',
        },
    ]

return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">FPS Shooter</h1>
                    <div className="flex flex-col gap-6">

                        {posts.filter(post => post.id <= 3).map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Open World</h1>
                    <div className="flex flex-col gap-6">

                        {posts.filter(post => post.id > 3).map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Post({ post }) {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"#"}>
                    <Image src={post.imageUrl} className="rounded" width={300} height={250} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="catagory">
                    <Link href={"#"} className="text-blue-300">{post.category}</Link>
                    <Link href={"#"} className="text-white-600"> - {post.date}</Link>
                </div>
                <div className="title">
                    <Link href={"#"} className="text-xl font-bold text-white-800 hover:text-gray-600">{post.title}</Link>
                </div>
                <Author authorId={post.authorId} />
            </div>
        </div>
    )
}