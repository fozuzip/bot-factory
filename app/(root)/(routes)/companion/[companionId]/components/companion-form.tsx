"use client";

import { Companion, Category } from "@prisma/client";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const CompanionForm = ({ initialData, categories }: CompanionFormProps) => {
  return <div>Companion Form</div>;
};

export default CompanionForm;
