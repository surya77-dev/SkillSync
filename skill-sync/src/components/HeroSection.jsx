// src/components/HeroSection.jsx
import HeroImage from '../assets/hero-skillsync.jpg'; // Replace with your uploaded image if needed


export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Skip the hassle. <span className="text-green-600">Sync</span> with talent that delivers.
          </h1>
          <p className="text-gray-600 text-lg font-poppins font-light leading-relaxed max-w-xl">
            SkillSync makes it simple — hire skilled freelancers or get discovered for jobs that match your talents, fast and hassle-free.
            </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={HeroImage}
            alt="Hero"
            className="rounded-xl shadow-md w-full max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
