import Image from "next/image";
import Link from "next/link";

const authors = [
  { id: 1, name: "Polar", image: "/group2.jpg", link: "#", bio: "News Reporter" },
  { id: 2, name: "Test", image: "/images/#.png", link: "*", bio: "Placeholder" },
]

export default function Author({ authorId }) {
  return (
    <div className="author flex py-5">
      {authors
        .filter((author) => author.id === authorId)
        .map((author) => (
          <div key={author.id || author.name} className="author-item flex my-2">
            <Image
              src={author.image || "/images/default-avatar.png"}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center px-4">
              <Link href={author.link || "#"} className="text-md font-bold text-white hover:text-gray-600">
                {author.name}
              </Link>
              <span className="text-sm text-blue-300">{author.bio}</span>
            </div>
          </div>
        ))}
    </div>
  )
}