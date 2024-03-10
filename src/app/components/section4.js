import Image from "next/image"
import Link from "next/link"
import Author from "./child/author"

export default function Section4() {

    const posts = [
        {
            id: 1,
            imageUrl: '/images/polarblack.png',
            title: 'The Polar Bear Game is the best games ever.',
            category: 'Sub Heading',
            date: 'Feb 13,2024',
        },
        {
            id: 2,
            imageUrl: '/images/polarblack.png',
            title: 'The Polar Bear Game is the best games ever.',
            category: 'Sub Heading',
            date: 'Feb 13,2024',
        },
        {
            id: 3,
            imageUrl: '/images/polarblack.png',
            title: 'The Polar Bear Game is the best games ever.',
            category: 'Sub Heading',
            date: 'Feb 13,2024',
        },
        {
            id: 4,
            imageUrl: '/images/polarblack.png',
            title: 'The Polar Bear Game is the best games ever.',
            category: 'Sub Heading',
            date: 'Feb 13,2024',
        },
        {
            id: 5,
            imageUrl: '/images/polarblack.png',
            title: 'The Polar Bear Game is the best games ever.',
            category: 'Sub Heading',
            date: 'Feb 13,2024',
        },
        {
            id: 6,
            imageUrl: '/images/polarblack.png',
            title: 'The Polar Bear Game is the best games ever.',
            category: 'Sub Heading',
            date: 'Feb 13,2024',
        },
    ]

    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        
                        {posts.filter(post => post.id <= 3).map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Finance</h1>
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
                <Author></Author>
            </div>
        </div>
    )
}
