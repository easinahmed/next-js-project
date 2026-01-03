import { Wrench, AlertCircle, Truck } from 'lucide-react';
import PriceCard from '../components/PriceCard';

export default function Pricing() {
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
      highlight: true,
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
    }
  ];

  return (
    <section className="bg-gray-50 py-20 pt-115 px-6">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-4">Pricing Plane</p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Restoring functionality one
            <br />
            repair at a time
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            return <PriceCard key={index} plan={plan} />;
          })}
        </div>
      </div>
    </section>
  );
}


