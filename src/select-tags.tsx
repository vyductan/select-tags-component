import type { SelectProps } from "@acme/ui/select";
import { Select, SelectRoot, SelectTrigger } from "@acme/ui/select";
import { Tag } from "@acme/ui/tag";

type SelectTagsProps = Omit<SelectProps, "value"> & {
  value?: string[];
  onChange?: (value: string[]) => void;
};

const SelectTags = ({ value, onChange, ...props }: SelectTagsProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger>
        {value?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </SelectTrigger>
    </SelectRoot>
  );
};

export { SelectTags };
