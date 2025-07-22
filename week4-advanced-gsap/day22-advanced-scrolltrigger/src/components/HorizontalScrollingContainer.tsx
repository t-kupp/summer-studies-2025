export default function HorizontalScrollingContainer() {
  return (
    <div className="w-screen overflow-x-hidden">
      HorizontalScrollingContainer
      <section className="border w-[200vw] grid grid-cols-5">
        {[...Array(5)].map((card, i) => (
          <div key={i} className="border h-96"></div>
        ))}
      </section>
    </div>
  );
}
