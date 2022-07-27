/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../../components/Header.tsx";
import SearchBox from "../../islands/SearchBox.tsx";

export default function Find() {

  return (
    <div>
      <Header />
      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-16`}>
          <h1 className={tw`text-6xl font-thin mb-6 text-center`}>
            Find Show
          </h1>

          <SearchBox />
        </div>
      </div>
    </div>
  );
}