const menuItems = [

    {

        title: 'Home',
        href: '/',

    },
    {

        title: 'About',
        href: '/about',

    },
    {

        title: 'Contact',
        href: '/contact',

    },
    {

        title: 'Service',
        href: '/service',

    },
    {

        title: 'Product',
        href: '/product',

    },

]

export default() => {

    return (

    <div className="flex justify-end bg-neutral-300">

        {menuItems.map((item) => (
            
            <a href={item.href} className="transform px-4 py-2 m-2 rounded-lg bg-neutral-600 text-neutral-50 hover:bg-neutral-700 hover:scale-105">
                {item.title}
            </a>
        
        ))}

    </div>

    );
    
}