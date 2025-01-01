import Hero from './Hero'
import Section from './Section'

const sections = [
  {
    title: "History & Culture",
    description: "Situated 20 minutes away from the resort, the splendid monuments of Jaipur deserve a visit. Those huge fortresses of Mughal and Rajput reigns, the Hawa Mahal, Amber Fort, Jaigarh, Jal Mahal aptly describe the culture of the city. Jantar Mantar of Jaipur, the largest of all five similar monuments is an observatory basically, which is indeed an architectural spectacle. Jaipur is a shoppers' Elysium. You can find many different kinds of handicrafts, jewellery, fabrics and even carpets here. Jaipur represents the rich and vibrant lifestyle and tradition of Rajasthan. It offers the best traditional Rajasthani artwork and textiles from this city are world famous.",
    image: "https://www.shutterstock.com/image-photo/chef-cook-food-fire-kitchen-600nw-1758967079.jpg"
  },
  {
    title: "Amber Fort",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem ipsum tenetur inventore maxime soluta, fugiat doloribus ullam, cupiditate quidem aut fugit eligendi quas esse voluptas nisi quo voluptatem distinctio cumque eius quod obcaecati mollitia necessitatibus autem! Rerum magni aut commodi incidunt libero vero, quia quas a corrupti amet ullam veniam porro fugiat nulla assumenda soluta perferendis laboriosam alias temporibus? Harum magni quisquam aliquam sit.",
    image: "https://www.shutterstock.com/image-photo/chef-cook-food-fire-kitchen-600nw-1758967079.jpg",
    reverse: true
  },
  {
    title: "Jaigarh Fort",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta quaerat ipsam fuga magni praesentium nam iste sapiente consequuntur suscipit? Saepe debitis maxime nihil sit magni consequuntur labore vero magnam illum! Magnam reiciendis, labore libero laborum possimus ab esse dignissimos suscipit consequuntur consequatur quasi at eveniet tempore hic non laudantium explicabo ipsum ratione perferendis corporis voluptate expedita aliquam, blanditiis commodi? Voluptatibus quos similique eos velit.",
    image: "https://www.shutterstock.com/image-photo/chef-cook-food-fire-kitchen-600nw-1758967079.jpg"
  },
  {
    title: "Jal Mahal",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, voluptates sapiente optio ullam atque quia sit, consequuntur, praesentium facilis beatae at. Dicta, deleniti error iure nobis impedit rem voluptatem neque deserunt minima? Tenetur ea quas obcaecati. Ratione cupiditate natus neque magnam voluptas doloribus cumque blanditiis minus saepe recusandae quam culpa dicta ipsum quod velit quibusdam, eaque atque fuga asperiores in voluptate eius deserunt aut. Atque?",
    image: "https://www.shutterstock.com/image-photo/chef-cook-food-fire-kitchen-600nw-1758967079.jpg",
    reverse: true
  },
  {
    title: "Jantar Mantar",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestiae blanditiis aspernatur saepe animi, modi deserunt, impedit illo ratione aliquid sapiente error dolorem? Beatae sapiente, assumenda porro sed cumque ex praesentium similique repellat repudiandae expedita facilis labore amet. Earum error incidunt modi aliquid praesentium, placeat atque laborum exercitationem tempora tenetur obcaecati hic itaque assumenda vitae voluptatem maiores corrupti illum ab rerum optio quia suscipit possimus.",
    image: "https://www.shutterstock.com/image-photo/chef-cook-food-fire-kitchen-600nw-1758967079.jpg"
  }
];

function Experience() {
  return (
    <div className="font-montserrat">
      <Hero />
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </div>
  )
}

export default Experience