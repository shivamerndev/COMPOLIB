import { Zap} from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-slate-900" />
                </div>
                <span className="text-xl font-bold tracking-tight">VirtualUI</span>
            </div>

            {/* Nav Items */}
            <div className="flex items-center gap-4">
                <button className="text-gray-300 hover:text-white transition px-4 py-2 text-sm font-medium border border-gray-700 rounded-lg hover:border-cyan-400">
                    components
                </button>
                <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Generate AI Component
                </button>
            </div>
        </nav>
    )
}

export default Navbar