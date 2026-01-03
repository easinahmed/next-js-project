import React from "react";
import { ChevronRight } from "lucide-react";

type PricePlan = any;

const PriceCard = ({ plan }: { plan: PricePlan }) => {
  const Icon = plan.icon;

  return (
    <div className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${plan.highlight ? 'md:scale-105 shadow-lg' : ''}`}>
      {/* Price Header */}
      <div className={`${plan.bgColor} ${plan.textColor} py-6 px-6 flex items-center gap-4`}>
        {Icon ? <Icon size={40} strokeWidth={1.5} /> : null}
        <div>
          <span className="text-3xl font-bold">{plan.price}</span>
          <span className="text-sm">/mo</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="bg-white px-6 py-8">
        {/* Plan Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{plan.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
          Repair is a specialized field that focuses fixing and restoring objects or systems
        </p>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <ChevronRight className="text-orange-500 shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className={`w-full py-3 font-bold transition-colors ${plan.buttonStyle}`}>
          GET NOW <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default PriceCard;