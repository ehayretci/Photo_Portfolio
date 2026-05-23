import albums from "@/data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
      {albums.map((album) => (
        <AlbumCard key={album.slug} album={album} />
      ))}
    </div>
  );
}
