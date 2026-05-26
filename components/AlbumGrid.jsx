import albums from "@/data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
      {albums.map((album) => (
        <AlbumCard key={album.slug} album={album} />
      ))}
    </div>
  );
}
