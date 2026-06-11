import Image from "next/image";

interface Props {
  title: string;
  image: string;
  category: string;
}

export default function ProjectCard({
  title,
  image,
  category,
}: Props) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <span className="text-secondary text-sm">
          {category}
        </span>

        <h3 className="font-bold text-xl mt-2">
          {title}
        </h3>
      </div>
    </div>
  );
}
