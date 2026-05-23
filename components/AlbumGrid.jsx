import albums from "@/data/albums";
import AlbumCard from "./AlbumCard";

export default function AlbumGrid() {
  return (
    <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {albums.map((album) => (
        <div key={album.slug} className="bg-page">
          <AlbumCard album={album} />
        </div>
      ))}
    </div>
  );
}
