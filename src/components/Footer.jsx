import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "Shop and Learn",
      items: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AitTag",
        "Accessories",
        "Gift Cards",
      ],
      subSections: [
        {
          title: "Apple Wallet",
          items: ["Wallet"],
        },
      ],
    },
    {
      title: "Account",
      items: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
      subSections: [
        {
          title: "Entertainment",
          items: [
            "Apple One",
            "Apple TV+",
            "Apple Music",
            "Apple Arcade",
            "Apple Podcasts",
            "Apple Books",
            "App Store",
          ],
        },
      ],
    },
    {
      title: "Apple Store",
      items: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Group Reservations",
        "Apple Camp",
        "Apple Trade In",
        "Ways to Buy",
        "Recycling Programme",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      items: ["Apple and Business", "Shop for Business"],
      subSections: [
        {
          title: "For Education",
          items: [
            "Apple and Education",
            "Shop for Education",
            "Shop for University",
          ],
        },
        {
          title: "For Healthcare",
          items: [
            "Apple in Healthcare",
            "Mac in Healthcare",
            "Health on Apple Watch",
          ],
        },
      ],
    },
    {
      title: "Apple Values",
      items: [
        "Accessibility",
        "Education",
        "Environment",
        "Privacy",
        "Supply Chain Innovation",
      ],
      subSections: [
        {
          title: "About Apple",
          items: [
            "Newsroom",
            "Apple Leadership",
            "Career Opportunities",
            "Investors",
            "Ethics & Compliance",
            "Events",
            "Contact Apple",
          ],
        },
      ],
    },
  ];
  return (
    <footer className="bg-gray-200 py-6 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-xs text-gray-800/60 space-y-4 leading-relaxed ">
        <p>
          ◊No Cost EMI is available with the purchase of an eligible product
          made using qualifying cards on 3-, 6-, 9- or 12-month tenures from
          most leading card issuers. Eligible AirPods, HomePod and Beats
          products are available with No Cost EMI on 3- and 6-month tenures
          only. Monthly pricing is rounded to the nearest rupee. Exact pricing
          will be provided by your card issuer, subject to your card issuer’s
          terms and conditions. Minimum order spend applies as per your card
          issuer’s threshold. No Cost EMI is not available to business customers
          and cannot be combined with Apple Store for Education or Corporate
          Employee Purchase Plan pricing. Card eligibility is subject to terms
          and conditions between you and your card issuer. Offer may be revised
          or withdrawn at any time without any prior notice. Terms apply.
        </p>
        <p>Representative example:</p>
        <p>
          A purchase of ₹79,900.00 repaid over 12 months with an interest rate
          of 15.99% p.a. and No Cost EMI savings of ₹6,514.00 requires monthly
          payments of ₹6,658.00. Total amount payable: ₹79,900.00.
        </p>
        <p>
          ‡Instant cashback is available with the purchase of an eligible
          product with qualifying American Express, Axis Bank and ICICI Bank
          cards only. Minimum transaction value of ₹10,001.00 applies. Click
          here to see instant cashback amounts and eligible devices. Instant
          cashback is available for up to two orders per rolling 60-day period
          with an eligible card. Card eligibility is subject to terms and
          conditions between you and your card issuer. Total transaction value
          is calculated after any trade-in credit or eligible discount is
          applied. Any subsequent order adjustment(s) or cancellation(s) may
          result in instant cashback being recalculated, and any refund may be
          adjusted to account for instant cashback clawback; this may result in
          no refund being made to you. Offer may be revised or withdrawn at any
          time without any prior notice. Additional terms apply. Instant
          cashback is not available to Business customers and cannot be combined
          with Apple Store for Education or Corporate Employee Purchase Plan
          pricing. Multiple separate orders cannot be combined for instant
          cashback.
        </p>
        <p>
          *Apple Education Pricing is available to current and newly accepted
          college students and their parents, as well as teachers and staff at
          all levels. For more information, visit apple.com/in-edu/store.
        </p>
        <p>
          1. Qualified Purchasers can receive Promotion Savings when they
          purchase an eligible Mac or iPad with their choice of a Promotion
          Product at a Qualifying Location. Customers will be charged for all
          items in their cart, including the Promotion Product. Only one
          Promotion Product can be obtained per eligible Mac or iPad per
          Qualified Purchaser. The offer is subject to availability, while
          supplies last. View full terms and conditions of offer here.
        </p>
        <p>
          2. Available in two models: AirPods 4 and AirPods 4 with Active Noise
          Cancellation.
        </p>
        <p>
          Apple Intelligence is available in beta on all iPhone 16 models,
          iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
          Mac models with M1 and later, with Siri and device language set to
          Chinese (Simplified), English (Australia, Canada, India, Ireland, New
          Zealand, Singapore, South Africa, UK or US), French, German, Italian,
          Japanese, Korean, Portuguese (Brazil) or Spanish, as part of an iOS
          18, iPadOS 18 and macOS Sequoia software update, with more languages
          coming over the course of the year, including Vietnamese. Some
          features may not be available in all regions or languages.
        </p>
        <p>A subscription is required for Apple TV+.</p>
        <p>
          Features are subject to change. Some features, applications and
          services may not be available in all regions or all languages.
        </p>
      </div>
      <div className="container mx-auto max-w-screen-lg grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 px-4">
        {footerData.map((section, index) => (
          <div key={index}>
            {/* Main Title */}
            <ul>
              <li className="font-medium text-base mb-1">{section.title}</li>
            </ul>

            {/* Main Items */}
            <ul className="text-gray-900/80">
              {section.items.map((item, i) => (
                <li key={i} className="text-xs mt-1 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>

            {/* Sub Sections */}
            {section.subSections &&
              section.subSections.map((sub, j) => (
                <div key={j}>
                  <ul>
                    <li className="mt-4 font-medium text-base">{sub.title}</li>
                  </ul>
                  <ul className="text-gray-900/80">
                    {sub.items.map((subItem, k) => (
                      <li key={k} className="text-xs mt-1 cursor-pointer">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-screen-lg grid px-4">
        <p className="text-sm text-gray-800/80 border border-b-gray-400">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
      </div>
      <div className="flex justify-between items-center flex-wrap container mx-auto max-w-screen-lg px-4 py-4 border-b">
        {/* Left Section */}
        <p className="text-sm text-gray-800/80">
          Copyright © 2025 Apple Inc. All rights reserved.
        </p>

        {/* Middle Section */}
        <ul className="flex flex-wrap gap-4 text-sm text-gray-800/80">
          <li className="cursor-pointer hover:underline">Privacy Policy |</li>
          <li className="cursor-pointer hover:underline">Terms of Use |</li>
          <li className="cursor-pointer hover:underline">Sales Policy |</li>
          <li className="cursor-pointer hover:underline">Legal |</li>
          <li className="cursor-pointer hover:underline">Site Map</li>
        </ul>

        {/* Right Section */}
        <p className="text-sm text-gray-800/80 cursor-pointer hover:underline">
          India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
