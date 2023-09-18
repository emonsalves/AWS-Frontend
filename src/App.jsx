function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative px-4">
        <img
          src="https://images.unsplash.com/photo-1604093882750-3ed498f3178b"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 z-10">
          Coming Soon
        </h1>
        <p className="text-white text-xl md:text-2xl">
          Were working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </>
  );
}

export default App;
