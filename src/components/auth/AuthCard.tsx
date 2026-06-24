interface AuthCardProps {
  title: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
      <h1 className="mb-6 text-3xl font-bold">
        {title}
      </h1>

      {children}
    </div>
  );
}