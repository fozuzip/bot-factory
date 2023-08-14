"use client";

import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { cn } from "@/lib/utils";

interface CategoriesProps {
  data: Category[];
}

const Categories = ({ data }: CategoriesProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="flex w-full space-x-2 overflow-x-auto p-1">
      <CategoryItem onClick={() => onClick(undefined)} selected={!categoryId}>
        Newest
      </CategoryItem>
      {data.map((category) => (
        <CategoryItem
          key={category.id}
          onClick={() => onClick(category.id)}
          selected={categoryId === category.id}
        >
          {category.name}
        </CategoryItem>
      ))}
    </div>
  );
};

interface CategoryItemProps {
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}
const CategoryItem = ({
  children,
  onClick,
  selected = false,
}: CategoryItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `
            flex
            items-center
            rounded-md
            bg-primary/10
            px-2
            py-2
            text-center
            text-xs
            transition
            hover:opacity-75
            md:px-4
            md:py-3
            md:text-sm
        `,
        selected && "bg-primary/25",
      )}
    >
      {children}
    </button>
  );
};

export default Categories;
