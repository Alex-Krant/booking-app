interface StudioStepsNavigationProps {
  currentStep: number;
}

export function StudioStepsNavigation({ currentStep }: StudioStepsNavigationProps) {
  const steps = [
    { number: 1, title: "Formula" },
    { number: 2, title: "Studio choice" },
    { number: 3, title: "Date and time" },
    { number: 4, title: "Additional services" },
    { number: 5, title: "Payment" },
  ];

  return (
    <div className="sticky top-0 bg-white z-40 border-b">
      <div className="max-w-[1300px] mx-auto p-6 py-3">
        <div className="hidden lg:flex relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex-1 w-1/5 p-3 text-center rounded-full relative z-10 ${
                step.number === currentStep
                  ? "text-orange-500 font-bold"
                  : step.number < currentStep
                  ? "text-black/70"
                  : "cursor-not-allowed text-black/40"
              }`}
            >
              <div className="text-sm">{step.number}. {step.title}</div>
            </div>
          ))}
          <div
            className="bg-orange-500/10 w-1/5 rounded-full h-full absolute transition-all"
            style={{ left: `${(currentStep - 1) * 20}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
