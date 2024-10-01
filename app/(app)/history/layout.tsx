export default function HistoryLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-full flex-col gap-y-8">
      <h3 className="text-2xl font-bold text-gray-300">Meu histórico</h3>
      {children}
    </div>
  );
}
