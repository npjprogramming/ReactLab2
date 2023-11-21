import Image from 'next/image';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import PageTitle from './components/PageTitle';
import PageCard from './components/PageCard';
import Footer from './components/Footer';

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
          <PageContent content="Hello!"/>
        </div>
        
        <div className="p-5 m-5">
          <PageContent content="This website will be used to show what I learned over my semester at Butte taking web development, linux, and an algorithms class and what I found interesting from each."/>
        </div>
        
      </div>

      <div className="transform flex justify-center items-center h-screen hover m-6">

        <PageCard title="Web Development" subtitle="Subtitle for Web Dev" description="Desc for Web Dev"/>
        <PageCard title="Linux" subtitle="Subtitle for Linux" description="Desc for Linux"/>
        <PageCard title="Algorithms" subtitle="Subtitle for Algorithms" description="Desc for Algorithms"/>

      </div>

      <div>
        <Footer />
      </div>

    </div>

  )
  
}