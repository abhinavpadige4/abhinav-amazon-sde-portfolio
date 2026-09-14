export default function FormButton({
  type = 'submit',
  children,
  disabled = false,
}: {
  type?: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-primary px-6 py-3 rounded text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
      {disabled && (
        <span className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-primary/50"></span>
      )}
    }
  );
}