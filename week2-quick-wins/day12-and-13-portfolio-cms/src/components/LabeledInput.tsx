import { useId } from "react";

interface TextInputProps {
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  className?: string;
  value: string;
  placeholder?: string;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
  required?: boolean;
}

export default function LabeledInput({
  onChange,
  className,
  value,
  title,
  textarea = false,
  required = false,
  select = false,
  options = [""],
}: TextInputProps) {
  const id = useId();

  if (select) {
    return (
      <div className="flex flex-col">
        <label className="text-sm" htmlFor={id}>
          {title}
        </label>
        <select
          required={required}
          id={id}
          value={value}
          onChange={onChange}
          className={`bg-text-input border-border rounded border p-1 ${className}`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (textarea) {
    return (
      <div className="flex flex-col">
        <label className="text-sm" htmlFor={id}>
          {title}
        </label>
        <textarea
          required={required}
          rows={3}
          id={id}
          value={value}
          onChange={onChange}
          className={`bg-text-input border-border max-h-64 rounded border px-1 ${className}`}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor={id}>
        {title}
      </label>
      <input
        required={required}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className={`bg-text-input border-border rounded border px-1 ${className}`}
      />
    </div>
  );
}
