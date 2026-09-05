import Facebook from 'public/icons/social/facebook';
import Instagram from 'public/icons/social/instagram';

export default function Footer() {
  const CompanyAddress = () => (
    <div className="pt-[1.87rem] text-center sm:pt-0">
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

  const SocialIcons = () => (
    <div className="flex items-center gap-5 pt-[1.8rem]">
      <a href="https://www.facebook.com/profile.php?id=61561409632693">
        <Facebook className="max-w-[1.8rem]" />
      </a>
      <a href="https://www.instagram.com/sugarsnappeafarm">
        <Instagram className="max-w-[1.8rem]" />
      </a>
    </div>
  );

  return (
    <footer className="mt-[70px] bg-coral pb-10 pt-12">
      <div className="container mx-auto flex max-w-[1140px] flex-col items-center px-2.5">
        <div className="flex w-full flex-col-reverse items-center justify-center">
          <CompanyAddress />
        </div>
        <div className="mt-[4.3rem] flex w-full flex-col items-center justify-center ">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
