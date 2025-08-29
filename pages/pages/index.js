import Image from "next/image";

export default function Home() {
  const products = [
    { id: 1, name: "Baby Dress", price: 550, image: "/products/dress.jpg" },
    { id: 2, name: "Baby Shoes", price: 750, image: "/products/shoes.jpg" },
    { id: 3, name: "Baby Toy", price: 350, image: "/products/toy.jpg" },
    { id: 4, name: "Baby Bottle", price: 220, image: "/products/bottle.jpg" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🍼 BB Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-lg text-pink-600 font-bold">৳ {product.price}</p>
            <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
