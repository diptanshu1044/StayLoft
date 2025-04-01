import ListingCard from "@/components/ListingCard";
import TypeProfile from "@/components/TypeProfile";

export default async function Page({ params }) {
  let p = await params;
  return <TypeProfile params={p} />;
}
