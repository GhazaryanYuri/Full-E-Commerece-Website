<script setup>
import { ref, reactive } from 'vue';
import PlayMarket from '@/assets/images/play-market.png'
import AppStore from '@/assets/images/app-store.png'
import QR from '@/assets/images/qr.png'
import FacebookIcon from '@/components/icons/facebook.svg'
import Twitter from '@/components/icons/twitter.svg'
import InstagramIcon from '@/components/icons/instagram.svg'
import LinkedinIcon from '@/components/icons/linkedin.svg'



const messageData = reactive({
    title: ref('Exclusive'),
    subtitle: ref('Subscribe'),
    message: ref('Get 10% off your first order'),
    inputPlaceholder: ref('Enter your email')
})

const supportData = reactive({
    title: ref('Support'),
    address: ref('111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.'),
    email: ref('exclusive@gmail.com'),
    phoneNumber: ref('+88015-88888-9999')
})

const accountPrivacy = reactive({
    title: ref('Support'),
    links: [
        {
            linkName: 'My Account',
            link: '/Full-E-Commerece-Website/my-account'
        },
        {
            linkName: 'Login / Register',
            link: '/Full-E-Commerece-Website/sign-up'
        },
        {
            linkName: 'Cart',
            link: '/Full-E-Commerece-Website/cart'
        },
        {
            linkName: 'Wishlist',
            link: '/Full-E-Commerece-Website/wishlist'
        },
        {
            linkName: 'Shop',
            link: '/Full-E-Commerece-Website/shop'
        }
    ]
})

const quickLink = reactive({
    title: ref('Quick Link'),
    links: [
        {
            linkName: 'Pivacy Policy',
            link: '/Full-E-Commerece-Website/pivacy-policy'
        },
        {
            linkName: 'Terms Of Use',
            link: '/Full-E-Commerece-Website/terms'
        },
        {
            linkName: 'FAQ',
            link: '/Full-E-Commerece-Website/faq'
        },
        {
            linkName: 'Contact',
            link: '/Full-E-Commerece-Website/contact'
        }
    ]
})

const socialLinks = reactive([
    {
        icon: FacebookIcon,
        link: '/Full-E-Commerece-Website/home'
    },
    {
        icon: Twitter,
        link: '/Full-E-Commerece-Website/home'
    },
    {
        icon: InstagramIcon,
        link: '/Full-E-Commerece-Website/home'
    },
    {
        icon: LinkedinIcon,
        link: '/Full-E-Commerece-Website/home'
    },
])

const currentDate = ref(new Date().getFullYear())
</script>
<template>
    <footer class="w-full min-h-[440px] gap-2 flex justify-center items-center bg-black flex-wrap max-xl:h-auto">
        <div
            class="w-full min-h-[236px] flex justify-center items-start flex-wrap gap-[87px] text-[#fafafa] max-md:gap-4 max-sm:flex-col max-sm:px-4 max-sm:py-5">
            <ul class="w-auto h-auto flex flex-col gap-6">
                <li class="flex flex-col gap-6 text-[#fafafa]">
                    <h1 class="text-2xl font-bold">{{ messageData.title }}</h1>
                    <h2 class="text-xl font-medium">{{ messageData.subtitle }}</h2>
                </li>
                <li class="flex flex-col gap-3 relative">
                    <p class="text-base text-[#fafafa]">{{ messageData.message }}</p>
                    <input type="text" :placeholder="messageData.inputPlaceholder" class="py-3 pl-4 pr-12 bg-transparent border-[#fafafa] focus:outline-none focus:ring-0 border-2 rounded-[4px]
                        max-sm:w-[180px] max-sm:text-sm">
                    <button class="absolute top-[57%] right-3 w-6 h-6 max-sm:right-6 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </li>
            </ul>
            <ul class="max-w-[180px] h-auto flex flex-col gap-6">
                <li>
                    <h1 class="text-[#FAFAFA] font-medium text-xl">
                        {{ supportData.title }}
                    </h1>
                </li>
                <li class="flex flex-col gap-4">
                    <p class="text-base font-normal">{{ supportData.address }}</p>
                    <p class="text-base font-normal">{{ supportData.email }}</p>
                    <p class="text-base font-normal">{{ supportData.phoneNumber }}</p>
                </li>
            </ul>
            <ul class="flex flex-col gap-6">
                <li>
                    <h1 class="text-[#FAFAFA] font-medium text-xl">{{ accountPrivacy.title }}</h1>
                </li>
                <li class="flex flex-col gap-4">
                    <RouterLink v-for="link in accountPrivacy.links" :to="link.link"
                        class="text-base font-normal hover:opacity-75 text-[#FAFAFA]">{{ link.linkName }}
                    </RouterLink>
                </li>
            </ul>
            <ul class="flex flex-col gap-6">
                <li>
                    <h1 class="text-[#FAFAFA] font-medium text-xl">{{ accountPrivacy.title }}</h1>
                </li>
                <li class="flex flex-col gap-4">
                    <RouterLink v-for="link in quickLink.links" :to="link.link"
                        class="text-base font-normal hover:opacity-75 text-[#FAFAFA]">{{ link.linkName }}
                    </RouterLink>
                </li>
            </ul>
            <ul class="flex flex-col gap-6">
                <li>
                    <h1 class="text-[#FAFAFA] font-medium text-xl">Download App</h1>
                </li>
                <li class="flex flex-col gap-2">
                    <p class="text-xs">Save $3 with App New User Only</p>
                    <div class="py-[2px] grid grid-cols-2 rounded-2xl items-center">
                        <!-- QR Code -->
                        <div class="w-20 h-20">
                            <img :src="QR" alt="QR Code" class="w-full h-full object-cover object-center" />
                        </div>

                        <!-- Download Buttons -->
                        <div class="flex flex-col justify-center gap-1">
                            <RouterLink to="/Full-E-Commerece-Website/home" class="block">
                                <img :src="PlayMarket" alt="Get it on Google Play" class="w-[104px] h-9 max-w-xs" />
                            </RouterLink>
                            <RouterLink to="/Full-E-Commerece-Website/home" class="block">
                                <img :src="AppStore" alt="Download on the App Store" class="w-[104px] h-10 max-w-xs" />
                            </RouterLink>
                        </div>
                    </div>
                </li>
                <li class="flex gap-6">
                    <RouterLink v-for="social in socialLinks" :to="social.link" class="w-6 h-6">
                        <img :src="social.icon" :alt="social.link" class="w-full h-full object-cover object-center">
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div
            class="w-full min-h-10 border-t border-t-[#3D3D3D] pt-5 flex justify-center max-lg:pt-0 max-lg:items-center text-center">
            <p class="text-[#3D3D3D]">
                &copy; Copyright Rimel {{ currentDate }}. All right reserved
            </p>
        </div>
    </footer>
</template>