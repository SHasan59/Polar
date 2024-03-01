import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 md:grid-cols-3 gap-14">
        {Post()}
        {Post2()}
        {Post3()}
        {Post4()}
        {Post2()}
        {Post2()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="immages">
        <Link href={'#'}>
          <Image
            src={'/images/pokemon z.png'}
            className="rounded"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="catagories">
          <Link href={'#'} className="text-blue-300">
            Nintendo
          </Link>
          <Link href={'#'} className="text-white-600">
            {' '}
            - Feb 28,2024
          </Link>
        </div>
        <div className="title">
          <Link
            href={'#'}
            className="text-xl font-bold text-white-800 hover:text-gray-600"
          >
            New “Pokémon Legends Z-A” Game Announced for Switch in 2025
          </Link>
        </div>
        <p className="text-white-500 py-3">
          The Pokémon Company International announced a new game titled Pokémon
          Legends Z-A that will be released in 2025 for Nintendo Switch. The
          game news was announced during the Pokémon Presents stream on February
          27th, known as Pokémon Day. The game’s official website describes the
          game as a new adventure within Lumiose City, where an urban
          redevelopment plan is underway to shape the city into a place that
          belongs to both people and Pokémon. The website also confirms that the
          game will be released simultaneously worldwide in 2025.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}

function Post2() {
  return (
    <div className="item">
      <div className="immages">
        <Link href={'#'}>
          <Image
            src={'/images/ff7.png'}
            className="rounded"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="catagories">
          <Link href={'#'} className="text-blue-300">
            Playstation
          </Link>
          <Link href={'#'} className="text-white-600">
            {' '}
            - Feb 29,2024
          </Link>
        </div>
        <div className="title">
          <Link
            href={'#'}
            className="text-xl font-bold text-white-800 hover:text-gray-600"
          >
            Final Fantasy VII Rebirth and how it revisits the twist that changed
            video game history
          </Link>
        </div>
        <p className="text-white-500 py-3">
          The Pokémon Company International announced a new game titled Pokémon
          Legends Z-A that will be released in 2025 for Nintendo Switch. The
          game news was announced during the Pokémon Presents stream on February
          27th, known as Pokémon Day. The game’s official website describes the
          game as a new adventure within Lumiose City, where an urban
          redevelopment plan is underway to shape the city into a place that
          belongs to both people and Pokémon. The website also confirms that the
          game will be released simultaneously worldwide in 2025.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}

function Post3() {
  return (
    <div className="item">
      <div className="immages">
        <Link href={'#'}>
          <Image
            src={'/images/p3r.png'}
            className="rounded"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="catagories">
          <Link href={'#'} className="text-blue-300">
            JRPG
          </Link>
          <Link href={'#'} className="text-white-600">
            {' '}
            - Feb 13,2024
          </Link>
        </div>
        <div className="title">
          <Link
            href={'#'}
            className="text-xl font-bold text-white-800 hover:text-gray-600"
          >
            Persona 3 Reload Becomes Fastest-Selling Game in Atlus History With
            1 Million Sales
          </Link>
        </div>
        <p className="text-white-500 py-3">
          Persona 3 Reload is described as “a captivating reimagining of the
          genre-defining RPG, reborn for the modern era.” Rumors of this games
          existence floated around for a long time but were mostly shunned as
          fake until the fire was stoked by a snippet of the games supposed
          trailer leaked a few months ago. Prior to its debut in the Xbox
          Showcase, the official ATLUS accounts posted the trailer a few days
          early which also contained the release date. The posts were quickly
          taken down, but not before it was reposted and spread throughout the
          community.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}

function Post4() {
  return (
    <div className="item">
      <div className="immages">
        <Link href={'#'}>
          <Image
            src={'/images/polarblack.png'}
            className="rounded"
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="catagories">
          <Link href={'#'} className="text-blue-300">
            Sub Heading
          </Link>
          <Link href={'#'} className="text-white-600">
            {' '}
            - Feb 13,2024
          </Link>
        </div>
        <div className="title">
          <Link
            href={'#'}
            className="text-xl font-bold text-white-800 hover:text-gray-600"
          >
            The Polar Bear Game is the best games ever.
          </Link>
        </div>
        <p className="text-white-500 py-3">
          The Polar Bear Game" is an enthralling adventure set in the vast and
          unforgiving Arctic landscape, placing players in the furry paws of a
          courageous polar bear protagonist. As they navigate through icy
          terrain and face the harsh elements, players must overcome a series of
          challenges, from evading dangerous predators to solving puzzles and
          unraveling the mysteries of the Arctic wilderness. With stunning
          visuals and immersive storytelling, the game offers an unforgettable
          experience that not only entertains but also educates players about
          the importance of environmental conservation and the delicate balance
          of ecosystems. "The Polar Bear Game" promises an exhilarating journey
          where survival instincts and environmental awareness are key to
          success, inviting players to embark on an epic quest that celebrates
          the wonders of nature and the resilience of Arctic wildlife.
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
