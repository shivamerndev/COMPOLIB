import { Sparkles, Grid3x3 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StartBuildingUI() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center px-4">
      {/* Main Container */}
      <div className="max-w-2xl w-full text-center">
        {/* Eyebrow Label */}
        <div className="mb-8">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Start Building
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl md:text-6xl font-bold text-white leading-tight">
          Ready to generate
          <br />
          your new component?
        </h1>

        {/* Description */}
        <p className="mb-12 text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
          Sign in with Google, get 150 free AI Credits, and start generating
          production-ready UI components instantly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button */}
          <button onClick={() => router.push("/generate")} className="flex items-center justify-center gap-2 px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            <Sparkles size={20} className="stroke-current" />
            Get Started Free
          </button>

          {/* Secondary Button */}
          <button className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-400 hover:border-cyan-300 text-cyan-400 hover:text-cyan-300 font-semibold rounded-full transition-colors duration-200">
            <Grid3x3 size={20} className="stroke-current" />
            Components
          </button>
        </div>
      </div>
    </div>
  );
}