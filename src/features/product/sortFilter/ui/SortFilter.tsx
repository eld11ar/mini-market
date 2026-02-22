import type { ProductPresenterSortOption } from "@/entities/product";
import { productsProcessor } from "@/entities/product/lib/processor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

type Props = {
  value: ProductPresenterSortOption;
  onChange: (value: ProductPresenterSortOption) => void;
};

export const SortFilter = ({ value, onChange }: Props) => {
  const options = productsProcessor.toSortOptions();

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Sort by" />
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
