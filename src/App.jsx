import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";

function App() {


  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 40 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls>
      <Experience />
      <Scroll html>
      <h1 className="text-6xl font-bold underline flex flex-col items-center content-center w-screen">
       CLEOPATRA <br /> v0.1
      </h1>
      <br/>
      {/* <div className="text-l font-light flex flex-col items-center content-center w-screen bg-green">The most significant difference between Apple MacBook Pro (Product A) and Apple MacBook Air (Product B) lies in their performance and capabilities. The MacBook Pro, represented by Product A, features a more powerful M2 Pro chip, a larger 16.2-inch Retina display, and higher memory and storage options. This makes it an ideal choice for professionals who require intensive tasks such as video editing, graphic design, and coding. On the other hand, the MacBook Air (Product B) is designed with portability in mind, featuring a more compact 13.6-inch Liquid Retina Display, making it suitable for users who prioritize mobility and everyday tasks. This performance disparity is reflected in the pricing, with the MacBook Pro being priced higher due to its advanced specifications and performance capabilities compared to the more balanced pricing of the MacBook Air, which offers a good balance between performance and affordability.</div> */}
      {/* <div className="text-l font-light flex flex-col items-center content-center w-screen bg-green">The "best" laptop to buy depends on your specific needs, preferences, and budget. There are several top-performing laptops available on the market, each excelling in different aspects. Here are a few popular options based on different criteria:

1. **Overall Performance:** If you're looking for exceptional overall performance, laptops powered by the latest Intel or AMD processors, ample RAM (at least 8GB), and fast SSD storage are recommended. Brands like Dell XPS, HP Spectre, and MacBook Pro offer powerful options.

2. **Gaming:** For gaming, laptops with dedicated graphics cards from NVIDIA or AMD are essential. Gaming laptops from brands like ASUS ROG, MSI, and Acer Predator are known for their gaming-focused features and powerful hardware.

3. **Portability:** If portability is a priority, ultrabooks like the Dell XPS 13, MacBook Air, and Lenovo ThinkPad X1 Carbon offer a great balance between performance and portability. They are lightweight and slim without compromising too much on power.

4. **Creativity and Design:** If you're into content creation, laptops with high-resolution displays, color accuracy, and powerful CPUs are ideal. Devices like the MacBook Pro, Microsoft Surface Laptop, and HP Envy x360 are popular among creators.

5. **Budget-Friendly:** There are several budget-friendly options that offer good performance for everyday tasks. Laptops from brands like Acer, Lenovo Ideapad, and HP Pavilion provide decent performance without breaking the bank.

6. **2-in-1 Convertibles:** If you prefer a versatile device, 2-in-1 laptops like the Microsoft Surface Pro, HP Spectre x360, and Lenovo Yoga offer both laptop and tablet functionality.

It's recommended to consider factors such as your usage (work, gaming, content creation), operating system preference (Windows, macOS, ChromeOS), size and weight preferences, as well as your budget when choosing the best laptop for your needs. Reading reviews, comparing specifications, and visiting retail stores to try out laptops in person can also help you make an informed decision.</div> */}

      </Scroll>

      </ScrollControls>
    </Canvas>
  );
}

export default App;
