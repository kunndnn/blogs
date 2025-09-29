import { useState } from "react";
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa6";

const Code = ({ parts = [], styles }) => {
  const [placeholders, setPlaceholders] = useState(
    parts
      .map((p, i) => (p.type === "placeholder" ? { [i]: p.text } : null))
      .filter(Boolean)
      .reduce((a, b) => ({ ...a, ...b }), {})
  );

  const [copied, setCopied] = useState(false);

  const handleChange = (i, value) => {
    setPlaceholders((prev) => ({ ...prev, [i]: value }));
  };

  const getFullText = () =>
    parts
      .map((p, i) => (p.type === "placeholder" ? placeholders[i] : p.text))
      .join("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      {/* Code block wrapper */}
      <div className="relative w-full">
        <pre
          className={`w-full bg-gray-800 text-green-400 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap break-words ${styles ?? ""}`}
        >
          <code className="leading-relaxed text-sm sm:text-base md:text-lg">
            {parts.map((p, i) =>
              p.type === "placeholder" ? (
                <input
                  key={i}
                  value={placeholders[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="
              bg-gray-700
              text-yellow-300
              px-0.5
              mx-0.5
              rounded-sm
              focus:border-yellow-200 
              focus:text-yellow-100
              focus:outline-none
              min-w-[2ch]
            "
                  size={placeholders[i].length || 4}
                />
              ) : (
                <span key={i}>{p.text}</span>
              )
            )}
          </code>
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 text-gray-300 hover:text-white transition p-1 sm:p-2 rounded bg-gray-700/60"
        >
          {copied ? (
            <FaClipboardCheck className="text-base sm:text-lg" />
          ) : (
            <FaRegClipboard className="cursor-pointer text-base sm:text-lg" />
          )}
        </button>

        {/* Tooltip */}
        {copied && (
          <span className="absolute -bottom-6 right-2 text-[10px] sm:text-xs text-white bg-gray-700 px-2 py-1 rounded shadow">
            Copied!
          </span>
        )}
      </div>

    </>
  );
};

export default Code;
