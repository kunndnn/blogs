import { useEffect, useState } from "react";

export default function Image({ src, alt, styles }) {
    const [isOpen, setIsOpen] = useState(false);
    // ✅ Lock scroll when modal is open

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = isOpen ? "hidden" : prevOverflow;

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    return (
        <>
            {/* Thumbnail */}
            <img
                src={src}
                alt={alt}
                className={`mt-4 rounded shadow-md w-full max-w-[20rem] md:max-w-md cursor-pointer ${styles ?? ""}`}
                onClick={() => setIsOpen(true)}
                loading="lazy"
            />

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 backdrop-blur-sm mb-0"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Content wrapper so clicks on X don’t trigger modal close */}
                    <div
                        className="relative max-w-3xl max-h-[90vh] w-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-3 -right-3 bg-brand-primary/80 text-white px-3 py-1 rounded-full hover:bg-brand-secondary transition cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <img
                            src={src}
                            alt={alt}
                            className="rounded shadow-lg max-w-sm md:max-w-full max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
