import Benefits from "@/components/home/Benefits"
import Consumption from "@/components/home/Consumption"
import Header1 from "@/components/home/Header1"
import Quality from "@/components/home/Quality"
import Recipe from "@/components/home/Recipe"
import Source from "@/components/home/Source"
import Vid from "@/components/home/Vid"

export default function Home() {
  return (
    <>
      <Header1></Header1>
      <Vid></Vid>
      <Benefits content={[
        {
          heading: "Rich in Antioxidants:",
          desc: "The anthocyanins in blackwheat help reduce oxidative stress and may protect against various diseases."
        },
        {
          heading: "High Fiber Content:",
          desc: ` Supports digestive health and helps in weight management.\nLow Glycemic Index: May help in managing blood sugar levels, making it suitable for diabetics.`
        },
        {
          heading: "Nutrient-Rich:",
          desc: "Contains essential nutrients like iron, zinc, and magnesium."
        }
      ]}></Benefits >
      <Source desc={`
punjab, bhopal\n
It is still not that much popular among the farmers probably because of its low yield. Though the cultivation of it is started in some areas of Madhya Pradesh, Punjab, Haryana, Gujrat.\n
Black wheat was mainly developed for growing in and around Punjab and northern states like Haryana, Uttar Pradesh and Madhya Pradesh. Due to less availability of black wheat seeds in seed stores all over India, black wheat is still not a popular crop choice amongst farmers. Also the fact that this variety of wheat gives comparatively lower yield than traditional wheat variety, the farmers are skeptical about its widespread cultivation.
   `}></Source >
      <Recipe
        recipes={
          [
            {
              heading: "Methi ki puri",
              desc: "Crispy, spiced perfection with a hint of fresh fenugreek!",
              img: "https://i2.wp.com/everydayvegcooking.com/wp-content/uploads/2023/01/Black-wheat-flour-and-methi-ki-puris-are-ready.jpg?w=700&ssl=1"
            },
            {
              heading: "Black wheat sourdough",
              desc: " Rustic, hearty, and naturally nutritious with a rich, earthy twist!",
              img: "https://cauldronsisters.wordpress.com/wp-content/uploads/2020/08/image1-2.jpeg"
            },
            {
              heading: "Black Wheat Crackers",
              desc: "Crispy, wholesome bites packed with rich, nutty goodness!",
              img: "https://cauldronsisters.wordpress.com/wp-content/uploads/2020/08/image0.jpeg"
            },
            {
              heading: "All grain American Bear",
              desc: "Pure, craft perfection brewed from the finest grains!",
              img: "https://cauldronsisters.wordpress.com/wp-content/uploads/2020/08/debunking-the-myths-surrounding-dark-beer2-hero.jpg"
            },
            {
              heading: "Galettes de sarrasin",
              desc: "Savory buckwheat crêpes, a French classic with a rustic twist!",
              img: "https://cauldronsisters.wordpress.com/wp-content/uploads/2020/08/ploye-galette-de-sarrasin-3802a664.jpg"
            },
          ]
        }
      ></Recipe >
      <Consumption desc={`
        1. Black wheat holds fewer carbs than white wheat. Hence, it’s great for those working on their weight loss program.
2. Eating black wheat roti controls blood sugar level, reducing the risk of diabetes.
3. Its consumption helps reduce stress as it keeps blood pressure and other health issues at bay.
4. The unsaturated fatty acids found in black wheat are healthy for the heart as they keep cholesterol in check.
5. It keeps the digestive system running effectively as it’s not heavy on the stomach compared to white wheat.`}></Consumption>
      <Quality desc="Our black wheat is sourced from trusted farms, meticulously grown using sustainable practices. Each grain undergoes rigorous quality checks to ensure its rich color, nutrient density, and wholesome taste meet the highest standards. Packed with antioxidants and fiber, it’s a premium choice for healthy and flavorful recipes."></Quality>
    </>
  )
}

