import Image from "next/image";

export function Avatar({url,alt}) {
  return (
    <div className="rounded-5  w-10">
      <Image
        src={url}
        alt={alt? alt :"profile picture"}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  );
}