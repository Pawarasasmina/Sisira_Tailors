const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&auto=format",
      category: "School Uniforms"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format",
      category: "Band Costumes"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format",
      category: "Choir Robes"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&auto=format",
      category: "Office kit"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format",
      category: "Band Costumes"
    },
  ]

  return (
    <div name="portfolio" className=" w-full min-h-screen py-20 bg-gradient-to-b from-yellow-200 to-yellow-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-primary">Our Products</h2>
          <p className="text-gray-600 mt-4 text-xl">Check out some of our recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mt-16">
          {portfolios.map(({ id, src, category }) => (
            <div key={id} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={src}
                alt={category}
                className="w-full h-64 object-cover hover:scale-105 duration-300"
              />
              <div className="p-4 bg-gray-600">
                <h3 className="text-lg font-semibold text-yellow-100">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio