import Image from 'next/image';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import PageTitle from './components/PageTitle';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Home"/>

      <div className="text-center p-5 m-5">

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

    </div>

  )
  
}