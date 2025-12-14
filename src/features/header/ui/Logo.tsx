import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-28 h-28 rounded-full opacity-75 overflow-hidden">
      <Image width={200} height={200} src="/images/Logo1.jpg" alt="img" />
    </div>
  );
}
