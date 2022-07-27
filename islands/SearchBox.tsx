/** @jsx h */
import { h } from "preact";
import {TVShowDto} from "../api/Dtos.ts";
import { tw } from "@twind";

export interface TVShowProps {
  show: TVShowDto;
  add?: boolean;
}

export default function SearchBox() {
  function onKeyUp(ev: KeyboardEvent) {
    if (ev.code === "Enter") {
      const value = (ev.target as HTMLInputElement).value;
      window.location.href = `/find/${value}`
    }
  }

  return (
    <div className={tw`w-1/2 pt-8 mx-auto`}>
      <input
        onKeyUp={onKeyUp}
        className={tw`transition full-width text-4xl px-3 py-4 placeholder-slate-300 text-slate-600 relative w-full bg-white bg-white rounded border border-2 border-black-300 focus:border-blue-600 outline-none outline-none font-bold`} 
      />
    </div>
  )
}