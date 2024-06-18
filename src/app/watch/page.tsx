"use client";
import { Header } from "@/components/Layout/Header";
import Detail from "@/components/Video/Detail";
import Embed from "@/components/Video/Embed";
import { useSearchParams } from "next/navigation";

function Watch() {
  const searchParams = useSearchParams();
  const id: any = searchParams ? searchParams.get("v") : null;
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="overflow-auto">
        <div className="overflow-x-hidden aspect-video pb-4">
          <Embed id={id} />
          <Detail id={id} />
        </div>
      </div>
    </div>
  );
}

export default Watch;
