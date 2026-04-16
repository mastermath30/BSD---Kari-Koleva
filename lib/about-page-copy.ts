/** About page (/about) — artist biography and section content. */
export const aboutPageCopy = {
  heading: "Kari Koleva",

  /** Opening bio paragraphs shown in the main hero column. */
  bio: [
    "Hi, I'm Kari Koleva, a Seattle-based artist with Bulgarian roots. I've loved art for as long as I can remember, and what started as something I did for fun has grown into something I truly care about. I'm currently balancing my art with high school, and I hope to study architecture in the future.",
    "Since 2023, I've created custom portraits for clients around the world, including pets, horses, and birds. I enjoy working with watercolor, and I love focusing on the small details that make each piece feel personal and meaningful.",
  ],

  /** "How it all started" subsection. */
  howItStartedTitle: "How it all started",
  howItStarted: [
    "My journey began when I was 12 and wanted to create something special for my grandmother during a summer visit. I drew a portrait of my Pomeranian, Alex, who I still love so much today. She loved the piece, and when I got home, I painted him — this time with watercolor.",
    "That moment made me realize I wanted to share my art with others. I decided to try selling my work at my school's winter market, not knowing what to expect. It ended up being a success — I got multiple orders, and from there, my work slowly grew through word of mouth.",
    "Today, I continue to take on commissions and connect with clients, turning my passion into something I'm proud of — something that wouldn't have been possible without the support and encouragement I've had along the way. I'm especially grateful to my mom, who has always supported me and encouraged me to follow my passions.",
  ],

  /** "Life with animals" subsection. */
  lifeWithAnimalsTitle: "Life with animals",
  lifeWithAnimals: [
    "Animals have always been a huge part of my life. Even before I had my own dog, I would never pass up the chance to pet dogs on the street. I remember asking to go to dog parks just so I could spend time around them.",
    "In Bulgaria, where my family is from, there are many stray animals. My mom and I would often feed them and even take some to the vet for vaccinations. Seeing that at a young age made me more aware of how much animals rely on people for care and kindness — and it made me feel really connected to them.",
    "When I finally got my dog, Alex, my connection to animals became even deeper. He's not just a pet; he's part of my family, and he showed me how much love and personality animals bring into people's lives.",
    "That's a big part of why I paint animals. I want to capture not just what a pet looks like, but what they mean to someone — their personality, their presence, and the bond they share with their owner. To me, each portrait is a way of turning that connection into something you can keep forever.",
  ],

  contactButtonLabel: "Contact",
} as const;

/**
 * Main artist photo — replace `src` with real photo when available.
 * TBD: real photo of Kari.
 */
export const aboutPageImage = {
  src: "https://assets.karikoleva.com/image12.webp",
  alt: "Kari Koleva — artist portrait",
} as const;

/**
 * Subsection photo placeholders — swap `src` for real images when available.
 * TBD: original Alex painting(s), baby/childhood photo, me-and-Alex photo.
 */
export const aboutPageSubPhotos = {
  alexPainting: {
    src: "https://assets.karikoleva.com/image11.webp",
    alt: "Original portrait of Alex by Kari Koleva",
  },
  babyPhoto: {
    src: "https://assets.karikoleva.com/image13.webp",
    alt: "Young Kari at an art exhibition",
  },
  meAndAlex: {
    src: "" as string, // TBD — photo of Kari with Alex
    alt: "Kari and Alex (photo TBD)",
  },
} as const;
