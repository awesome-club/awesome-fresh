/** @jsx h */
import { h } from "preact";
import {PageProps, Handlers} from "$fresh/server.ts";
import { tw } from "@twind";
import Header from "../../components/Header.tsx";
import {search} from "../../api/MovieApi.ts"
import {TVShowDto} from "../../api/Dtos.ts";
import TVShow from "../../islands/TVShow.tsx";

interface Props {
  shows: TVShowDto[];
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await search(ctx.params.search);
    return ctx.render({
      "shows": (await resp.json()).results
    });
  },
};

export default function FindShow({params, data}: PageProps<Props>) {
  const {search} = params;
  return (
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-8`}>
          <h1 className={tw`text-6xl font-thin text-center my-6`}>
            Results for: {search}
          </h1>

          <ul className={tw`flex flex-wrap`}>
            {data.shows.map(it => 
              <TVShow show={it} add={true}/>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}