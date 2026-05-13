type StructuredDataProps = {
  data: Record<string, unknown> | readonly Record<string, unknown>[];
};

export function StructuredData({ data }: StructuredDataProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((entry, index) => (
        <script
          key={`${String(entry["@type"])}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
