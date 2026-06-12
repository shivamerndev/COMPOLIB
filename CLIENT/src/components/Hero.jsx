import { Zap, Copy, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Hero = () => {

    const router = useRouter()

    const [copied, setCopied] = useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText('npm install compolib');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 py-12">
            {/* Badge */}
            <div className="inline-block mb-8">
                <div className="px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm">
                    <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        AI-POWERED REACT UI LIBRARY
                    </span>
                </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
                    Build React UI
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-linear-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                    Faster with AI
                </h1>
            </div>

            {/* Description */}
            <div className="text-center max-w-2xl mb-12">
                <p className="text-gray-400 text-lg mb-3">
                    Use prebuilt VirtualUI components or generate custom ones with AI.
                </p>
                <p className="text-gray-400 text-lg">
                    Copy clean JSX directly into your project in seconds.
                </p>
            </div>

            {/* Code Block */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 mb-12 backdrop-blur-sm max-w-md w-full">
                <div className="flex items-center justify-between">
                    <code className="text-cyan-300 text-sm sm:text-base font-mono flex-1">
                        $  npm install compolib
                    </code>
                    <button
                        onClick={copyCommand}
                        className="ml-4 p-2 hover:bg-slate-700/50 rounded transition"
                        title="Copy to clipboard"
                    >
                        <Copy className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                    </button>
                </div>
                {copied && (
                    <p className="text-xs text-cyan-400 mt-2">Copied!</p>
                )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
                <button onClick={() => router.push("/generate")} className="flex-1 sm:flex-none bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 group">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                <button onClick={() => router.push("/generate")} className="flex-1 sm:flex-none border border-slate-600 hover:border-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Generate AI Component
                </button>
            </div>
        </div>
    )
}

export default Hero