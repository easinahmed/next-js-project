import CommonBanner from '@/components/CommonBanner'
import PriceCard from '@/components/PriceCard';
import { AlertCircle, Key, Truck, Wrench } from 'lucide-react';

const page = () => {
    const plans = [
    {
      name: "Stater Plan",
      price: "$19",
      icon: Wrench,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-transparent",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
      highlight: false,
      features: [
        "Repairing your problems",
        "Quality repair services you can count on",
        "Repairing with care, exceeding",
        "Trust us with your repair needs"
      ]
    },
    {
      name: "Basic",
      price: "$19",
      icon: AlertCircle,
      bgColor: "bg-orange-500",
      textColor: "text-white",
      iconBg: "bg-transparent",
      buttonStyle: "border-2 border-orange-500 bg-orange-500 text-white hover:bg-orange-600 hover:border-orange-600",
      highlight: false,
      features: [
        "Repairing your problems",
        "Quality repair services you can count on",
        "Repairing with care, exceeding",
        "Trust us with your repair needs"
      ]
    },
    {
      name: "Business",
      price: "$19",
      icon: Truck,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-transparent",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
      highlight: false,
      features: [
        "Repairing your problems",
        "Quality repair services you can count on",
        "Repairing with care, exceeding",
        "Trust us with your repair needs"
      ]
    },
    {
      name: "Premium",
      price: "$19",
      icon: AlertCircle,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-transparent",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
      highlight: false,
      features: [
        "Repairing your problems",
        "Quality repair services you can count on",
        "Repairing with care, exceeding",
        "Trust us with your repair needs"
      ]
    },
    {
      name: "Popular",
      price: "$19",
      icon: Truck,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-transparent",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
      highlight: false,
      features: [
        "Repairing your problems",
        "Quality repair services you can count on",
        "Repairing with care, exceeding",
        "Trust us with your repair needs"
      ]
    },
    {
      name: "Limited",
      price: "$19",
      icon: Wrench,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-transparent",
      buttonStyle: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
      highlight: false,
      features: [
        "Repairing your problems",
        "Quality repair services you can count on",
        "Repairing with care, exceeding",
        "Trust us with your repair needs"
      ]
    },
  ];
  return (
    <div className='bg-white'>
        <CommonBanner heading='Pricing' pageName='Pricing'/>
        <div className="grid grid-cols-1 container py-20 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {
            plans.map((plan, index)=>{
                return <PriceCard key={index} plan={plan}/>
            })
          }
        </div>
    </div>
  )
}

export default page