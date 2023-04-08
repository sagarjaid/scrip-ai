import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const TC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions — Scrip AI</title>
        <meta name="title" content="Terms and Conditions — Scrip AI" />
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/tc" />
        <meta property="og:title" content="Terms and Conditions — Scrip AI" />
        <meta
          property="og:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="og:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripai.com/tc" />
        <meta
          property="twitter:title"
          content="Terms and Conditions — Scrip AI"
        />
        <meta
          property="twitter:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="twitter:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://scripai.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main className="m-auto flex max-w-5xl flex-col px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="/">
            <img src="/scrip.svg" className="w-[80px]" />
          </a>
          <div>
            <ul className="flex items-center gap-4 text-sm">
              {/* <li className="cursor-pointer">Pricing</li> */}
              <ll className="rounded-md bg-rose-50 p-1 px-2">
                <a href="/new">What's new</a>
              </ll>
              <li className="hidden sd:inline">
                <a
                  href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                  target="_blank"
                >
                  <img
                    className="w-36"
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                  />
                </a>
              </li>
              <li className="flex w-fit items-center gap-1 rounded-full bg-rose-500 p-1 px-3	 text-white shadow-sm ">
                <a href="/app">Try for free!</a>
                <a href="/app">
                  <svg
                    className="w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col items-start justify-center gap-6 p-2 py-10 ">
          <div className="flex flex-col gap-2 text-2xl font-medium">
            Terms and Conditions
            <div className="text-sm">Updated on 1 April, 2023</div>
          </div>
          <p>
            Welcome to Scrip AI! .These terms and conditions outline the rules
            and regulations for the use of Scrip AI's Website, located at
            https://scripai.com/.
          </p>

          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Scrip AI if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>

          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company's terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of in. Any use of the above terminology
            or other words in the singular, plural, capitalization and/or he/she
            or they, are taken as interchangeable and therefore as referring to
            same.
          </p>

          <h3>
            <strong>Cookies</strong>
          </h3>

          <p>
            We employ the use of cookies. By accessing Scrip AI, you agreed to
            use cookies in agreement with the Scrip AI's Privacy Policy.
          </p>

          <p>
            Most interactive websites use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>

          <h3>
            <strong>License</strong>
          </h3>

          <p>
            Unless otherwise stated, Scrip AI and/or its licensors own the
            intellectual property rights for all material on Scrip AI. All
            intellectual property rights are reserved. You may access this from
            Scrip AI for your own personal use subjected to restrictions set in
            these terms and conditions.
          </p>

          <p>You must not:</p>
          <ul>
            <li>Republish material from Scrip AI</li>
            <li>Sell, rent or sub-license material from Scrip AI</li>
            <li>Reproduce, duplicate or copy material from Scrip AI</li>
            <li>Redistribute content from Scrip AI</li>
          </ul>

          <p>This Agreement shall begin on the date hereof.</p>

          <p>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            Scrip AI does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and
            opinions of Scrip AI,its agents and/or affiliates. Comments reflect
            the views and opinions of the person who post their views and
            opinions. To the extent permitted by applicable laws, Scrip AI shall
            not be liable for the Comments or for any liability, damages or
            expenses caused and/or suffered as a result of any use of and/or
            posting of and/or appearance of the Comments on this website.
          </p>

          <p>You warrant and represent that:</p>

          <ul>
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>

          <p>
            You hereby grant Scrip AI a non-exclusive license to use, reproduce,
            edit and authorize others to use, reproduce and edit any of your
            Comments in any and all forms, formats or media.
          </p>

          <h3>
            <strong>Hyperlinking to our Content</strong>
          </h3>

          <p>
            The following organizations may link to our Website without prior
            written approval:
          </p>

          <ul>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>

          <p>
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party's site.
          </p>

          <p>
            We may consider and approve other link requests from the following
            types of organizations:
          </p>

          <ul>
            <li>
              commonly-known consumer and/or business information sources;
            </li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>

          <p>
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of Scrip AI; and
            (d) the link is in the context of general resource information.
          </p>

          <p>
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party's site.
          </p>

          <p>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to Scrip AI. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </p>

          <p>Approved organizations may hyperlink to our Website as follows:</p>

          <ul>
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party's site.
            </li>
          </ul>

          <p>
            No use of Scrip AI's logo or other artwork will be allowed for
            linking absent a trademark license agreement.
          </p>

          <h3>
            <strong>iFrames</strong>
          </h3>

          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>

          <h3>
            <strong>Content Liability</strong>
          </h3>

          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>

          <h3>
            <strong>Reservation of Rights</strong>
          </h3>

          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it's linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>

          <h3>
            <strong>Removal of links from our website</strong>
          </h3>

          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>

          <p>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>

          <h3>
            <strong>Disclaimer</strong>
          </h3>

          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>

          <ul>
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>

          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>

          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
          <div className="flex items-center gap-2 pt-10">
            <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
              Made with ❤️ by Sagar Jaid
            </a>
            <span>|</span>

            <a href="https://scripai.com/privacy" target="_blank">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="https://scripai.com/tc" target="_blank">
              Terms and Conditions
            </a>
            <span>|</span>
            <a href="https://scripai.com/gdrp" target="_blank">
              GDRP Policy
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default TC;