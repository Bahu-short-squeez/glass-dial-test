import DialCarousel from "../components/DialCarousel";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#ffffff",
      }}
    >
      <DialCarousel />
    </main>
  );
}