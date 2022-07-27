/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import { getTodayShows } from "../api/MovieApi.ts";
import {TVShowDto} from "../api/Dtos.ts";
import {useState} from "preact/hooks";
import TVShow from "../islands/TVShow.tsx";

interface Props {
  shows: TVShowDto[];
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await getTodayShows();
    return ctx.render({
      "shows": (await resp.json()).results
    });
  },
};

export default function Movies({data}: PageProps<Props>) {
  const [hasShows] = useState(data.shows && data.shows.length > 0);

  return (
    <div>
      <Header />
      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-8`}>
          <h1 className={tw`text-6xl font-thin text-center mb-6`}>
            Airing Today
          </h1>

          {!hasShows && <p>Nothing airing today.</p>}

          {hasShows && <ul className={tw`flex flex-wrap`}>
            {data.shows.map(it => 
              <TVShow show={it} add={true}/>
            )}
          </ul>}
        </div>
      </div>
    </div>
  );
}
