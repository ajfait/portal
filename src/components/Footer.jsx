import React from "react";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 bg-neutral-800 pt-10 pb-10 text-neutral-300 text-center">
      <div>
        <p className="font-semibold mb-2">Contact</p>
        <p className="hover:text-neutral-100">
          <a href="tel:+16089605211">(608) 960-5211</a>
        </p>
        <p className="hover:text-neutral-100">
          <a href="mailto:info@misfitfelines.org">info@misfitfelines.org</a>
        </p>
      </div>
      <div>
        <p className="font-semibold mb-2">Follow</p>
        <div className="flex justify-center items-center space-x-4">
          <a target="blank" href="https://www.facebook.com/MisfitFelines/">
            <img
              src="/facebook-icon.png"
              alt="Misfit Felines on Facebook"
              style={{ maxHeight: "25px" }}
            />
          </a>
          <a target="blank" href="https://www.instagram.com/MisfitFelines/">
            <img
              src="/instagram-icon.png"
              alt="Misfit Felines on Instagram"
              style={{ maxHeight: "25px" }}
            />
          </a>
        </div>
      </div>
      <div>
        <p className="font-semibold mb-2">Donate</p>
        <p className="hover:text-neutral-100">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=HWDWVUUB8PAQW&mibextid=Zxz2cZ"
            target="blank"
          >
            PayPal
          </a>
        </p>
        <p className="hover:text-neutral-100">
          <a href="https://account.venmo.com/u/Joelle-Thorne" target="blank">
            Venmo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
