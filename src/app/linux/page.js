import Image from 'next/image'
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';

export default function Home() {

  return (

    <div>

      <Navbar />

      <PageTitle title="Linux"/>

      <div className="flex flex-col items-center border border-solid inline-block border-black rounded-lg p-5 m-5">

        <div className="font-bold underline text-lg p-5 m-5">
          <PageContent content=" - Linux - "/>
        </div>
        <div className="text-center p-5">
          <PageContent content="The Linux operating system, created by Linus Torvalds in 1991, is a free and open-source operating system kernel. It is the core component of various Linux distributions used for servers, desktops, and embedded systems. Linux has gained popularity for its stability, security, and customization options."/>
        </div>

      </div>
      
      <div className="flex flex-col items-center border border-solid inline-block border-black rounded-lg p-5 m-5">

        <div className="font-bold underline text-lg p-5 m-5">
          <PageContent content=" - Distributions - "/>
        </div>

          <div className="text-center p-5 m-5">
            <PageContent content="Linux relies on user made distributions, often shortened to distros, that are developed by Linux users and often a distros development is geared towards a specific application or purpose. Linux distros are designed to meet a multitude of user needs, generally with an emphasis on specific features and uses for a distribution. Such as Ubuntu which is renowned for user-friendliness, and tends to be more popular among desktop users, while Debian prioritizes stability and serves as the foundation for many other distros. Other Linux distros like Red Hat Enterprise Linux (RHEL) targets enterprise environments and focus more on development support, or Arch Linux which appeals to users seeking customization and a minimalist development environment. In short, there are a wide variety of Linux distributions available entirely ."/>
          </div>

      </div>

      <Footer />

    </div>

  )
  
}