import Image from "next/image";

interface Props {
  title: string;
  image: string;
  description: string;
}

export default function ServiceCard({
  title,
  image,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl mb-3">
          {title}
        </h3>

        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
