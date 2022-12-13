import { TopBar } from "@components/TopBar";

export default function Home() {
  return (
    <>
      <div>
        <TopBar />
        <div className="h-screen">
          <h1 className="text-4xl text-center p-20">Content</h1>
        </div>
        <div className="h-screen">
          <h1 className="text-4xl text-center p-20">tete</h1>
        </div>
      </div>
    </>
  );
}
