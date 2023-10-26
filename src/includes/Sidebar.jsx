import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
    <aside className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">
    <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className="space-y-2 pb-2">
                <li>
                    <form action="#" className="lg:hidden">
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                        </div>
                        <input type="text" name="email" id="mobile-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600  block w-full pl-10 p-2.5" placeholder="Search"/>
                    </div>
                    </form>
                </li>
                <Link to="/dashboardmentor">
                <li>
                    <a href="#" className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group">
                    <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Mentor</span>
                    </a>
                </li>
                </Link>
                <Link to="/dashboardjadwal">
                <li>
                    <a href="#" target="_blank" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Jadwal</span>
                    </a>
                </li>
                </Link>
                <Link to="/dashboarduser">
                <li>
                    <a href="#" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                    <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
                    </a>
                </li>
                </Link>
            </ul>
            <Link to='/'>
            <div className="space-y-2 pt-2">
                <a href="#" target="_blank" className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2">
                    <svg className='w-6 h-6 text-gray-500' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.86 5.62695H21.89C20.1696 5.6296 18.5203 6.31419 17.3038 7.53073C16.0872 8.74727 15.4027 10.3965 15.4 12.1169V25.597H23.38C23.3887 24.0243 24.0176 22.5186 25.13 21.407C26.2529 20.279 27.7772 19.6424 29.3688 19.6367C30.9603 19.6311 32.4892 20.257 33.62 21.377L39.61 27.3369C39.62 27.3469 39.62 27.3469 39.62 27.3569C39.9257 27.6633 40.1973 28.002 40.43 28.3669C40.5396 28.538 40.6398 28.7149 40.73 28.8969L40.737 28.912C40.6453 28.7245 40.5428 28.5425 40.43 28.3669C40.5474 28.553 40.6545 28.7452 40.751 28.9429C40.807 29.0429 40.851 29.1549 40.896 29.2619C40.9779 29.4461 41.0493 29.6347 41.11 29.8269C41.0534 29.644 40.9867 29.4644 40.91 29.2889C40.932 29.3419 40.962 29.389 40.982 29.447C41.032 29.577 41.072 29.6969 41.112 29.8269C41.2931 30.3994 41.3842 30.9965 41.382 31.597C41.3826 32.1834 41.295 32.7666 41.122 33.3269C41.0737 33.5151 41.0102 33.6991 40.932 33.877C40.8589 34.0582 40.7754 34.2352 40.682 34.407C40.5916 34.5792 40.4915 34.7462 40.382 34.907C40.1627 35.2432 39.9079 35.555 39.622 35.8369L33.642 41.847C33.0843 42.4092 32.4207 42.8551 31.6894 43.1589C30.9581 43.4628 30.1739 43.6185 29.382 43.6169C27.7973 43.6196 26.2761 42.9939 25.152 41.877C24.0247 40.7531 23.3884 39.2287 23.382 37.6369V37.597H15.402V51.067C15.402 52.7891 16.0854 54.4409 17.3022 55.6596C18.5191 56.8783 20.1698 57.5643 21.892 57.567H48.862C50.5842 57.5643 52.2349 56.8783 53.4517 55.6596C54.6685 54.4409 55.352 52.7891 55.352 51.067V12.1169C55.3493 10.3962 54.6645 8.74662 53.4475 7.53003C52.2305 6.31343 50.5808 5.62907 48.86 5.62695Z" fill="#B44C4F"/>
                        <path d="M15.4 33.601H19.4H30.567L28.467 35.719L27.974 36.219C27.94 36.253 27.916 36.293 27.885 36.329C27.8281 36.3908 27.775 36.4559 27.726 36.524C27.701 36.562 27.684 36.604 27.661 36.643C27.6161 36.717 27.576 36.7939 27.541 36.873C27.529 36.902 27.524 36.932 27.513 36.962C27.4775 37.0553 27.4494 37.1513 27.429 37.249C27.429 37.26 27.429 37.271 27.429 37.282C27.4081 37.3889 27.3957 37.4972 27.392 37.606H27.399C27.3949 37.8733 27.4448 38.1387 27.5457 38.3863C27.6465 38.6339 27.7963 38.8586 27.986 39.047C28.1712 39.232 28.391 39.3787 28.633 39.4786C28.875 39.5784 29.1342 39.6295 29.396 39.629C29.6597 39.6296 29.9208 39.5778 30.1642 39.4765C30.4077 39.3752 30.6286 39.2265 30.814 39.039L36.801 33.019C36.817 33.004 36.827 32.985 36.842 32.969C36.9154 32.8913 36.9823 32.8077 37.042 32.719C37.067 32.681 37.084 32.64 37.106 32.601C37.1511 32.5285 37.1912 32.453 37.226 32.375C37.247 32.325 37.258 32.275 37.275 32.219C37.3008 32.1479 37.3225 32.0755 37.34 32.002C37.3559 31.9081 37.3652 31.8132 37.368 31.718C37.368 31.681 37.379 31.646 37.379 31.609V31.603C37.3788 31.4713 37.3654 31.34 37.339 31.211C37.3139 31.0878 37.277 30.9672 37.229 30.851V30.838C37.18 30.7227 37.1205 30.6122 37.051 30.508L37.044 30.494C36.9707 30.3864 36.8873 30.2859 36.795 30.194L30.802 24.235C30.4259 23.8611 29.9167 23.652 29.3864 23.6535C28.856 23.655 28.348 23.867 27.974 24.243C27.6113 24.6081 27.4041 25.0995 27.396 25.614H27.388V25.654C27.3926 25.7506 27.4032 25.8468 27.42 25.942C27.42 25.977 27.42 26.012 27.432 26.047C27.444 26.082 27.446 26.091 27.452 26.113C27.4769 26.2192 27.5104 26.3232 27.552 26.424C27.558 26.439 27.568 26.452 27.575 26.467C27.6188 26.5688 27.671 26.6668 27.731 26.76C27.8041 26.8727 27.8882 26.9779 27.982 27.074L30.539 29.612H11.41C10.8795 29.612 10.3709 29.8227 9.99579 30.1978C9.62072 30.5729 9.40997 31.0816 9.40997 31.612C9.40997 32.1424 9.62072 32.6511 9.99579 33.0262C10.3709 33.4013 10.8795 33.612 11.41 33.612H15.402L15.4 33.601Z" fill="#B44C4F"/>
                    </svg>
                    <span className="ml-3">Logout</span>
                </a>
            </div>
            </Link>
        </div>
        </div>
    </div>
</aside>
</div>
  )
}

export default Sidebar