import Head from 'next/head';
import image from 'next/image';
import Format from '../format/format';

import Section2 from '../components/section2';

export default function Blog() {
  return (
    <div className="bg-black">
      <Format>
        
        <Section2></Section2>
       
      </Format>
    </div>
  )
}