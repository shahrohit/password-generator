import { useState } from "react";

type Props = {
  password: string;
  copyToClipBoard(): void;
};

const Input = ({ password, copyToClipBoard }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = () => {
    if (!password) return;
    copyToClipBoard();

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="flex items-center border border-black/15 rounded-md px-2 my-2">
      <input
        className="flex h-10 w-full text-lg rounded-md border-none outline-none bg-transparent px-3 py-2"
        type="text"
        placeholder="Password"
        value={password}
        readOnly
      />

      {copied ? (
        <p>Copied!</p>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={handleCopy}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      )}
    </div>
  );
};
export default Input;
