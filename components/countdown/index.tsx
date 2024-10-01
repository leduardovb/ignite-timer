export function Countdown({ children }: React.PropsWithChildren) {
  return (
    <div className="flex items-center text-[160px] font-bold text-gray-300">
      {children}
    </div>
  );
}
