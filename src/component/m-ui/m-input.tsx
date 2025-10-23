import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

interface  MInputProp {
  label?: boolean
  labelText?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function MInput( { label, labelText, placeholder, type, value, onChange, onBlur, onFocus, onKeyDown }: MInputProp ) {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label>{labelText}</Label>}
      <Input placeholder={placeholder} type={type} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} onKeyDown={onKeyDown} />
    </div>
  );
}