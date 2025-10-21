import { Card } from "flowbite-react";
import { Horse } from "@/types/Horses";
import horses from "@/api/horses";
import { FC } from "react";
import { Table, TableBody, TableCell, TableRow } from "flowbite-react";

type Prors = { id: number };

const HorsePage: FC<Prors> = async ({ id }: Prors) => {
  const getData = async (): Promise<Horse> => {
    const data = await horses.getHorse(id);
    return data;
  };

  const data = await getData();

  return (
    <div>
      <Card
        href="#"
        className="max-w-sm mb-3"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={data.photos[0].image || "/images/horse-riding/1.jpg"}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {data.description}
        </p>
      </Card>
      <div className="w-full">
        <h2>Родословная</h2>
        <Table>
          <TableBody className="divide-x">
            <TableRow>
              <TableCell rowSpan={4} className="bg-orange-300">
                {data.pedigree?.sire?.name}
              </TableCell>
              <TableCell rowSpan={2} className="bg-orange-300">
                {data.pedigree?.sire?.sire?.name}
              </TableCell>
              <TableCell className="bg-orange-300">
                {data.pedigree?.sire?.sire?.sire?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="bg-amber-200">
                {data.pedigree?.sire?.sire?.dame?.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} className="bg-amber-200">
                {data.pedigree?.sire?.dame?.name}
              </TableCell>
              <TableCell className="bg-orange-300">
                {data.pedigree?.sire?.dame?.sire?.name}
              </TableCell>
            </TableRow>
            <TableRow className="bg-amber-200">
              <TableCell>{data.pedigree?.sire?.dame?.dame?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={4} className="bg-amber-200">
                {data.pedigree?.dame?.name}
              </TableCell>
              <TableCell rowSpan={2} className="bg-orange-300">
                {data.pedigree?.dame?.sire?.name}
              </TableCell>
              <TableCell className="bg-orange-300">
                {data.pedigree?.dame?.sire?.sire?.name}
              </TableCell>
            </TableRow>
            <TableRow className="bg-amber-200">
              <TableCell>{data.pedigree?.dame?.sire?.dame?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} className="bg-amber-200">
                {data.pedigree?.dame?.dame?.name}
              </TableCell>
              <TableCell className="bg-orange-300">
                {data.pedigree?.dame?.dame?.sire?.name}
              </TableCell>
            </TableRow>
            <TableRow className="bg-amber-200">
              <TableCell>{data.pedigree?.dame?.dame?.dame?.name}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HorsePage;
