import Link from "next/link";

type CommonBannerProps = {
  pageName: string;
  heading: string
};

const CommonBanner = ({ pageName, heading }: CommonBannerProps) => {
  return (
    <div className="relative h-96 bg-gray-800 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/common-banner.png")',
          opacity: 0.6
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center px-6">
        <h1 className="text-5xl font-bold mb-4">{heading}</h1>
        <div className="flex items-center gap-2 text-lg">
          <Link href={"/"}>PixFix</Link>
          <span className="text-white/60">›</span>
          <span>{pageName}</span>
        </div>
      </div>
    </div>
  );
}

export default CommonBanner