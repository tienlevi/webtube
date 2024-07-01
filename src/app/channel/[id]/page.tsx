"use client";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import dynamic from "next/dynamic";

const ChannelDetail = dynamic(
  () => import("@/components/Channel/ChannelDetail"),
  { ssr: false }
);

function Channel({ params }: any) {
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="grid gap-4 grid-cols-1">
            <ChannelDetail id={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;
