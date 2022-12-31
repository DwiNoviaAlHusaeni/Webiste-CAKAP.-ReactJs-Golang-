import Logo from './foto/Logo.png';
import Twitter1 from './foto/Twitter1.png';
import Facebook1 from './foto/Facebook1.png';
import Instagram1 from './foto/Instagram1.png';
import Plus from './foto/Plus.png';

export default function footer() {
    return (
        <footer>
            <div class="p-10 bg-gray-900 text-gray-200">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-3 gap-2">
                        <div class="mb-5">
                            <img src={Logo} class="h-10 w-30 mx-28 mt-20"/>
                            <div class="grid grid-cols-3 my-5 mx-32">
                                <img src={Twitter1} class="h-8 w-8 cursor-pointer"/>
                                <img src={Facebook1} class="h-8 w-8 cursor-pointer"/>
                                <img src={Instagram1} class="h-8 w-8 cursor-pointer"/>
                            </div>
                        </div>
                        <div class="mb-5 mt-14 ml-10">
                            <h4 class="pb-1">Mailing List</h4>
                            <p class="text-[#FCD79C] pb-2 text-xs">Sign up to our mailing list to get the latest updates about our <br></br> new products and promotions.</p>
                            <form class="flex flex-row flex-wrap">
                                <div class="border border-gray-400 py-1 px-2 rounded-sm w-80 flex items-center bg-white">
                                    <input type="email" placeholder='EMAIL ADDRESS' class="outline-none w-80 text-sm text-gray-600 "></input>
                                    <img src={Plus} class="h-5"/>
                                </div>
                            </form>
                        </div>
                        <div class="mb-5 ml-14 mt-14">
                            <ul class="text-gray-500">
                                <li class="pb-1 text-sm text-white hover:text-gray-400 cursor-pointer"><a href="#"></a>FAQ</li>
                                <li class="pb-1 text-sm text-white hover:text-gray-400 cursor-pointer"><a href="#"></a>TERMS & CONDITIONS</li>
                                <li class="pb-1 text-sm text-white hover:text-gray-400 cursor-pointer"><a href="#"></a>SPONSORS</li>
                                <li class="pb-1 text-sm text-white hover:text-gray-400 cursor-pointer"><a href="#"></a>PAYMENT INFO</li>
                                <li class="pb-1 text-sm text-white hover:text-gray-400 cursor-pointer"><a href="#"></a>CONTACT US</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
            <div class="w-full bg-gray-900 text-gray-500 px-10">
                <div>
                    <div class="text-center">
                        <div class="text-sm">
                            Copyright <strong><span>Company</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div> 
            </div>
        </footer>


    )
}