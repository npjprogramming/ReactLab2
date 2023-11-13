import Image from 'next/image';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import PageTitle from './components/PageTitle';
import Card from './components/PageCard';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Home"/>

      <div className="text-center p-5 m-5 border border-solid border-black rounded-lg bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-200">

        <div className="p-5 m-5">
          <PageContent content="Hello!"/>
        </div>
        
        <div className="p-5 m-5">
          <PageContent content="This website showcases our company and our product."/>
        </div>
        
        <div className="p-5 m-5">
          <PageContent content="We are very proud of our product and have made our product for many years!"/>
        </div>

      </div>
      <div className="flex justify-center items-center h-screen">

        <Card title="First Card" subtitle="WIP" description="This is currently a WIP."/>
        <Card title="Second Card" subtitle="Also a WIP" description="Also currently a WIP."/>
        <Card title="Third Card" subtitle="This is also a WIP" description="This might be a WIP."/>

      </div>

    </div>

  )
  
}