import { useState } from "react";
import Input from "./components/Input";
import CheckBox from "./components/CheckBox";
import Range from "./components/Range";

function App() {
  const [length, setLength] = useState<number>(8);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = () => {
    console.log("pw");
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "01123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}<>?/.,~:;|";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setPassword(pass);
  };

  return (
    <div className="h-screen w-screen bg-zinc-400">
      <div className="flex h-full w-full justify-center items-center px-5">
        <div className="p-4 border-2 rounded-xl  w-[500px]  shadow-xl bg-slate-200">
          <h1 className="text-center text-2xl py-2 font-semibold font-mono">
            Random Password Generator
          </h1>
          <Input password={password} copyToClipBoard={copyToClipBoard} />
          <Range length={length} handleLength={setLength} />

          <div className="flex space-x-10">
            <CheckBox
              name="Number"
              checked={numberAllowed}
              setChecked={setNumberAllowed}
            />
            <CheckBox
              name="Characters"
              checked={charAllowed}
              setChecked={setCharAllowed}
            />
          </div>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={passwordGenerator}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
