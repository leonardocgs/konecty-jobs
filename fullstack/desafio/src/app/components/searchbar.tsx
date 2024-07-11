import Image from "next/image";
import { InputHTMLAttributes } from "react";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;
export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="relative w-[220px] ">
      <Image
        className="absolute left-[20px] top-1/2 transform -translate-y-1/2"
        src="/search.svg"
        width={22}
        height={22}
        alt="Simbolo da lupa"
      />
      <input
        {...props}
        className=" text-black rounded-xl  placeholder-[#8B8B8B] block p-[9px] pl-[40px] pr-[4px] ml-[10px]"
        type="search"
        placeholder="Buscar produto"
      />
    </div>
  );
}
