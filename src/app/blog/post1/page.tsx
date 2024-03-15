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
                        Your most unhaddadnadnaodanod anduisnfk sfdb fus fdsk fysdbfk
                    </h1>
                    <p className="text-gray-500 text-xl text-center">Paragraph</p>

                    <div className="py-10">
                        <Image src="/images/polarblack.png" width={900} height={600} alt="Placeholder Image" />
                    </div>

                    <div className="content text-gray-600 text-lg flex-col gap-4">
                        <p>
                            Content of wahtevrnakjnfakf
                        </p>
                    </div>
                </div>
            </section> 
        </Format>
    )
}