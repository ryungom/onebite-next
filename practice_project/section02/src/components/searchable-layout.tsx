export default function SearchableLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
}
