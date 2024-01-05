type Props = {
  name: string;
  checked: boolean;
  setChecked(check: boolean): void;
};

function CheckBox({ name, checked, setChecked }: Props) {
  return (
    <div className="flex items-center my-4">
      <input
        checked={checked}
        id="red-checkbox"
        type="checkbox"
        className="w-4 h-4"
        onChange={() => setChecked(!checked)}
      />
      <label
        htmlFor="red-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 "
      >
        {name}
      </label>
    </div>
  );
}

export default CheckBox;
