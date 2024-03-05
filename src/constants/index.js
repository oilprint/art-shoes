import { v4 as uuidv4 } from "uuid";
import { bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from '../assets/images'

export const categoryList = [
"All", "Monet style", "Van Gogh Style", "Picasso style", "Other"
];

export const socialList = [
  { id: uuidv4(),
    title: 'Facebook',
    href: "https://www.facebook.com/",
  },
  { id: uuidv4(),
    title: 'Youtube',
    href: "https://www.youtube.com/",
  },
  { id: uuidv4(),
    title: 'Instagram',
    href: "https://www.instagram.com/",
  }
]

 export const shoes = [
    {id: uuidv4(),
      thumbnail: thumbnailShoe1,
      bigShoe: bigShoe1,
    },
    {id: uuidv4(),
      thumbnail: thumbnailShoe2,
      bigShoe: bigShoe2,
    },
    {id: uuidv4(),
      thumbnail: thumbnailShoe3,
      bigShoe: bigShoe3,
    },
];

export const advantagesList = [
  {id: uuidv4(),
    number: "01",
    title: "Unique Design:",
    text: "Our sneakers boast original and inspiring designs inspired by the works of great artists such as Van Gogh, Dali, and Monet, making each pair a unique work of art"
  },
  {id: uuidv4(),
    number: "02",
    title: "Comfort and Quality:",
    text: "We use high-quality materials and innovative manufacturing technologies to ensure maximum comfort and durability for each pair of sneakers, providing you with confidence throughout the day"
  },
  {id: uuidv4(),
    number: "03",
    title: "Style and Self-Expression:",
    text: "Our sneakers not only provide excellent support and comfort while walking but also help you express your individuality and style through vibrant and unique designs that attract attention and inspire those around you"
  }
];


 
 
 