import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="About"/>

      <div className="text-center p-5 m-5">

        <div className="p-5 m-5">
          <PageContent content="Here at Company we are proud to be the lead innovators of Product!"/>
        </div>

        <div className="p-5 m-5">
          <PageContent content="Years of work here at Company have gone in to perfecting Product."/>
        </div>

      </div>

    </div>

  )
  
}