/** @jsx h */
import { h } from "preact";
import {TVShowDto} from "../api/Dtos.ts";
import { tw } from "@twind";
import {ImageBasePath} from "../env.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {useState} from "preact/hooks";

export interface TVShowProps {
  show: TVShowDto;
  add?: boolean;
}

export default function TVShowProps({add, show}: TVShowProps) {
  const [loading, setLoading] = useState(false);

  async function onAddClick() {
    setLoading(true);
    await fetch(`/api/my-shows`, {
      method: "POST",
      body: JSON.stringify(show)
    })
    setLoading(false);
  }

  return (
    <li className={tw`group relative p-4`}>
      <div 
        className={tw`w-64 h-80 bg-cover rounded-lg hover:opacity-75`}
        style={{backgroundImage: `url(${ImageBasePath + show.poster_path})`}} />
      <h3 className={tw`text-center mt-2 font-semibold`}>
        {show.name}
      </h3>

      {add && <button 
        onClick={onAddClick}
        disabled={!IS_BROWSER}
        className={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute hidden group-hover:block right-10 top-10`}>
        {!loading ? "Add" : "..."}
        </button>}
    </li>
  )
}