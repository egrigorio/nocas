import { useState } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


function Home() {
    return (
    <div>
        <Header />
        
    </div>
    )
}

function Header(){
    return (
        <div className=''>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Contacto</li>
            </ul>
        </div>
    )
}


export default Home