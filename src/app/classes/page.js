import Image from 'next/image';
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

export default async function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Classes"/>

      <div className="text-center p-5 m-5">

        <div className="border border-solid border-black rounded-lg p-5 m-5">
          <div className="text-lg font-bold underline">
            <PageContent content="Classes taken Winter Semester 2023:"/>
          </div>
          <div className="italic">
            <PageContent content=" - Web Development - "/>
          </div>
          <div className="italic">
            <PageContent content=" - Linux - "/>
          </div>
          <div className="italic">
            <PageContent content=" - Algorithms - "/>
          </div>
        </div>

        <div className="justify-center">
          <div className="text-lg font-bold underline p-5">
            <PageContent content=" - About - "/>
          </div>
          <div className="italic p-3">
            <PageContent content="Web Development"/>
          </div>
          <div className="text-sm p-1">
            <PageContent content="Started slow with learning simple things like HTML and CSS before moving in to more, 'advanced-beginner', things like Git, and putting our content on a server."/>
          </div>
          <div className="italic p-3">
            <PageContent content="Linux"/>
          </div>
          <div className="text-sm p-1">
            <PageContent content="Linux began with small simple little things like Linux distributions then we actually started installing distros and experimenting with what they can do."/>
          </div>
          <div className="italic p-3">
            <PageContent content="Algorithms"/>
          </div>
          <div className="text-sm p-1">
            <PageContent content="Started slow with learning simple things like HTML and CSS before moving in to more, 'advanced-beginner', things like Git, and putting our content on a server."/>
          </div>
        </div>

        <Footer />

      </div>

    </div>

  )
  
}