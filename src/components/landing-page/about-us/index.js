export function AboutUs() {
  return (
    <div className="flex flex-col items-center sm:items-start sm:m-8">
      <p className="text-4xl font-extrabold tracking-wider mb-2 text-primary">
        Sobre a empresa
      </p>
      <p className="mb-4 text-primary-light tracking-wider text-center sm:text-left">
        Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor eleifend.
        Donec mollis id arcu quis euismod. Duis ornare tincidunt sem, at tempus
        tellus ultricies ac.
        <br />
        <br />
        Nunc interdum metus ac lectus laoreet, sed auctor lacus fermentum.
        Praesent convallis tempus aliquet. Morbi sed lorem sed sem viverra
        pulvinar.
      </p>
      <button className="rounded-xl flex items-center justify-center px-6 py-1 text-center transition duration-150 focus:outline-none text-lg disabled:cursor-not-allowed uppercase font-bold text-primary border-2 border-primary mb-20">
        saiba mais
      </button>
    </div>
  )
}
