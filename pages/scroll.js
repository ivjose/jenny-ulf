const ScrollPage = () => {
  return (
    <main style={{ scrollSnapType: "y mandatory" }} className="flex flex-col">
      <section className="snap-start h-screen bg-red-600" />
      <section className="snap-start h-screen bg-blue-600" />
      <section className="snap-start h-screen bg-green-600" />
    </main>
  );
};

export default ScrollPage;
