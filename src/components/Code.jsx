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
    <div className="relative mt-2">
      {/* Copy button with inline tooltip */}
      <div className="absolute right-2 top-2 flex items-center space-x-2">
        <button
          onClick={handleCopy}
          className="text-gray-300 hover:text-white transition"
        >
          {copied ? <FaClipboardCheck /> : <FaRegClipboard className="cursor-pointer"/>}
        </button>

        {copied && (
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded shadow">
            Copied!
          </span>
        )}
      </div>

      {/* Code block */}
      <pre
        className={`bg-gray-800 text-green-400 p-3 rounded-lg overflow-x-auto ${styles ?? ""}`}
      >
        <code className="leading-relaxed">
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
                  mx-0.20
                  rounded-sm
                  focus:border-yellow-200 
                  focus:text-yellow-100
                  focus:outline-none
                "
                size={placeholders[i].length || 4}
              />
            ) : (
              <span key={i}>{p.text}</span>
            )
          )}
        </code>
      </pre>
    </div>
  );
};

export default Code;
