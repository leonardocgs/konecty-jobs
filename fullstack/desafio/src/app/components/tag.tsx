import { ButtonHTMLAttributes } from "react";

type TagProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isTagSelected?: boolean;
};
export default function Tag(props: TagProps) {
  return (
    <button
      {...props}
      className={`py-2 px-4 whitespace-nowrap  w-max rounded-[32px] ${props.isTagSelected ? "text-white" : "text-black"} ${props.isTagSelected ? "bg-[#51BAE8]" : "bg-white"} `}
    >
      <p className="font-medium font-inter text-base">{props.children}</p>
    </button>
  );
}
