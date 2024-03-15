import Head from 'next/head';
import image from 'next/image';
import Format from '../format/format';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section4 from '../components/section4';


export default function Blog() {
  return (
    <div className="bg-black">
      <Format>
      <Section1></Section1>
        <Section2></Section2>
         
        <Section4></Section4>
       
      </Format>
    </div>
  )
}