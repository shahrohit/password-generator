type Props = {
  length: number;
  handleLength(len: number): void;
};

function Range({ length, handleLength }: Props) {
  return (
    <div className="relative mb-6">
      <p>Length : {length}</p>
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        id="labels-range-input"
        type="range"
        value={length}
        min="8"
        max="20"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(event) => handleLength(+event.target.value)}
      />
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
        Min (8)
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        12
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        16
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
        Max (20)
      </span>
    </div>
  );
}

export default Range;
