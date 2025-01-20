import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const menuSections = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Stuffed Mushrooms', description: 'Mushrooms filled with cheese and herbs.', price: '$9' },
        { name: 'Spring Rolls', description: 'Crispy rolls stuffed with veggies.', price: '$7' },
        { name: 'Garlic Bread', description: 'Toasted bread with garlic and butter.', price: '$5' },
        { name: 'Nachos', description: 'Topped with cheese and jalapeños.', price: '$5' },
        { name: 'Mozzarella Sticks', description: 'Cheesy sticks with marinara sauce.', price: '$8' },
        { name: 'Onion Rings', description: 'Crispy golden onion rings.', price: '$6' },
      ],
    },
    {
      title: 'Side Orders & À la Carte',
      items: [
        { name: 'French Fries', description: 'Golden crispy fries.', price: '$4' },
        { name: 'Coleslaw', description: 'Creamy and crunchy.', price: '$3' },
        { name: 'Mashed Potatoes', description: 'Smooth and buttery.', price: '$5' },
        { name: 'Steamed Vegetables', description: 'Seasonal veggies.', price: '$6' },
        { name: 'Mac & Cheese', description: 'Classic cheesy pasta.', price: '$7' },
        { name: 'Sweet Potato Fries', description: 'Crispy sweet potato strips.', price: '$6' },
        { name: 'Garden Salad', description: 'Fresh greens with dressing.', price: '$6' },
      ],
    },
    {
      title: 'Entrées',
      items: [
        { name: 'Eggplant Parmesan', description: 'Breaded eggplant baked with marinara and cheese.', price: '$14' },
        { name: 'Vegetable Stir-Fry', description: 'Sautéed veggies in garlic soy sauce over rice.', price: '$12' },
        { name: 'Mushroom Risotto', description: 'Creamy rice with mushrooms and truffle oil.', price: '$15' },
        { name: 'Spinach Lasagna', description: 'Layers of spinach, ricotta, and marinara.', price: '$13' },
        { name: 'Stuffed Bell Peppers', description: 'Peppers filled with quinoa and beans.', price: '$11' },
        { name: 'Chickpea Curry', description: 'Chickpeas and spinach in spiced coconut sauce.', price: '$12' },
        { name: 'Zucchini Noodles', description: 'Zoodles tossed with pesto and tomatoes.', price: '$10' },
        { name: 'Tofu Teriyaki Bowl', description: 'Crispy tofu with teriyaki sauce and rice.', price: '$12' },
      ],
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Cheesecake', description: 'Classic cheesecake with berries.', price: '$7' },
        { name: 'Chocolate Cake', description: 'Rich and moist.', price: '$8' },
        { name: 'Ice Cream', description: 'Assorted flavors available.', price: '$5' },
        { name: 'Brownie Sundae', description: 'Warm brownie with ice cream.', price: '$9' },
        { name: 'Fruit Tart', description: 'Fresh fruit on a pastry shell.', price: '$8' },
        { name: 'Macarons', description: 'Assorted French cookies.', price: '$10' },
      ],
    },
    {
      title: 'Beverages',
      items: [
        { name: 'Coffee', description: 'Freshly brewed coffee.', price: '$3' },
        { name: 'Tea', description: 'Assorted tea flavors.', price: '$2' },
        { name: 'Soft Drinks', description: 'Coke, Sprite, etc.', price: '$2' },
        { name: 'Milkshake', description: 'Vanilla, chocolate, or strawberry.', price: '$4' },
        { name: 'Smoothies', description: 'Made with fresh fruits.', price: '$4' },
        { name: 'Hot Chocolate', description: 'Rich and creamy cocoa.', price: '$4' },
        { name: 'Water', description: 'Still or sparkling.', price: '$0.50' },
        { name: 'Lemonade', description: 'Freshly squeezed lemons.', price: '$2' },
      ],
    },
  ];

  return (
    <div className="menu-container">
      {menuSections.map((section, index) => (
        <div key={index} className="menu-section">
          <h2 className="menu-title">{section.title}</h2>
          <div className="menu-grid">
            {section.items.map((item, idx) => (
              <div key={idx} className="menu-card">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <p className="menu-item-price">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
