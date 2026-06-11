import Image from "next/image";

interface Props {
  image: string;
}

export default function GalleryCard({
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="Gallery"
        width={500}
        height={500}
        className="hover:scale-110 transition duration-500 object-cover w-full h-72"
      />
    </div>
  );
}
