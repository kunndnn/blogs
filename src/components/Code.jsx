import { useState } from "react";
import { FaRegClipboard, FaClipboardCheck } from "react-icons/fa6";

const Code = ({ parts = [], styles }) => {
  const [placeholders, setPlaceholders] = useState(
    parts?.map((p, i) => (p.type === "placeholder" ? { [i]: p.text } : null))
      .filter(Boolean)
      .reduce((a, b) => ({ ...a, ...b }), {})
  );

  const [copied, setCopied] = useState(false);

  const handleChange = (i, value) => {
    setPlaceholders((prev) => ({ ...prev, [i]: value }));
  };

  const getFullText = () =>
    parts?.map((p, i) => (p.type === "placeholder" ? placeholders[i] : p.text))
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
      <div className={`relative w-full ${styles ?? ""}`}>
        <pre
          className={`w-full bg-background-surface text-green-400 p-4 rounded-2xl overflow-x-auto whitespace-pre-wrap break-words border border-white/5 shadow-2xl ${styles ?? ""}`}
        >
          <code className="leading-relaxed text-sm sm:text-base md:text-lg">
            {parts?.map((p, i) =>
              p?.type === "placeholder" ? (
                <input
                  key={i}
                  value={placeholders[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="
                    bg-white/5
                    text-brand-primary
                    font-bold
                    px-1
                    mx-1
                    rounded-md
                    border border-white/10
                    focus:border-brand-primary/50 
                    focus:bg-white/10
                    focus:outline-none
                    min-w-[2ch]
                    transition-all
                  "
                  size={placeholders[i].length || 4}
                />
              ) : (
                  <span key={i} className="opacity-90">{p.text}</span>
              )
            )}
          </code>
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-white/50 hover:text-white transition-all p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10"
        >
          {copied ? (
            <FaClipboardCheck className="text-base sm:text-lg text-green-400" />
          ) : (
            <FaRegClipboard className="cursor-pointer text-base sm:text-lg" />
          )}
        </button>

        {/* Tooltip */}
        {copied && (
          <span className="absolute -bottom-8 right-2 text-[10px] sm:text-xs text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full backdrop-blur-md shadow-xl">
            Copied!
          </span>
        )}
      </div>

    </>
  );
};

export default Code;
