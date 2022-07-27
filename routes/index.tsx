/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { TVShowDto } from "../api/Dtos.ts";
import { DbInstance, Querries } from "../db.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import TVShow from "../islands/TVShow.tsx";

interface Props {
  shows: TVShowDto[];
}

export const handler: Handlers = {
  GET(req, ctx) {
    const results = DbInstance.query(Querries.Select);
    const shows = results.map(it => {
      const [id, name, poster_path] = it;
      return {id, name, poster_path};
    })
    return ctx.render({
      "shows": shows
    });
  },
};

export default function Home({data}: PageProps<Props>) {
  return (
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-8`}>
          <ul className={tw`flex flex-wrap`}>
            {data.shows.map(it => <TVShow show={it} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}
