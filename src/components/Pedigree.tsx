import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import horsesAction from "../api/horses";

interface iID {
  id: number;
}

export default function Pedigree({ id }: iID) {
  const pedigree = horsesAction.getPedigree(id);
  return (
    <div className="w-full">
      <Table>
        <TableBody className="divide-x">
          <TableRow>
            <TableCell rowSpan={4} className="bg-amber-200">
              ID={pedigree.sireID}, name: {pedigree.sireName}
            </TableCell>
            <TableCell rowSpan={2}>
              ID={pedigree.parrentSire.sireID}, name:{" "}
              {pedigree.parrentSire.sireName}
            </TableCell>
            <TableCell>
              ID={pedigree.parrentSire.parrentSire.sireID}, name:{" "}
              {pedigree.parrentSire.parrentSire.sireName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-orange-300 dark:border-gray-700 dark:bg-gray-800">
            <TableCell>
              ID={pedigree.parrentSire.parrentSire.dameID}, name:{" "}
              {pedigree.parrentSire.parrentSire.dameName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-orange-300 dark:border-gray-700 dark:bg-gray-800">
            <TableCell rowSpan={2}>
              ID={pedigree.parrentSire.dameID}, name:{" "}
              {pedigree.parrentSire.dameName}
            </TableCell>
            <TableCell>
              ID={pedigree.parrentSire.parrentDame.sireID}, name:{" "}
              {pedigree.parrentSire.parrentSire.sireName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell>
              ID={pedigree.parrentSire.parrentDame.dameID}, name:{" "}
              {pedigree.parrentSire.parrentDame.dameName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell rowSpan={4}>
              ID={pedigree.dameID}, name: {pedigree.dameName}
            </TableCell>
            <TableCell rowSpan={2}>
              ID={pedigree.parrentDame.sireID}, name:{" "}
              {pedigree.parrentDame.sireName}
            </TableCell>
            <TableCell>
              ID={pedigree.parrentDame.parrentSire.sireID}, name:{" "}
              {pedigree.parrentDame.parrentSire.sireName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell>
              ID={pedigree.parrentDame.parrentSire.dameID}, name:{" "}
              {pedigree.parrentDame.parrentSire.dameName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell rowSpan={2}>
              ID={pedigree.parrentDame.dameID}, name:{" "}
              {pedigree.parrentDame.dameName}
            </TableCell>
            <TableCell>
              ID={pedigree.parrentDame.parrentDame.sireID}, name:{" "}
              {pedigree.parrentDame.parrentDame.sireName}
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell>
              ID={pedigree.parrentDame.parrentDame.dameID}, name:{" "}
              {pedigree.parrentDame.parrentDame.dameName}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
