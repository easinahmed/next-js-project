import CommonBanner from '@/components/CommonBanner'
import image_1 from '@/public/project-image-1.png'
import image_2 from '@/public/project-image-2.png'
import image_3 from '@/public/project-image-3.png'
import Image from 'next/image'

const page = () => {

    const projects = [
        {
            id: 1,
            title: "Rail Frieght",
            image: image_1
        },
        {
            id: 2,
            title: "Duct Work Inspection",
            image: image_2
        },
        {
            id: 3,
            title: "Inspection Search",
            image: image_3
        },
        {
            id: 4,
            title: "Road Frieght",
            image: image_2
        },
        {
            id: 5,
            title: "Work Search",
            image: image_3
        },
        {
            id: 6,
            title: "Rail Frieght",
            image: image_1
        },
    ]
    return (
        <div className='bg-white'>
            <CommonBanner heading='Projects' pageName='Projects' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-20 gap-8 container max-w-6xl mx-auto">
                {
                    projects.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-lg h-56 sm:h-64 md:h-52 lg:h-64 hover:cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover w-full h-full"
                                />

                                <p
                                    className={
                                        `absolute bottom-5 left-0 w-0 opacity-0 overflow-hidden text-white font-bold text-lg sm:text-xl p-4 sm:p-5 bg-gray-800 border-r-4 border-orange-500 whitespace-nowrap transition-all duration-500 ease-in-out group-hover:w-[80%] group-hover:opacity-100 wrap-break-word`
                                    }
                                >
                                    {item.title}
                                </p>
                            </div>
                        )



                    })
                }
            </div>
        </div>
    )
}

export default page