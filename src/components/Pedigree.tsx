import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import horses from "@/api/horses";
import type { Horse } from "@/types/Horses";

interface Props {
  id: number;
}

export default async function Pedigree({ id }: Props) {
  const data: Horse = await horses.getHorse(id);
  const pedigree = data.pedigree;

  return (
    <div className="w-full">
      <Table>
        <TableBody className="divide-x">
          <TableRow>
            <TableCell rowSpan={4} className="bg-amber-200">
              {pedigree?.sire?.name ?? "—"}
            </TableCell>
            <TableCell rowSpan={2} className="bg-amber-200">
              {pedigree?.sire?.sire?.name ?? "—"}
            </TableCell>
            <TableCell className="bg-orange-300">
              {pedigree?.sire?.sire?.sire?.name ?? "—"}
            </TableCell>
          </TableRow>
          <TableRow className="bg-orange-300">
            <TableCell>{pedigree?.sire?.sire?.dame?.name ?? "—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2} className="bg-amber-200">
              {pedigree?.sire?.dame?.name ?? "—"}
            </TableCell>
            <TableCell className="bg-orange-300">
              {pedigree?.sire?.dame?.sire?.name ?? "—"}
            </TableCell>
          </TableRow>
          <TableRow className="bg-amber-200">
            <TableCell>{pedigree?.sire?.dame?.dame?.name ?? "—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={4} className="bg-amber-200">
              {pedigree?.dame?.name ?? "—"}
            </TableCell>
            <TableCell rowSpan={2} className="bg-amber-200">
              {pedigree?.dame?.sire?.name ?? "—"}
            </TableCell>
            <TableCell className="bg-orange-300">
              {pedigree?.dame?.sire?.sire?.name ?? "—"}
            </TableCell>
          </TableRow>
          <TableRow className="bg-amber-200">
            <TableCell>{pedigree?.dame?.sire?.dame?.name ?? "—"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2} className="bg-amber-200">
              {pedigree?.dame?.dame?.name ?? "—"}
            </TableCell>
            <TableCell className="bg-orange-300">
              {pedigree?.dame?.dame?.sire?.name ?? "—"}
            </TableCell>
          </TableRow>
          <TableRow className="bg-amber-200">
            <TableCell>{pedigree?.dame?.dame?.dame?.name ?? "—"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
