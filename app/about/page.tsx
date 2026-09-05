import { linkStyle } from 'components/link-style/link_style';
import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ContactPage() {
  const metafields = [{ key: 'multiple_text_contact', namespace: 'panini-cake' }];
  const page = await getPage('contact', metafields);

  if (!page) return notFound();

  const GoogleMapEmbed = () => (
    <div className="mb-[70px] pb-10 text-center leading-7">
      <p> Two naturalists spreading delicious food, knowledge, and love</p>
      <div className="pb-10 pt-10">
        <Image
          src="https://i.postimg.cc/bJXM7GVT/IMG-20240622-212849.jpg"
          width={1000}
          height={1120}
          alt="bee loading"
          className=""
          priority
        />
      </div>
      <h2 className="mb-8 text-header-2 font-semibold leading-none text-main-red-barn">
        Come on by!
      </h2>
      <p className="leading-7">
        Want to buy something or checkout our farm?
        <br></br>
        Have a swarm you need help with?
        <br></br>
        We&apos;re happy to meet you!
        <br></br>
        Feel free to give us a call at{' '}
        <a style={linkStyle} href="tel:5402219408">
          (540) 221-9408
        </a>
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12295.044877868326!2d-77.9814276!3d39.6100611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ca1fddc8a70dd5%3A0x460dfd645b246cd4!2sSugar%20Snap%20Pea%20Farm!5e0!3m2!1sen!2sus!4v1719174991713!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-2.5 pb-10 pt-10"
      ></iframe>
      <h3 className="mt-2.5 text-header-3 font-semibold">Our location</h3>
      <div className="mt-2.5 leading-tight text-dark-teal">
        <a href="https://maps.app.goo.gl/2qcezohCNfxEAAYg9">
          <p>10864 Garrison Hollow Rd</p>
          <p>Clear Spring, Maryland</p>
          <p>21722</p>
        </a>
        <br></br>
        <p>
          <a href="tel:5402219408">(540) 221-9408</a>
        </p>
        <br></br>
        <p>
          <a href="mailto:admin@sugarsnappeafarm.com">admin@sugarsnappeafarm.com</a>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <h1 className="mb-8 text-center text-5xl font-bold text-main-red-barn">About Us</h1>
      <Prose className="mb-[70px]" html={page.body as string} />
      <GoogleMapEmbed />
    </>
  );
}
