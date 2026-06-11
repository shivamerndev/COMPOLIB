import React from 'react'
import { Star } from 'lucide-react'

const FeatureCard = ({title,icon}) => {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg cursor-pointer border-cyan-500/20  hover:bg-cyan-500/10 transition">
            <div className="w-10 h-10 shrink-0 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                {icon ? (
                    React.createElement(icon, { className: "w-6 h-6 text-cyan-400" })
                ) : (
                    <Star className="w-6 h-6 text-cyan-400" />
                )}
            </div>
            <div>
                <h3 className="text-white font-semibold">{title}</h3>
               {title.startsWith("Login") && <p className="text-cyan-300 text-sm">Secure OAuth to unlock all AI tools instantly.</p>}
            </div>
        </div>
    )
}

export default FeatureCard