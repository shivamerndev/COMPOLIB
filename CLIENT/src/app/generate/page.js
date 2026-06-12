"use client"

import { useState } from 'react';
import { Zap, Globe } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function AIComponentStudio() {

    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = () => {
        if (prompt.trim()) {
            setPrompt("")
            setIsGenerating(true);
            // Simulate generation
            setTimeout(() => {
                setIsGenerating(false);
            }, 2000);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleGenerate();
        }
    };

    return (
        <ProtectedRoute>
            <div onMouseEnter={()=>handleKeyPress} className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-teal-900 flex flex-col items-center justify-center px-4 py-12">

                {/* Credits Button */}
                <div className="absolute top-4 cursor-pointer right-4">
                    <button className="inline-flex  items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-white font-semibold text-sm border border-purple-400/30">
                        <span>1450 Credits</span>
                    </button>
                </div>

                {/* Badge */}
                <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-700/40 bg-blue-950/40 backdrop-blur-sm">
                    <Globe size={18} className="text-blue-400" />
                    <span className="text-xs font-medium text-blue-300 tracking-wide">AI COMPONENT STUDIO</span>
                </div>
          
                <div className="text-center mb-12 max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="text-white">Build with </span>
                        <span className="text-cyan-400">AI</span>
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Describe your React component in plain English. 
                    </p>
                </div>

                {/* Main Card */}

                <div className="w-full max-w-2xl">

                    <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-blue-700/30 p-2 shadow-2xl focus-within:border-blue-500/60 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all duration-300">

                        {/* Input Area */}
                        <div className="relative w-full flex flex-col">
                            <textarea
                                type='text'
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Describe your component... (e.g. A sleek pricing table with 3 tiers)"
                                className="w-full min-h-[140px] bg-transparent border-none px-4 py-4 pb-20 text-white placeholder-slate-500 focus:outline-none focus:ring-0 resize-none text-lg leading-relaxed"
                            />

                            <div className="absolute bottom-2 right-2 flex items-center justify-end gap-4">
                         
                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating || !prompt.trim()}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-800 disabled:to-slate-900 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <Zap size={18} className={isGenerating ? "animate-pulse text-blue-300" : ""} />
                                    <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Decorative gradient orbs */}
                <div className="fixed top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10" />
            </div>
        </ProtectedRoute>
    );
}