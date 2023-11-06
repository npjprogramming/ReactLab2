import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Contact"/>

      <div className="text-center">

        <div className="font-bold p-4 m-4">
          <PageContent content="Email:"/>
        </div>
        <div>
          <PageContent content="Company@businessemail.com"/>
        </div>

      </div>

    </div>

  )
  
}