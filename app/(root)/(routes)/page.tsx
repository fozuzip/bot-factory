import { UserButton } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import SearchInput from "@/components/search-input";
import Categories from "@/components/categories";

const RootPage = async () => {
  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full space-y-2 p-4">
      <SearchInput />
      <Categories data={categories} />
    </div>
  );
};

export default RootPage;
