import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import { PAGES_MANIFEST } from 'next/dist/shared/lib/constants';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Algorithms"/>

      <div className="flex flex-col items-center border border-solid inline-block border-black rounded-lg p-5 m-5">

        <div className="font-bold text-center underline text-lg p-5 m-5">
          <PageContent content=" - Algorithmic Programming - "/>
        </div>
          

        <div className="text-center p-5 m-5">
          <PageContent content="In programming, algorithms are generally a step-by-step set of instructions designed to accomplish a specific task or solve a particular problem. An algorithm can be thought of as a blueprint for the computer to follow and execute."/>
        </div>

      </div>

      <div className="flex flex-col text-center border border-solid inline-block border-black rounded-lg p-5 m-5">
          
          <div className="font-bold text-center underline text-lg p-5 m-5">
            <PageContent content=" - Initial Evaluation - "/>
          </div>

          <div className="text-center p-5 m-5">
            <PageContent content="When designing an algorithm in an attempt to streamline a process or application or complete a task it is always best to make sure you know exactly what has been asked to be created first. Evaluate what is being asked and attempt to formulate a way to make this work ideally before moving forward."/>
          </div>

      </div>

      <div className="flex flex-col text-center border border-solid inline-block border-black rounded-lg p-5 m-5">
          
          <div className="font-bold text-center underline text-lg p-5 m-5">
            <PageContent content=" - Charting - "/>
          </div>

          <div className="text-center p-5 m-5">
            <PageContent content="Often drafting flow and sequence charts can be a big part of the process towards the design of a good algorithm. This is done both arguably for yourself and others working on the project to help understand what is being built and also how each part is supposed to function in the greater whole of the algorithm."/>
          </div>

      </div>

      <Footer />
      
    </div>

  )
  
}