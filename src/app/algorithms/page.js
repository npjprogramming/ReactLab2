import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="algorithms"/>

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

      <div className="bg-green-500 p-8">
        <p></p>
      </div>
      
    </div>

  )
  
}