import HorsePage from "@/components/HorsePage";
type Props = { params: { id: string } };

export default async function Horse({ params }: Props) {
  const { id } = await params;
  return <HorsePage id={Number(id)} />;
}
