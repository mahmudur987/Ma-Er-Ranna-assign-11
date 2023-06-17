import React from "react";

const Services = () => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
      title: "Minimal Fruit",
      description: "Minimal Fruit Miles & Carbon Neutral Logistics",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572202808998-93788f6d39da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      title: "Eco-friendly",
      description: "Aliquam finibus ex vitae est congue auctor.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1471248026681-35a45d5530a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      title: " Fruit Baskets",
      description: "Curabitur nec orci sagittis, malesuada tellus nec.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613332098721-054a53462d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "All your Groceries",
      description: "Sed interdum risus ut pharetra commodo.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596084467303-42ae46b9a64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      title: "100% Flexible Subscription",
      description: "Vestibulum at ipsum ullamcorper, eleifend tortor in.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Near Zero Waste",
      description: "Praesent dapibus quam vitae gravida sollicitudin.",
    },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md flex">
              <img
                className="w-1/3 object-cover rounded-l-md"
                src={card.image}
                alt={card.title}
              />
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
