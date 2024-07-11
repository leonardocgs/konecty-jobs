"use client";

import useSWR from "swr";
import Card from "./components/card";
import Tag from "./components/tag";
import SearchBar from "./components/searchbar";
import { GetProductOutput } from "./api/application/usecases/getProduct";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [fetchUrl, setFetchUrl] = useState("http://localhost:3000/api/product");
  const [selectedTag, setSelectedTag] = useState<string | null>("Todos");

  const {
    isLoading,
    data: products,
    error: productsError,
    mutate: mutateProducts,
  } = useSWR<GetProductOutput>(fetchUrl, fetcher);

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: categoriesError,
  } = useSWR<string[]>("http://localhost:3000/api/category", fetcher);

  const updateFetchUrl = (params: Record<string, string | null>) => {
    const url = new URL(fetchUrl);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value);
      }
    });
    setFetchUrl(url.toString());
    mutateProducts();
  };

  const onChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const onKeyDownSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      updateFetchUrl({ name: searchValue });
    }
  };

  const onTagClick = (category: string) => {
    if (category === "Todos") {
      updateFetchUrl({ category: null });
    } else {
      updateFetchUrl({ category });
    }
    setSelectedTag(category);
  };

  const renderNoProductsMessage = () => (
    <div className="text-center col-span-2">
      <h2 className="text-black text-2xl font-bold">
        Nenhum produto encontrado
      </h2>
      <p className="text-black text-base font-normal font-inter">
        Tente ajustar sua busca para encontrar o produto desejado.
      </p>
    </div>
  );

  const numberOfProducts = products?.length ?? 0;

  return (
    <main className="px-6 py-[24px] md:py-[45px] md:px-[151px] flex justify-center bg-zinc-100">
      <div className="flex flex-col gap-8 w-full  max-w-[334px] md:max-w-[523px] lg:max-w-[718px]">
        <SearchBar
          onChange={onChangeSearch}
          value={searchValue}
          onKeyDown={onKeyDownSearch}
        />
        <div>
          <h1 className="text-black text-3xl font-extrabold font-montserrat">
            Tênis
          </h1>
          <p className="text-black text-base font-normal font-inter">
            {`${numberOfProducts} produtos encontrados`}
          </p>
        </div>
        <nav className="flex gap-4 overflow-x-scroll">
          <Tag
            isTagSelected={selectedTag === "Todos"}
            onClick={() => onTagClick("Todos")}
            disabled={isLoading}
          >
            Todos
          </Tag>
          {categoriesError && renderNoProductsMessage()}
          {isLoadingCategories && <div>Carregando categorias...</div>}
          {categories &&
            categories.map((category, index) => (
              <Tag
                key={index}
                isTagSelected={selectedTag === category}
                onClick={() => onTagClick(category)}
                disabled={isLoading}
              >
                {category}
              </Tag>
            ))}
        </nav>
        {isLoading && <div>Carregando produtos...</div>}
        {!isLoading &&
          (productsError || !products?.length) &&
          renderNoProductsMessage()}
        {!isLoading && products && products.length > 0 && (
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-[15px]">
            {products.map((product, index) => (
              <Card
                key={index}
                imageUri={product.imageUri}
                description={product.description}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
