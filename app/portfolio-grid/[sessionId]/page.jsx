"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import allPicsData from "../../data/allPicsData";

export default function SessionGallery() {
  const params = useParams();
  const sessionId = params?.sessionId;
  
  if (!sessionId) return <p>Loading...</p>;

  const session = allPicsData.find((s) => s.id === String(sessionId));

  if (!session) {
    return <p>Session not found</p>;
  }

  return (
    <div className="p-2 md:p-6  min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{session.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {session.images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-[3/4.5] overflow-hidden rounded shadow group"
          >
            <Image
              src={img}
              alt={`Photo ${index + 1}`}
              fill
              style={{ objectFit: "cover", transform: "scale(1.1)" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
