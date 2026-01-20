import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Card1 from './Card1';
const WoodOpenings = [
   
    {
        Logo: "https://i.pinimg.com/736x/09/32/1e/09321e7fff9e7a927e2c3f1735056157.jpg",
        Name: "Wooden Bed",
        tag1: "A wooden bed offers the perfect blend of durability and natural beauty. Crafted from high-quality wood like teak or sheesham, it provides a strong foundation and long-lasting comfort. Skilled artisans shape, polish, and finish the frame with precision, ensuring both strength and elegance in every detail."
    },
    {
        Logo: "https://mohh.com/cdn/shop/files/Creffield-Sofa_Acacia-Fog-Grey.jpg?v=1744628967&width=1500",
        Name: "Wooden Sofa",
        tag1: "A wooden sofa is a blend of strength, elegance and long-lasting comfort. Made from teak, sheesham or oak wood, it offers durability and a natural aesthetic that enhances any living space. Skilled craftsmanship transforms raw wood into a smooth, polished frame fitted with soft cushions and rich upholstery."
    },
    {
        Logo: "https://m.media-amazon.com/images/I/71nmUg6U7eL.jpg",
        tag1: "A wooden table adds warmth and sophistication to any room. Made from solid wood, it features a sturdy top and strong legs designed for daily use. The craftsmanship includes smooth finishing, perfect edges, and polished surfaces that highlight the natural grain of the wood."
    },
    {
        Logo: "https://images-cdn.ubuy.co.in/6549f7cd5f2ab11ea346dbde-kouxi-wooden-folding-chairs-comfy-solid.jpg",
        Name: "Wooden Chair",
        tag1: "A wooden chair combines traditional design with modern comfort. Expert woodworkers carve and join the wooden pieces with precision, creating a supportive structure. Its polished finish and natural patterns make it a perfect addition to dining areas, offices or bedrooms."
    },
    {
        Logo: "https://i.ytimg.com/vi/czhnmzFVyrg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCOiU9ZR3ids-nRUlBf2bbBTIn2w",
        Name: "Wooden Cupboard",
        tag1: "A wooden cupboard offers spacious storage with a touch of timeless elegance. Built from premium hardwood, it features smooth-opening doors, sturdy shelves and a beautiful external finish. Each piece is designed to bring practicality and style into your home."
    },
    {
        Logo: "https://athomewiththebarkers.com/wp-content/uploads/2016/11/ORC-Family-Room-DIY-Shelves-700x1057.jpg",
        Name: "Wooden Shelf",
        tag1: "A wooden shelf is a functional and decorative furniture piece that enhances wall space. Crafted from strong and lightweight wood, it provides ample room for books, decor items or essentials while maintaining a clean, natural look in the interior décor."
    },
    {
        Logo: "https://m.media-amazon.com/images/I/81jWfS2Td9L._AC_UF894,1000_QL80_.jpg",
        Name: "Wooden Dining Set",
        tag1: "A wooden dining set adds a premium feel to every meal. Made from durable hardwood, it includes a polished dining table and comfortable chairs. The craftsmanship ensures strength, a smooth finish and an elegant design ideal for families and guests."
    },
    {
        Logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJWERpbEXHpFkzc52-zpmuflMfpK3G9zmZQ&s",
        Name: "Wooden Door",
        tag1: "A wooden door represents strength, security and artistic craftsmanship. Carved from solid wood, it offers excellent durability and a natural look. Whether simple or decorative, each door is polished to highlight the beautiful wood patterns."
    },
    {
        Logo: "https://img500.exportersindia.com/product_images/bc-500/2023/9/9435264/fancy-wooden-almirah-1633951425-6033252.jpg",
        Name: "Wooden Almirah",
        tag1: "A wooden almirah is a classic storage solution made from strong hardwood. It features multiple compartments, smooth hinges and an elegant finish. Its natural wood grain adds charm while providing long-lasting durability in any home."
    },
    {
        Logo: "https://www.insaraf.com/cdn/shop/products/36248_0.jpg?v=1599718854",
        Name: "Wooden Stool",
        tag1: "A wooden stool is compact, sturdy and versatile. Expertly crafted from hardwood, it offers reliable support while maintaining a simple, natural appearance. Its smooth edges and polished surface make it useful in living rooms, kitchens or bedrooms."
    }
];




  

function App() {
  return (
    < >
    <Card/>
      {WoodOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card1 Name={elem.Name}tag1={elem.tag1} Logo={elem.Logo}/>
        </div>
      })}
    
    
    </>
  );
}

export default App;
