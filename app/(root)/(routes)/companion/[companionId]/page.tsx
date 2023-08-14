interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  return <div>Hello Companion id</div>;
};

export default CompanionIdPage;
