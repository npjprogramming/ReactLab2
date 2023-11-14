import Image from 'next/image';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import PageTitle from './components/PageTitle';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://ipmdribtzjpprqflymjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwbWRyaWJ0empwcHJxZmx5bWp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTg1MDEzMiwiZXhwIjoyMDE1NDI2MTMyfQ.F7PfkbQvyBos3JaoOgNTk2QjyoMPi-4GQI08s7tj7A4')

export const revalidate = 0

export default async function Home() {

  const { data: cards, error } = await supabase.from('cards').select()

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
      <div className="transform flex justify-center items-center h-screen hover">

        {cards.map((card) => (

          <card title={card.title} subtitle={card.subtitle} description={card.description}/>
        
        ))}

      </div>

    </div>

  )
  
}