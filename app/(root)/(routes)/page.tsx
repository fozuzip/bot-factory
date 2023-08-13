import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div className="p-2">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default RootPage;
