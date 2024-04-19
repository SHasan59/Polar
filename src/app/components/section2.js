import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';

export default function Section2() {

  const posts = [
    {
      id: 1,
      imageUrl: '/images/zelda_awakening.jpg',
      title: 'The Legend of Zelda: Hyrule\'s Awakening Announced for Nintendo Switch',
      linkUrl: '#',
      category: 'Nintendo',
      date: 'Mar 15, 2024',
      content:
        'Nintendo has announced a new installment in The Legend of Zelda series titled "Hyrule\'s Awakening" for the Nintendo Switch. In this game, players will embark on a journey to awaken the sleeping guardians of Hyrule and restore peace to the land. With stunning visuals, innovative gameplay mechanics, and a captivating storyline, "Hyrule\'s Awakening" promises to be an unforgettable adventure for fans of the franchise.',
    },    
    {
      id: 2,
      imageUrl: '/images/masseffect_rebirth.jpg',
      title: 'Mass Effect: Andromeda - Rebirth Set to Revolutionize the Franchise',
      linkUrl: '#',
      category: 'BioWare',
      date: 'Apr 5, 2024',
      content:
        'BioWare has unveiled the latest installment in the Mass Effect series titled "Mass Effect: Andromeda - Rebirth." Set in the distant future, players will explore the uncharted regions of the Andromeda galaxy and encounter new civilizations, threats, and mysteries. With enhanced graphics, improved gameplay mechanics, and a vast open world to explore, "Andromeda - Rebirth" aims to redefine the franchise and deliver an epic sci-fi adventure like never before.',
    },    
    {
      id: 3,
      imageUrl: '/images/uncharted_realms.jpg',
      title: 'Uncharted Realms: Forgotten Treasures Unveiled by Naughty Dog',
      linkUrl: '#',
      category: 'Naughty Dog',
      date: 'Mar 20, 2024',
      content:
        'Naughty Dog has announced a new entry in the Uncharted series titled "Uncharted Realms: Forgotten Treasures." In this thrilling adventure, players will join Nathan Drake on a quest to uncover ancient artifacts and lost civilizations across the globe. With stunning visuals, cinematic storytelling, and heart-pounding action, "Forgotten Treasures" promises to be a worthy addition to the acclaimed Uncharted franchise.',
    },    
    {
      id: 4,
      imageUrl: '/images/cyberpunk.jpg',
      title: 'Cyberpunk 2077: Rise of Night City sets new records with immersive open-world gameplay',
      linkUrl: '#',
      category: 'CD Projekt Red',
      date: 'March 15, 2024',
      content: 'Step into the neon-lit streets of Night City once again as Cyberpunk 2077: Rise of Night City takes players on an unforgettable journey through a dystopian future. With its immersive open-world gameplay, jaw-dropping visuals, and compelling storyline, the game sets new records for the RPG genre. Explore the vibrant districts of Night City, forge alliances with powerful factions, and shape the fate of the city with your choices. Cyberpunk 2077: Rise of Night City is a testament to CD Projekt Red\'s commitment to delivering groundbreaking gaming experiences.'
    },
    {
      id: 5,
      imageUrl: '/images/reddead_legends.jpg',
      title: 'Red Dead Redemption: Legends of the West Unveiled by Rockstar Games',
      linkUrl: '#',
      category: 'Rockstar Games',
      date: 'Mar 25, 2024',
      content:
        'Rockstar Games has announced a new installment in the Red Dead Redemption series titled "Legends of the West." Set in the final years of the American Frontier, players will experience the untamed wilderness, confront outlaws, and forge their own path in a world on the brink of change. With breathtaking visuals, immersive gameplay, and a richly detailed open world, "Legends of the West" promises to capture the spirit of the Old West like never before.',
    },    
    {
      id: 6,
      imageUrl: '/images/witcher_conqueror.jpg',
      title: 'The Witcher: Blood of the Conqueror Revealed by CD Projekt Red',
      linkUrl: '#',
      category: 'CD Projekt Red',
      date: 'Mar 30, 2024',
      content:
        'CD Projekt Red has unveiled the latest entry in The Witcher series titled "Blood of the Conqueror." Set in a world torn apart by war and political intrigue, players will assume the role of Geralt of Rivia as he embarks on a quest to uncover the truth behind a dark conspiracy threatening the realm. With immersive storytelling, deep character development, and thrilling combat, "Blood of the Conqueror" promises to be an epic RPG experience for fans of the franchise.',
    },    
  ]
  
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 md:grid-cols-3 gap-14">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

function Post({ post }) {
  return (
    <div className="item">
      <div className="immages">
        <Link href={post.linkUrl}>
          <Image
            src={post.imageUrl}
            className="rounded"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="catagories">
          <Link href={post.linkUrl} className="text-blue-300">
            {post.category}
          </Link>
          <Link href={post.linkUrl} className="text-white-600">
            {' '}
            - {post.date}
          </Link>
        </div>
        <div className="title">
          <Link
            href={post.linkUrl}
            className="text-xl font-bold text-white-800 hover:text-gray-600"
          >
            {post.title}
          </Link>
        </div>
        <p className="text-white-500 py-3">{post.content}</p>
        <Author></Author>
      </div>
    </div>
  )
}