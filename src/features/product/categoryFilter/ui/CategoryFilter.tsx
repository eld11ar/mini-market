"use client";

import {
  categoriesProcessor,
  categoryQueries,
  type Category,
} from "@/entities/category";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Skeleton } from "@/shared/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type Props = {
  value: Nullable<Category>;
  onChange: (category: Nullable<Category>) => void;
};

const ALL_VALUE = "ALL";

export const CategoryFilter = ({ value, onChange }: Props) => {
  const { data: categories, isLoading } = useQuery(categoryQueries.list());

  const options = useMemo(
    () => [
      { value: ALL_VALUE, label: "All" },
      ...categoriesProcessor.toSelectOptions(categories ?? []),
    ],
    [categories],
  );

  const onValueChange = (selected: string) => {
    onChange(selected === ALL_VALUE ? null : selected);
  };

  return isLoading ? (
    <Skeleton className="w-45 h-8" />
  ) : (
    <Select value={value ?? ALL_VALUE} onValueChange={onValueChange}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
