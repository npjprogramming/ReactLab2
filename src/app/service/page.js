import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Service"/>

      <div className="text-center p-5 m-5">

        <div className="font-bold underline p-5 m-5">
          <PageContent content="Our Services:"/>
        </div>

        <div className="p-5 m-5">
          <PageContent content="We can exponentially help to produce your companies' product."/>
        </div>

        <div className="p-5 m-5">
          <PageContent content="We are the leading producers of Product and are industry leaders in our field."/>
        </div>
      
      </div>

    </div>

  )
  
}