import { Input } from "../shadcn/components/ui/input"
 
function InputField({ label, type = "text", value, handleChange }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <label className="block text-gray-700 text-sm font-bold">{label}</label>
      <Input type={type} value={value} onChange={handleChange} />
    </div>
  )
}

export default InputField