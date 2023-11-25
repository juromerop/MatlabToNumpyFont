"use client";
import { StreamLanguage } from '@codemirror/language';
import go from '@codemirror/legacy-modes/mode/go';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import { useEffect, useState } from "react";

export default function Home() {
  const [inputCode, setInputCode] = 'function [x, y] = f(a, b)\n  x = a + b;\n  y = a - b;\nend';
  const [outputCode, setOutputCode] = 'def f(a, b):\n  x = a + b\n  y = a - b\n  return x, y';

  return (
    <>
      <div className="flex h-full min-h-screen flex-col items-center bg-[#0E1117] px-4 pb-20 text-neutral-200 sm:px-10">
        <div className="mt-10 flex flex-col items-center justify-center sm:mt-20">
          <div className="text-4xl font-bold">Matlab to Python Translator</div>
        </div>

        <div className="mt-2 flex items-center space-x-2">
          <button
            className="w-[140px] cursor-pointer rounded-md bg-violet-500 px-4 py-2 font-bold hover:bg-violet-600 active:bg-violet-700"
          >
            Translate
          </button>
        </div>
        <div className="mt-6 flex w-full max-w-[1200px] flex-col justify-between sm:flex-row sm:space-x-4">
          <div className="h-100 flex flex-col justify-center space-y-2 sm:w-2/4">
            <div className="text-center text-xl font-bold">Input</div>

            <h1>Matlab</h1>

              <div className="relative">
                <button
                  className="absolute right-0 top-0 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
                  onClick={() => {
                    navigator.clipboard.writeText(inputCode);
                  }}
                >
                  Copiar
                </button>

                <CodeMirror
                  editable={true}
                  value={inputCode}
                  minHeight="500px"
                //   extensions={[StreamLanguage.define(go)]}
                  theme={tokyoNight}
                  onChange={(value) => onChange(value)}
                />
              </div>
          </div>
          <div className="mt-8 flex h-full flex-col justify-center space-y-2 sm:mt-0 sm:w-2/4">
            <div className="text-center text-xl font-bold">Output</div>

            <h1>Python</h1>
              <div className="relative">
                <button
                  className="absolute right-0 top-0 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    setCopyText("Copied!");
                  }}
                >
                  {/* {copyText} */}
                </button>

                <CodeMirror
                  editable={false}
                  value={outputCode}
                  minHeight="500px"
                  theme={tokyoNight}
                  onChange={(value) => onChange(value)}
                />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}