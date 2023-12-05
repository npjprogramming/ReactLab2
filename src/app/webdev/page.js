import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';


export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Web Development"/>

      <div className="flex justify-between items-center p-5 m-5">

        <div className="text-center border border-solid inline-block border-black rounded-lg p-5 m-5">
          <div className="font-bold text-lg">
            <PageContent content=" - HTML - "/>
          </div>
          <div>
            <PageContent content="Hypertext Markup Language is used for making the rough skeleton of a website."/>
          </div>
        </div>

        <div className="text-center border border-solid inline-block border-black rounded-lg p-5 m-5">
          <div className="font-bold text-lg">
            <PageContent content=" - CSS - "/>
          </div>
          <div>
            <PageContent content="Cascading Style Sheets are used to add styling to an HTML program."/>
          </div>
        </div>

        <div className="text-center border border-solid inline-block border-black rounded-lg p-5 m-5">
          <div className="font-bold text-lg">
            <PageContent content=" - JavaScript - "/>
          </div>
          <div>
            <PageContent content="JavaScript is used to add extra levels of interactability and function to a program."/>
          </div>
        </div>
        
      </div>

      <div className="text-center border border-solid inline-block border-black rounded-lg p-5 m-5">
        <div className="text-lg p-3 m-3 font-bold">
          <PageContent content=" - Web Development as a Whole - "/>
        </div>
        <div className="p-3 m-3">
          <PageContent content="Web development involves the creation of websites and web applications with HTML providing structure, CSS handling presentation, and JavaScript adding interactivity. The front-end development works together to deliver a usable user experience. On the server side, technologies like Node.js manage server logic and database interactions. The client-server architecture facilitates data exchange between the user's browser and the server, ensuring functionality and responsiveness of modern web experiences. Overall, web development is a collaborative process that combines front-end and back-end technologies to deliver dynamic and engaging online content."/>
        </div>
        
      </div>
      
      <Footer />

    </div>

  )
  
}