export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  )
}
