import { Wrench, AlertCircle, Truck, ChevronRight } from 'lucide-react';

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
            const Icon = plan.icon;
            return (
              <div key={index} className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${plan.highlight ? 'md:scale-105' : ''}`}>
                {/* Price Header */}
                <div className={`${plan.bgColor} ${plan.textColor} py-6 px-6 flex items-center gap-4`}>
                  <Icon size={40} strokeWidth={1.5} />
                  <div>
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm">/mo</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="bg-white px-6 py-8">
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                    Repair is a specialized field that focuses fixing and restoring objects or systems
                  </p>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
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
          })}
        </div>
      </div>
    </section>
  );
}