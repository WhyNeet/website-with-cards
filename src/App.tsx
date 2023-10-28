import CardGrid from "@/components/CardGrid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function App() {
  return (
    <main class="min-h-screen w-screen bg-neutral-950 text-neutral-100 p-10 flex flex-col">
      <Header />
      <CardGrid />
      <Footer />
    </main>
  );
}

export default App;
