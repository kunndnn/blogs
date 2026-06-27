import { useState, useEffect } from "react";

export default function Image({ src, alt, styles }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = isOpen ? "hidden" : prevOverflow;

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`mt-4 rounded-xl shadow-lg w-full max-w-[20rem] md:max-w-md cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-xl ${styles ?? ""}`}
                onClick={() => setIsOpen(true)}
                loading="lazy"
            />

            {isOpen && (
                <div
                    className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-md mb-0"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-w-3xl max-h-[90vh] w-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-3 -right-3 bg-brand-primary text-white w-8 h-8 rounded-full hover:bg-brand-secondary transition cursor-pointer flex items-center justify-center text-sm font-bold shadow-lg z-10"
                        >
                            ✕
                        </button>

                        <img
                            src={src}
                            alt={alt}
                            className="rounded-xl shadow-2xl max-w-sm md:max-w-full max-h-[90vh] object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
