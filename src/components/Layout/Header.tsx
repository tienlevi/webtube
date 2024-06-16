import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../../../public/Logo.png";
import { Button } from "../Button/Button";
import { useSidebarContext } from "../../context/SidebarContext";
import { useRouter } from "next/navigation";
import { searchQuery } from "@/services/query";

export function Header() {
  const [data, setData] = useState({});
  const [value, setValue] = useState<string>("");
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const router = useRouter();

  const handleSearch = async (e?: FormEvent) => {
    e?.preventDefault();
    router.push(`/search?q=${encodeURIComponent(value || "")}`);
    router.refresh();
  };

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <HeaderFirstSection hidden={showFullWidthSearch} />
      <div
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <form onSubmit={handleSearch} className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            value={value || ""}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </form>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </div>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function HeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo.src} alt="" className="h-6" />
      </a>
    </div>
  );
}
