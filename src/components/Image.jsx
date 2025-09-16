import { useState } from "react";

export default function Image({ src, alt, styles }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Thumbnail / normal image */}
            <img
                src={src}
                alt={alt}
                className={`mt-4 rounded shadow-md w-full max-w-md ${styles ?? ''}`}
                onClick={() => setIsOpen(true)}
                loading="lazy"
            />

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/70 bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-full rounded shadow-lg"
                    />
                </div>
            )}
        </>
    );
}
