const Sidebar = ({ steps }) => {
    if (!steps) return null;
    const convert = (step) => step.replace(/\s+/g, ' ').toLowerCase();
    return (
        <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6 h-fit pl-8 border-l border-border-soft">
            <h3 className="text-xl font-bold mb-4 text-text-main flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full shadow-[0_0_12px_rgba(129,140,248,0.5)]" />
                Quick Steps
            </h3>
            <div className="space-y-4">
                {steps?.map(({ name }, index) => (
                    <div key={index} className="flex gap-4 group">
                        <span className="text-xs font-bold text-brand-primary/40 group-hover:text-brand-primary transition-colors shrink-0 mt-1.5 font-mono">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <button
                            onClick={() =>
                                document.getElementById(`step-${index + 1}`).scrollIntoView({ behavior: "smooth" })
                            }
                            className="text-text-muted group-hover:text-text-main hover:cursor-pointer text-left transition-all font-medium text-sm leading-relaxed w-full"
                        >
                            {convert(name)}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar