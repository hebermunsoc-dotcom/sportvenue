interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-2xl text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}