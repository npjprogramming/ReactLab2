import { ViewfinderCircleIcon } from '@heroicons/react/24/solid'

const menuItems = [

    {

        title: 'Home',
        href: '/',

    },
    {

        title: 'Classes',
        href: '/classes',

    },
    {

        title: 'Web Development',
        href: '/webdev',

    },
    {

        title: 'Linux',
        href: '/linux',

    },
    {

        title: 'Algorithms',
        href: '/algorithms',

    },

]

export default function NavBar() {

    return (
    <div className="flex justify-between bg-neutral-600">

        <ViewfinderCircleIcon className="m-2 p-2 h-12 w-12 text-sky-300"/>

        <div className="flex justify-end bg-neutral-300">

            {menuItems.map((item, index) => ( 
            
                <a key={index} href={item.href} className="transform px-4 py-2 m-2 rounded-lg text-neutral-50 hover:bg-neutral-700 hover:scale-105">
                    {item.title}
                </a>
        
            ))}

        </div>
    </div>

    );
    
}