import Image from "next/image"
import Link from "next/link"

export default function author() {
return (
    <div className="author flex py-5">
        <Image src={"/images/fortpeely.png"} width={60} height={60} className="rounded-full"></Image>     
        <div className="flex flex-col justify-center px-4">
            <Link href={"#"} className="text-md font-bold text-white hover:text-gray-600">Gamal Fares</Link>
            <span className="text-sm text-blue-300">
                Homosapian
            </span>
        </div>
    </div>
)
}