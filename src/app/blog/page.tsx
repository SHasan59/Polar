import Head from 'next/head'
import image from 'next/image'
import Format from '../format/format'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'

export default function Blog() {
    return (
        <Format>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </Format>
    )
}