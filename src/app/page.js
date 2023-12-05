import Image from 'next/image';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import PageTitle from './components/PageTitle';
import PageCard from './components/PageCard';
import Footer from './components/Footer';
import MyTable from './components/MyTable'

export const revalidate = 0

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Home"/>

      <div className="text-center p-5 m-5 border border-solid border-black rounded-lg bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-200">
        <div className="p-5 m-5">
          <div className="text-lg font-bold underline">
            <PageContent content="Greetings!"/>
          </div>
          <PageContent content="This website will be used to show what I learned over my semester at Butte taking web development, linux, and an algorithms class and what I found interesting from each."/>
        </div>
        
      </div>

      {/*<MyTable />*/}

      <div className="transform flex min-h-screen justify-between items-center h-screen m-10">

        <PageCard title="Web Development" subtitle="CSCI-031" description="Beginning foundations of building websites."/>
        <PageCard title="Linux" subtitle="CSCI-025" description="Beginner level Linux commands and distro installation."/>
        <PageCard title="Algorithms" subtitle="CSCI-020" description="Beginner level programming algorithms primarily."/>

      </div>

      <Footer />

    </div>

  )
  
}