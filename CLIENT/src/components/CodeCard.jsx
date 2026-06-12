export default function CodeEditorCard() {
  return (
    <div  className="h-screen  w-full flex  items-center justify-center">

      <div className="bg-slate-950 w-1/2 mt-8 mx-auto rounded-lg overflow-hidden shadow-xl font-mono">
        {/* Title Bar */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-3 border-b border-slate-700/50">
          {/* Traffic Light Buttons */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {/* Filename */}
          <span className="text-slate-400 text-sm font-medium">App.jsx</span>
        </div>

        {/* Code Content */}
        <div className="p-5 overflow-x-auto">
          <div className="text-slate-300 text-sm leading-relaxed space-y-2">
            {/* Line 1: Import */}
            <div>
              <span className="text-indigo-400">import</span>
              <span className="text-slate-300"> {'{ '}</span>
              <span className="text-slate-300">Button</span>
              <span className="text-slate-300">, </span>
              <span className="text-slate-300">Card</span>
              <span className="text-slate-300"> {'} '}</span>
              <span className="text-indigo-400">from</span>
              <span className="text-green-300"> 'virtual-ui-library'</span>
              <span className="text-slate-300">;</span>
            </div>

            {/* Empty line */}
            <div></div>

            {/* Line 3: Export */}
            <div>
              <span className="text-indigo-400">export</span>
              <span className="text-indigo-400"> default</span>
              <span className="text-indigo-400"> function</span>
              <span className="text-amber-300"> App</span>
              <span className="text-slate-300">() {'{'}</span>
            </div>

            {/* Line 4: Return */}
            <div>
              <span className="text-slate-400">return</span>
              <span className="text-slate-300"> (</span>
            </div>

            {/* Line 5: Card Component */}
            <div>
              <span className="text-slate-300">{'  <'}</span>
              <span className="text-green-300">Card</span>
              <span className="text-slate-300"> </span>
              <span className="text-pink-400">title</span>
              <span className="text-slate-300">=</span>
              <span className="text-red-300">"Dashboard"</span>
              <span className="text-slate-300">{'>'}</span>
            </div>

            {/* Line 6: Button Component */}
            <div>
              <span className="text-slate-300">{'    <'}</span>
              <span className="text-green-300">Button</span>
              <span className="text-slate-300"> </span>
              <span className="text-pink-400">text</span>
              <span className="text-slate-300">=</span>
              <span className="text-red-300">"hello"</span>
              <span className="text-slate-300">{'/>'}</span>
            </div>

            {/* Line 7: Closing Card */}
            <div>
              <span className="text-slate-300">{'  </'}</span>
              <span className="text-green-300">Card</span>
              <span className="text-slate-300">{'>'}</span>
            </div>

            {/* Line 8: Close return */}
            <div>
              <span className="text-slate-300">);</span>
            </div>

            {/* Line 9: Close function */}
            <div>
              <span className="text-slate-300">{'}'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}