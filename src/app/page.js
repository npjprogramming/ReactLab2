import Image from 'next/image';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import PageTitle from './components/PageTitle';
import PageCard from './components/PageCard';
import Footer from './components/Footer';
import MyTable from './components/MyTable'

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://ipmdribtzjpprqflymjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbWRyaWJ0empwcHJxZmx5bWp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTg1MDEzMiwiZXhwIjoyMDE1NDI2MTMyfQ.F7PfkbQvyBos3JaoOgNTk2QjyoMPi-4GQI08s7tj7A4')

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

        <PageCard title="Web Development" subtitle="CSCI-031" description="Beginning foundations of building websites. Languages Used - HTML, CSS, JavaScript"/>
        <PageCard title="Linux" subtitle="CSCI-025" description="Beginner level Linux commands and distro installation. Languages Used - Linux"/>
        <PageCard title="Algorithms" subtitle="CSCI-020" description="Beginner programming algorithms. Languages Used - Golang"/>

      </div>

      <Footer />

    </div>

  )
  
}