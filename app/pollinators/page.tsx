import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  flowerImages,
  getPollinatorInfoURL,
  pollinatorImages,
  pollinators
} from './data/pollinators';
import PdfDownloadButtons from './pdf-download-buttons';

export const metadata = {
  title: 'Maryland Native Pollinators - Sugar Snap Pea Farm',
  description:
    'Learn about important Maryland native pollinators that help our native plants thrive.'
};

// Define types for pollinator data
interface Pollinator {
  title: string;
  subtitle: string;
  identification: string[];
  flowers: string[];
  ecological: string[];
  habitat: string[];
  color: string;
  photoCredit?: string;
  photoCreditUrl?: string;
  flowerPhotoCredit?: string;
}

export default function PollinatorsPage(): React.ReactNode {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-center text-3xl font-bold text-main-red-barn">
          Maryland Native Pollinators
        </h1>

        <div className="mx-auto mb-8 max-w-4xl">
          <p className="mb-4">
            As naturalists, we at Sugar Snap Pea Farm believe in natural farming practices that
            support and nurture our local ecosystem. Native pollinators play a crucial role in this
            system, helping to pollinate our native plants and maintain biodiversity.
          </p>
          <p className="mb-4">
            Maryland is home to over{' '}
            <Link
              color="blue"
              href="https://dnr.maryland.gov/wildlife/Pages/habitat/wawhatsthebuzz.aspx"
              style={{ color: 'blue' }}
            >
              400 species of native bees
            </Link>
            , along with various wasps and other pollinators. These fascinating creatures are
            essential for the health of our forest and the surrounding natural areas.
          </p>
          <p className="mb-6">
            Below you&apos;ll find information about some of the key pollinators you might see
            around Maryland. Each card provides details about the pollinator&apos;s identifying
            features, ecological importance, habitat, and the flowers they pollinate. Use this guide
            to help identify these beneficial insects on your expedition into the natural world!
          </p>
          <p className="mb-6 text-center" style={{ fontWeight: 'bold' }}>
            Click the scientific name for more pictures and information about each pollinator.
            <br></br>
            Each card has an 8x11 PDF that can be downloaded via the button on the card.
          </p>
        </div>

        {/* Pollinator Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pollinators.map((pollinator, index) => (
            <div key={index} className="flex h-full">
              <PollinatorCard pollinator={pollinator} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Want to learn more about supporting pollinators on your property?
            <br />
            Do you have a swarm you need help with?
          </p>
          <Link
            href="/about"
            className="rounded-md bg-main-red-barn px-6 py-2 text-white transition-colors duration-300 hover:bg-main-red-barn"
          >
            Give us a call
          </Link>
        </div>
      </div>
    </div>
  );
}

// Individual pollinator card component
function PollinatorCard({
  pollinator,
  index
}: {
  pollinator: Pollinator;
  index: number;
}): React.ReactNode {
  const {
    title,
    subtitle,
    identification,
    flowers,
    ecological,
    habitat,
    color,
    photoCredit,
    photoCreditUrl
  } = pollinator;
  const cardId = `pollinator-card-${index}`;
  const pollinatorImageSrc = pollinatorImages[title];
  const topFlower = flowers[0];
  const topFlowerImageSrc = topFlower ? flowerImages[topFlower] : undefined;

  // Function to get a lighter version of the color for backgrounds
  const getLighterColor = (): string => {
    return color + '20'; // Add 20% opacity
  };

  return (
    <div
      id={cardId}
      className="overflow-hidden rounded-lg border shadow-md"
      style={{ borderColor: color }}
    >
      {/* Header */}
      <div className="px-3 py-4 text-center text-white" style={{ backgroundColor: color }}>
        <h2 className="text-xl font-bold">{title}</h2>
        <a
          href={getPollinatorInfoURL(subtitle)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm italic underline transition-colors hover:text-gray-200"
        >
          {subtitle}
        </a>
      </div>

      {/* Body */}
      <div className="h-full p-4" style={{ backgroundColor: getLighterColor() }}>
        {/* Identification Section */}
        <div className="mb-4 w-full rounded-lg border bg-white p-3 shadow-sm">
          <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
            Identification
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {identification.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div
                  className="mt-1 h-3 w-3 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <div className="text-gray-800">{point}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Insect Image - Full Width */}
        {pollinatorImageSrc && (
          <div className="mb-4 w-full overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={pollinatorImageSrc}
                alt={`${title} picture`}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
            {photoCredit && (
              <p className="text-xs px-3 pb-2 pt-1 text-center text-gray-600">
                {photoCreditUrl ? (
                  <a
                    href={photoCreditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {photoCredit}
                  </a>
                ) : (
                  photoCredit
                )}
              </p>
            )}
          </div>
        )}

        {/* Flowers + Flower Image Row */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          {/* Flowers Pollinated Section */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-2/3">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              Flowers Pollinated
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {flowers.map((flower, idx) => (
                <div
                  key={idx}
                  className="text-xs rounded-full px-3 py-1 font-medium text-white"
                  style={{
                    backgroundColor: color,
                    opacity: 1 - idx * 0.15 // First item is full opacity, gradually fades for less important flowers
                  }}
                >
                  {flower}
                </div>
              ))}
            </div>
          </div>

          {/* Top Flower Image */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/3">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              {topFlower}
            </h3>
            <div className="flex h-24 flex-col items-center justify-center text-center">
              {topFlowerImageSrc ? (
                <img
                  src={topFlowerImageSrc}
                  alt={topFlower}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-xs text-gray-500">No image available</span>
              )}
            </div>
            {pollinator.flowerPhotoCredit && (
              <p className="text-xs px-3 pb-2 pt-1 text-center text-gray-600">
                {pollinator.flowerPhotoCredit}
              </p>
            )}
          </div>
        </div>

        {/* Bottom sections */}
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Ecological importance */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/2">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              Ecological Importance
            </h3>
            <div className="text-sm text-gray-800">
              {ecological.map((point, idx) => (
                <div key={idx} className="mb-2 flex items-center">
                  <div
                    className="text-xs mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {idx + 1}
                  </div>
                  <div>{point}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Habitat */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/2">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              Habitat
            </h3>
            <div className="space-y-2 text-sm text-gray-800">
              {habitat.map((point, idx) => (
                <div key={idx} className="border-l-4 pl-2" style={{ borderColor: color }}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <PdfDownloadButtons pollinator={pollinator} cardId={cardId} />
        </div>
      </div>
    </div>
  );
}
