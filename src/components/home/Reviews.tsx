export default function Reviews() {
  return (
    <section className="px-4 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((card) => (
          <div
            key={card}
            className="h-[300px] rounded-[25px] bg-[#d9d9d9] flex items-center justify-center text-2xl uppercase"
          >
            Review Card {card}
          </div>
        ))}
      </div>
    </section>
  );
}
