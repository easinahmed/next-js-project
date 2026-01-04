import CommonBanner from "@/components/CommonBanner"
import { Check, Calendar} from 'lucide-react';

const page = ({params}:any) => {
    const {id} = params
  return (
    <div className="bg-white">
        <CommonBanner heading="Project Details" pageName="Project_Details"/>
       <section className="relative py-12 px-6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <img
                src="/project-details.png"
                alt="Plumbing project"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Info Card */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg h-fit">
              <div className="flex items-center gap-2 mb-6">
                <Calendar size={16} className="text-orange-500" />
                <span className="text-gray-600 text-sm">October 19, 2024</span>
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase mb-1">Client:</p>
                  <p className="text-gray-900 font-semibold">Nafzul islam bhuiyan</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase mb-1">Project:</p>
                  <p className="text-gray-900 font-semibold">Plumber</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-semibold uppercase mb-1">Category:</p>
                  <p className="text-gray-900 font-semibold">RepairTechs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Details</h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to the project page for RepairTechs' latest plumbing endeavor! At RepairTechs, we pride ourselves on delivering top-notch plumbing solutions tailored to meet our clients' needs with precision and expertise. Our Plumber Project is a testament to our commitment to excellence in every aspect of our work.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts ensur optimal functionality Rep services are maintaining Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues, replacing faulty parts, and ensuring optimal functionality. Repair services are essential for maintaining the longevity Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition. If two diagnosing issues
          </p>

          {/* Two Column Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop"
              alt="Plumbing work"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
              alt="Team working"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts ensur optimal functionality Rep services are maintaining Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition.
          </p>

          <p className="text-gray-600 mb-12 leading-relaxed">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts ensur optimal functionality Rep services are maintaining Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition.
          </p>
        </div>
      </section>

      {/* Overview & Challenge Section */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">Overview & Challenge</h2>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts ensur optimal functionality Rep services are maintaining Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition.
          </p>

          {/* Checklist Items */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Check className="text-orange-500 shrink-0 mt-1" size={20} />
              <span className="text-gray-900 font-bold text-sm uppercase">BRINGING BACK THE FUNCTIONALITY YOU NEED REPAIR MADE EASY, HASSLE-FREE SOLUTIONS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-orange-500 shrink-0 mt-1" size={20} />
              <span className="text-gray-900 font-bold text-sm uppercase">RELIABLE REPAIRS FOR A SEAMLESS EXPERIENCE TRUST US WITH YOUR REPAIR NEEDS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="text-orange-500 shrink-0 mt-1" size={20} />
              <span className="text-gray-900 font-bold text-sm uppercase">REPAIRING WITH CARE, EXCEEDING EXPECTATIONS QUALITY REPAIR SERVICES YOU CAN COUNT ON</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition It involves diagnosing issues replacing faulty parts ensur optimal functionality Rep services are maintaining Repair is a specialized field that focuses on fixing and restoring objects or systems back to their original working condition.
          </p>
        </div>
      </section>
    </div>
  )
}

export default page