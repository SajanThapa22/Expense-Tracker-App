import { useForm } from "react-hook-form";
import categories from "../categories";

interface ExpenseData {
  description: string;
  amount: number;
  category: string;
}
interface Props {
  onSubmit: (data: ExpenseData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseData>();
  return (
    <form
      onSubmit={handleSubmit((data: ExpenseData) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">Please enter the description.</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">Enter atleast 3 characters.</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount?.type === "required" && (
          <p className="text-danger">Please enter the amount.</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Select category</label>
        <select
          {...register("category", { required: true })}
          className="form-select"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category?.type === "required" && (
          <p className="text-danger">Please select a category.</p>
        )}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
