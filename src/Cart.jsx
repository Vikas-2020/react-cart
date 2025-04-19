import React from "react";

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease, onClear }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItem = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f5f8fa]">
      <header className="bg-[#6c63ff] py-4 px-6 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">UseReducer</h1>
        <div className="relative text-white text-2xl">
          🛒
          <span className="absolute -top-2 -right-2 bg-white text-[#6c63ff] text-sm w-5 h-5 flex items-center justify-center rounded-full">
            {totalItem}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-10">YOUR BAG</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-8">
            <img
              src={`/src/assets/${item.image}`}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <button
                className="text-purple-600 text-sm mt-1 hover:underline"
                onClick={() => onRemove(item.id)}
              >
                remove
              </button>
            </div>
            <div className="flex flex-col items-center text-purple-600 text-xl">
              <button onClick={() => onIncrease(item.id)}>↑</button>
              <span className="text-black">{item.quantity}</span>
              <button onClick={() => onDecrease(item.id)}>↓</button>
            </div>
          </div>
        ))}

        <hr className="my-6" />

        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Total</h3>
          <span className="bg-purple-100 text-[#6c63ff] px-4 py-1 rounded-lg font-medium">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={onClear}
            className="bg-[#6c63ff] text-white px-6 py-2 rounded-md hover:bg-[#574ee6] transition"
          >
            Clear Cart
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
