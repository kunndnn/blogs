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
      <div className={`relative w-full ${styles ?? ""}`}>
        <pre
          className={`w-full bg-background-surface text-green-400 p-4 rounded-2xl overflow-x-auto whitespace-pre-wrap break-words border border-border-soft shadow-xl ${styles ?? ""}`}
        >
          <code className="leading-relaxed text-sm sm:text-base md:text-lg">
            {parts?.map((p, i) =>
              p?.type === "placeholder" ? (
                <input
                  key={i}
                  value={placeholders[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="
                    bg-background-elevated
                    text-brand-primary
                    font-bold
                    px-1
                    mx-1
                    rounded-md
                    border border-border-strong
                    focus:border-brand-primary/50 
                    focus:bg-background-surface
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

        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-text-muted hover:text-text-main transition-all p-2 rounded-xl bg-background-elevated border border-border-soft backdrop-blur-md hover:bg-background-surface"
        >
          {copied ? (
            <FaClipboardCheck className="text-base sm:text-lg text-green-400" />
          ) : (
            <FaRegClipboard className="cursor-pointer text-base sm:text-lg" />
          )}
        </button>

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
