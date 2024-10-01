import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HistoryStatus } from "./history-status";

export default function HistoryPage() {
  return (
    <div className="flex overflow-auto">
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
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>Desenvolver o layout da página</TableCell>
              <TableCell>4 horas</TableCell>
              <TableCell>10/10/2021</TableCell>
              <TableCell>
                <HistoryStatus status="completed" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
