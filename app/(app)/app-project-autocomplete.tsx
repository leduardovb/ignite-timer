import { Input } from "@/components/ui/input";

export function AppProjectAutocomplete() {
  return (
    <Input
      id="task"
      name="task"
      placeholder="Dê um nome para o seu projeto"
      className="w-auto flex-1 border-b-2 border-gray-600 text-lg focus-visible:ring-0"
    />
  );
}
