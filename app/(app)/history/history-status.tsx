import { cn } from "@/lib/utils";

interface Props {
  status: "stopped" | "running" | "completed";
}

const statusMap = {
  stopped: {
    label: "Interrompido",
    color: "bg-[#AB222E]",
  },
  running: {
    label: "Em andamento",
    color: "bg-[#FBA94C]",
  },
  completed: {
    label: "Concluído",
    color: "bg-[#04D361]",
  },
};

export function HistoryStatus({ status }: Props) {
  const currentStatus = statusMap[status];

  return (
    <div className="flex items-center gap-x-2">
      <div className={cn("size-2 rounded-full", currentStatus.color)} />
      <span className={cn("text-sm text-gray-400")}>{currentStatus.label}</span>
    </div>
  );
}
