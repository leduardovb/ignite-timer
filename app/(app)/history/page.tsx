"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HistoryStatus } from "./history-status";
import { useCycle } from "@/hooks/use-cycle";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import { ptBR } from "date-fns/locale";

export default function HistoryPage() {
  const { cycles } = useCycle();

  return (
    <div
      className={cn(
        "flex h-full overflow-auto",
        !cycles.length && "rounded-t-lg bg-[#29292E]",
      )}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tarefa</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead>Início</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cycles.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.task}</TableCell>
              <TableCell>{project.minutesAmount} minuto(s)</TableCell>
              <TableCell>
                {formatDistanceToNow(project.createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </TableCell>
              <TableCell>
                <HistoryStatus status={project.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
