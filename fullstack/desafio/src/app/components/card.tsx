import Image from "next/image";
import { ProductDTO } from "../api/application/usecases/getProduct";

export default function Card(props: ProductDTO) {
  return (
    <section className="w-[156px] bg-white rounded-2xl p-4 flex flex-col  items-center">
      <div className="w-full h-40 relative justify-self-end">
        <Image
          className="object-cover"
          src={props.imageUri}
          alt={`Foto do produto ${props.name}`}
          layout="fill"
        />
      </div>
      <div className="mt-4 flex flex-col gap-[7px]">
        <h2 className="text-black text-base font-medium font-inter">
          {props.name}
        </h2>
        <p className="text-neutral-500 text-xs font-normal font-inter leading-none">
          {props.description}
        </p>
        <p className="text-black text-sm font-medium font-inter">
          ${props.price.toFixed(2)}
        </p>
      </div>
    </section>
  );
}
