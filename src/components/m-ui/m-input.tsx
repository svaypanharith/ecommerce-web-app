

interface  MInputProp {
  name: string
  label?: boolean
  labelText?: string
  placeholder?: string
  type?: string
  value?: string
  multiple?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

import { useFormContext } from "react-hook-form";

export default function MInput({ 
  name,
  label, 
  labelText, 
  placeholder, 
  type = "text",
  ...props 
}: MInputProp) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{labelText}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register(name, {
          valueAsNumber: type === 'number'
        })}
        {...props}
      />
      {errors?.[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  );
}