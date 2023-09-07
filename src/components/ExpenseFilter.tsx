import categories from "../categories";
interface Props {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select
      className="form-select form-select-lg"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Filter List By Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
