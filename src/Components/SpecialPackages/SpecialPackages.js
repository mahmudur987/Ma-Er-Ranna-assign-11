import React from "react";

const SpecialPackages = () => {
  const packages = [
    {
      image:
        "https://images.unsplash.com/photo-1624795874313-dc20b4ff0e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Package 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, urna eu vulputate iaculis, mauris mauris fringilla est, vitae volutpat est nunc sed massa.",
      name: "Half Fruit + Half Snacks",
      price: "£39.95 + vat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585164743050-e27677e3819d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Package 2",
      description:
        "Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi eget tortor vulputate, sed tincidunt urna pharetra. Fusce finibus quam purus, ac eleifend nibh mattis at.",
      name: "Healthy Snack Boxes﻿",
      price: "£39.95 + vat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517499414974-3b42addf2d86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Package 3",
      description:
        "Curabitur nec orci sagittis, malesuada tellus nec, feugiat libero. Ut finibus, neque id pellentesque ullamcorper, purus diam fermentum est, non consequat sem lorem sit amet sem.",
      name: "Food Boxes﻿",
      price: "£39.95 + vat",
    },
    {
      image:
        "https://images.unsplash.com/photo-1514792368985-f80e9d482a02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      title: "Package 4",
      description:
        "Sed interdum risus ut pharetra commodo. Sed a fermentum urna. Sed iaculis consectetur nisi, in elementum felis consequat in. Fusce eget libero non leo finibus eleifend.",
      name: "The Snacker Box",
      price: "£39.95 + vat",
    },
  ];

  return (
    <div className="py-8 bg-gray-100">
      <div className=" px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8 uppercase">
          Our special packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((Package, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl font-bold mb-2">{Package.title}</h3>

              <img
                className="w-full h-40 object-cover mb-4 rounded-md"
                src={Package.image}
                alt={Package.title}
              />
              <p className="text-xl font-bold text-red-600">{Package.name}</p>
              <p>{Package.description}</p>
              <p className="text-start font-bold mt-6">{Package.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialPackages;
