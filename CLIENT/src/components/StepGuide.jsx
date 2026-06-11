export default function StepsGuide() {

  const steps = [
    {
      number: '01',
      title: 'Install Library',
      description: 'npm install virtual-ui-library to access all prebuilt UI components.'
    },
    {
      number: '02',
      title: 'Use Components',
      description: 'Import and customize with props for any design requirement.'
    },
    {
      number: '03',
      title: 'Generate with AI',
      description: 'Describe your UI and let AI build the component for you.'
    },
    {
      number: '04',
      title: 'Copy & Use',
      description: 'Paste the clean JSX code straight into your project.'
    }
  ];

  return (
    <div className="w-full px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-40 w-10/14 h-0.5 bg-linear-to-r from-teal-600/30 via-teal-600/50 to-teal-600/30"></div>
          
          {/* Steps container */}
          <div className="flex items-start justify-between relative">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center relative z-10 flex-1">
                {/* Step number button */}
                <div className="w-20 h-20 rounded-2xl border-2 border-teal-600 flex items-center justify-center mb-8 bg-slate-900/50">
                  <span className="text-2xl font-semibold text-teal-400">{step.number}</span>
                </div>
                
                {/* Step content */}
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}