export function CountdownItem({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-[12.5rem] w-[8rem] items-center justify-center rounded-lg bg-[#29292E]">
      {children}
    </div>
  );
}
