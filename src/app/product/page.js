import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Product"/>

      <div className="text-center">

        <div className="font-bold p-5 m-5">
          <PageContent content="Our Products:"/>
       </div>

        <div className="p-5 m-5">
          <PageContent content=" - Product One"/>
        </div>

        <div className="p-5 m-5">
          <PageContent content=" - Product Two"/>
        </div>

      </div>
      
    </div>

  )
  
}