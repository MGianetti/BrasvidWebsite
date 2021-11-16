export function Faq() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center max-w-md">
        <p className="text-4xl font-extrabold tracking-wider mb-2 text-white">
          Perguntas frequentes
        </p>
        <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-white border-2 border-white">
          dúvidas?
        </button>
      </div>
    </div>
  )
}
