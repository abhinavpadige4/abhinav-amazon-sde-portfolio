import { useFormContext } from 'react-hook-form';

export default function FormInput({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        {...register(name, {
          required: type === 'email' || type === 'text' ? 'This field is required' : undefined,
          pattern: type === 'email'
            ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            : undefined,
        })}
        type={type}
        placeholder={placeholder}
        className="bg-input/20 border border-input/50 rounded px-4 py-2 w-full text-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      {errors[name] && (
        <p className="text-sm text-destructive">{errors[name]?.message}</p>
      )}
    </div>
  );
}