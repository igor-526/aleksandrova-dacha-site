"use client";

export const Pedigree1 = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <h2 className="mb-4 text-2xl font-bold">Pedigree</h2>
      <div
        style={{
          gridTemplateAreas: `
            "s rs ss rss sss"
            "s rs ss rss ssd"
            "s rs sd rsd sds"
            "s rs sd rsd sdd"
            "d rd ds rds dss"
            "d rd ds rds dsd"
            "d rd dd rdd dds"
            "d rd dd rdd ddd"
          `,
        }}
        className="
          grid h-[500px] w-full gap-2
          grid-cols-[minmax(120px,1fr)_40px_minmax(120px,1fr)_40px_minmax(120px,1fr)]
          grid-rows-8
        "
      >
        <div style={{ gridArea: "s" }} className="rounded border border-[#2f3600]/20 p-2">s</div>
        <div style={{ gridArea: "ss" }} className="rounded border border-[#2f3600]/20 p-2">ss</div>
        <div style={{ gridArea: "sd" }} className="rounded border border-[#2f3600]/20 p-2">sd</div>
        <div style={{ gridArea: "sss" }} className="rounded border border-[#2f3600]/20 p-2">sss</div>
        <div style={{ gridArea: "ssd" }} className="rounded border border-[#2f3600]/20 p-2">ssd</div>
        <div style={{ gridArea: "sds" }} className="rounded border border-[#2f3600]/20 p-2">sds</div>
        <div style={{ gridArea: "sdd" }} className="rounded border border-[#2f3600]/20 p-2">sdd</div>
        <div style={{ gridArea: "d" }} className="rounded border border-[#2f3600]/20 p-2">d</div>
        <div style={{ gridArea: "ds" }} className="rounded border border-[#2f3600]/20 p-2">ds</div>
        <div style={{ gridArea: "dd" }} className="rounded border border-[#2f3600]/20 p-2">dd</div>
        <div style={{ gridArea: "dss" }} className="rounded border border-[#2f3600]/20 p-2">dss</div>
        <div style={{ gridArea: "dsd" }} className="rounded border border-[#2f3600]/20 p-2">dsd</div>
        <div style={{ gridArea: "dds" }} className="rounded border border-[#2f3600]/20 p-2">dds</div>
        <div style={{ gridArea: "ddd" }} className="rounded border border-[#2f3600]/20 p-2">ddd</div>
        <div style={{ gridArea: "rs" }} className="flex items-center justify-center">r1</div>
        <div style={{ gridArea: "rss" }} className="flex items-center justify-center">r2</div>
        <div style={{ gridArea: "rsd" }} className="flex items-center justify-center">r3</div>
        <div style={{ gridArea: "rd" }} className="flex items-center justify-center">r4</div>
        <div style={{ gridArea: "rds" }} className="flex items-center justify-center">r5</div>
        <div style={{ gridArea: "rdd" }} className="flex items-center justify-center">r6</div>
      </div>
    </div>
  );
};
