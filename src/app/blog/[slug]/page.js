"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function BlogPost({ params }) {
  const { slug } = useParams();

const posts = {
  "creator-crunch": {
    title: "The Creator Crunch: Burnout, Budget Cuts, and the Battle for Relevance",
    date: "July 29, 2025",
    image: "/creator-crunch.png",
    gradient: "from-[#020617] via-[#0f172a] to-[#020617]",
    sections: [
      {
        heading: "The Promise vs. The Present",
        text: `The creator economy was sold as a path to independence. If you had a phone, some ideas, and some grit, you could build a career on your own terms. Mid-2025, the shine is wearing off.

Digiday’s numbers say a lot: 52% of creators report burnout, and more than a third are thinking about leaving. One lifestyle creator they interviewed went from 15–20 brand deals a year to 8–9 in just the first half of 2025. That’s not a blip. It’s a reset.`,
      },
      {
        heading: "The Squeeze Is Real",
        text: `The economic pressures are showing up in concrete ways across multiple fronts.

Pay is slipping. KIRO 7 reported average earnings per campaign dropped from $214 in 2024 to $202. Brands want more output and cleaner ROI for less money.

Platforms are a risk. The TikTok ban forced creators to rebuild audiences and rethink revenue overnight. If your house is on one platform, you’re living on a fault line.

Mid-tier creators are stuck in the middle. Even as U.S. influencer spend is projected to hit $13.7B by 2027, the flow is shifting. Brands are favoring micro and niche voices for authenticity and cost, which leaves many mid-sized creators in limbo.

DEI is fading. Political pushback and rollbacks have cooled brand support for multicultural creators.`,
      },
      {
        heading: "Beyond the Brand Deal",
        text: `Smart creators are moving from “go viral” to “build assets.”

They’re treating their work like a business, not a feed.

Digiday points to examples like creators launching shows and products. The core idea is simple: own more of what you make.`,
      },
      {
        heading: "The Cultural Weight",
        text: `This isn’t just marketing spend moving around.

The creator economy has grown rapidly, with creators reaching more people than traditional media in some cases.

Creators aren’t only entertainers anymore. They’re reporters, organizers, and small-business owners.`,
      },
      {
        heading: "The Decentralized Bet",
        text: `Some startups are trying to cut platforms out of the middle.

Apps like Own promise higher payouts and more ownership.

Whether this model scales is still an open question.`,
      },
      {
        heading: "What’s Next",
        text: `More budget shifting to niche creators  
More creators building owned products  
More platform competition  
More pressure on sustainability`,
      },
      {
        heading: "The Bottom Line",
        text: `The creator economy isn’t collapsing. It’s growing up.

Growth hurts.

Sustainability will come from ownership, not attention.

Whether you’re scrolling, buying, or creating, this isn’t just a content story it’s a work story.

Until next time, keep it on your radar.`,
      },
    ],
  },

  "bitcoin-120k": {
    title: "Bitcoin at $120K+: Policy, Politics, and Market Momentum",
    date: "July 17, 2025",
    image: "/bitcoin.png",
    gradient: "from-[#1a1409] via-[#3b2f1b] to-[#1a1409]",
    sections: [
      {
        heading: "A Breakout Moment",
        text: `Bitcoin just crossed a line it’s never crossed before, hitting $123,153 at its peak and closing just under that. That’s a 27% jump for the year so far, according to Reuters.

But this isn’t just another “crypto is running again” moment. The energy behind this rally feels different, and a lot of it ties back to what’s happening in Washington.`,
      },
      {
        heading: "Washington Steps In",
        text: `Capitol Hill is having its “Crypto Week,” especially on the Republican side. Lawmakers are debating a package of bills that could set up the first real nationwide rules for digital assets in the U.S.

The headline bill is the GENIUS Act, which would put stablecoins under federal oversight, requiring reserves and prioritizing holders if an issuer goes bankrupt. Forbes notes this would be the first law of its kind.

Alongside it, the CLARITY Act would define digital assets more clearly, while the Anti-CBDC Surveillance State Act would block a U.S. central bank digital currency entirely.

For an industry that’s spent years in legal limbo, this isn’t small. It’s a potential turning point.`,
      },
      {
        heading: "The Political Layer",
        text: `The broader political backdrop matters too.

The Trump administration has leaned heavily into pro-crypto messaging, even floating the idea of a national crypto reserve and embracing the “crypto president” narrative.

Votes on these bills could begin as soon as Tuesday, after being briefly tabled Monday. That kind of momentum is something investors don’t ignore.`,
      },
      {
        heading: "Money Is Pouring In",
        text: `Markets are responding fast.

Reuters reports record inflows into Bitcoin ETFs, including Hong Kong-listed spot funds from China AMC, Harvest, and Bosera.

Crypto-linked stocks like Coinbase, Marathon Digital, and MicroStrategy are all climbing. At the same time, short sellers have been squeezed hard, with $750 million in liquidations in a single day, according to Stocktwits.

Year-to-date, Bitcoin is outperforming gold, roughly 30% versus 28%. Analysts are already eyeing $125,000 as the next psychological level.`,
      },
      {
        heading: "Beyond the Chart",
        text: `Bitcoin is no longer just a speculative trade.

For everyday investors, it’s showing up in brokerage accounts through ETFs and even appearing as a payment option.

For companies, it’s becoming strategic. GameStop invested $513 million into Bitcoin, and Trump Media is planning to raise $2.5 billion for its own reserve.

On Wall Street, crypto has moved past curiosity. It’s entering a more structured, institutional phase, even if volatility remains.`,
      },
      {
        heading: "Two Possible Paths",
        text: `If these bills pass, expect stronger institutional adoption, more corporate participation, and clearer integration with traditional finance.

If they stall or get diluted, the rally could lose momentum, and uncertainty could return quickly.`,
      },
      {
        heading: "The Bottom Line",
        text: `Bitcoin breaking $120K isn’t just a price milestone. It’s a signal.

Policy, politics, and capital are aligning in a way this space hasn’t seen before.

What happens in Washington over the next few weeks could shape crypto’s role in the financial system for years.

Stay curious, pay attention, and keep it on your radar.`,
      },
    ],
    
  },
  "tariff-tightrope": {
  title: "Tariff Tightrope",
  date: "July 7, 2025",
  image: "/tariff.png",
  gradient: "from-[#1c140f] via-[#3b2a1f] to-[#1c140f]",
  sections: [
    {
      heading: "Brief recap (in case you didn’t get a chance)",
      text: `The Trump administration has been quite busy in reshaping the structure of global trade, and we’re not talking about minor changes. Arguably, these comprehensive tariff adjustments have been getting the attention of other trade partners worldwide.

In April, Trump announced the imposition of reciprocal tariffs ranging from 10% to 40 plus percent on countries that numbered more than 150. Canada got a free pass bidding farewell this round. These tariffs represent countermeasures with the aim of renegotiating existing trade agreements on terms considered more favorable to the U.S. by the present administration.

Following that came the opportunity to grace the negotiating table, with a 90 day reprieve offered on April 9 by Mr. Trump. The original expiration date was July 9, forcing quite a hot deadline for diplomats and trade representatives worldwide. 

And now is where the show really starts (and confounds whoever has been trying to follow closely).

Some adjustments, let’s say, have been made to the timeline. In June, the President said, “We could extend it. We could make it shorter.” Then he went on to say that he also had no plans to change the date.”

When July came around, he clarified, “They’ll start to pay on Aug. 1.” 

Treasury Secretary Bessent was on CNN explaining that August 1 would mark a return of tariff levels to April 2 for any country without a completed trade agreement. He went on to say, “If you don’t move things along, then on Aug. 1, you will boomerang back.” 

If you were trying to keep track at home, you are not alone in finding the timeline rather variable.`,
    },
    {
      heading: "So Here’s Where We Stand",
      text: `Only Vietnam and the UK have made landing with completed trade agreements. That leaves some pretty big players including China, the EU, India, and Japan-still hashing things out. According to Bessent, most of these countries haven’t formally gone into discussions yet. 

What does it mean to the ordinary folks who aren’t busy at trade negotiations? Quite a few things indeed.

For your wallet: For your wallet, of course: Tariffs are taxes on imports, and usually, such costs are transferred to consumers. You won’t see anything labeled “Trump Tariff Fee” on your receipt, but you may notice price changes in everything from cars to washing machines to that bag of flour down at your grocery store.

For Businesses: The situation is quite difficult for managers; they face a number of challenges related to inventory management, adjusting the supply chain, and developing pricing strategies. In fact, supply chain managers are a bit like fortune tellers. They want to figure out how much stock to have on hand, how many people to hire, and what prices to charge, but they don’t know what the trade environment will look like next.

For Markets: Wall Street’s been tuning in. Stock markets have been quite sensitive to tariff announcements and policy updates, with their performance often reflecting whatever the latest development is. If you’re part of the ‘watching my portfolio’ crowd, it’s been a wild ride.

For Government Coffers: The administration has in place a plan of using the money that flows in from these tariffs through the Treasury Department as the chief source of revenue, which is essentially its broader fiscal strategy after the enactment of the $3.4 trillion tax and spending package. Of course, the amount of money generated depends on how much trade there is, and that may go down if the trading partners of the United States decide to do the same and implement retaliatory measures.`,
    },
    {
      heading: "The Canada Question",
      text: `Although Canada was not on the list of countries whose goods were subject to tariffs in April, this exemption might not be indefinite. Experts in trade policy are closely following this situation. To be very direct, Carlo Dade, a trade policy expert at the University of Calgary, says: “He [Trump] could decide to go after Canada any day of the week and there is a risk.” Primary sectors such as dairy, aluminum, and automotive are those that may be targeted first in the next rounds of tariff applications.`,
    },
    {
      heading: "Legal Challenges in the Mix",
      text: `There is also some courtroom conflict occurring. The lawsuits which State has filed because of President’s alleged misuse of the IEEPA are still at the legal stage of their journey. One federal judge has already ruled against the administration’s authority in this area, though the tariffs remain in effect while appeals proceed.`,
    },
    {
      heading: "What Happens if August 1 Comes and Goes?",
      text: `Should the deals not be completed before the deadline, here’s what we might see:

- The April tariff levels return to the stage

- Continued uncertainty for businesses trying to plan ahead

- Possible implementation of retaliatory measures by trading partners

- Markets, which will be continuously reacting to each policy announcement

- An evolving international trade landscape`,
    },
    {
      heading: "The Bottom Line?",
      text: `This is a significant change in the U.S. trading policy with other countries. The administration is still unsure whether this strategy will give them the trade reforms they expect or if it will only make the situation worse. One thing that is clear, however, everyone from consumers ranging from consumers to CEOs to country leaders has a stake in the outcome.

Time will tell over the next few weeks. The deadline is approaching and just be aware that things can change very rapidly in trade policy.

Because in a globalized economy, everything that happens at the negotiation table does not only influence diplomats, but also your money, your job, and your future.

Until next time, stay curious, stay informed, and keep that on your radar.`,
    },
  ],
},
"welcome-omr": {
  title: "Welcome to OnMyRadar",
  date: "March 2025",
  image: "/omr.png",
  gradient: "bg-gradient-to-b from-[#f8f5f0] via-[#f1ede6] to-[#e7e1d7]",
  sections: [
    {
      heading: "Before We Dive In",
      text: `First off, thanks for clicking on my very first blog post. It honestly means a lot that you’re here. I hope you’ll stick around to see where this goes.`,
    },
    {
      heading: "The Inception",
      text: `One slow Sunday afternoon in late March, I was sitting at my dorm desk when a random thought popped into my head: what if I had a space to put my thoughts out there? Over the next few weeks, that “what if” started to grow legs. Quietly, without telling anyone, I began setting things up. I didn’t know if I’d actually follow through, so I kept it to myself. Still, in true me fashion, I’d already made an Excel sheet, opened a Google Drive folder, and started tossing around potential social media handles.

The hard part wasn’t the ideas, it was starting.

The push finally came after Finals Week. From that point on, I chipped away at what felt like a mountain of small tasks until, eventually, the mountain didn’t seem so high anymore.`,
    },
    {
      heading: "Finding My Voice",
      text: `I’ve always been told I have a way with words, something I credit entirely to my parents. They drilled into me early on:

“Abu, your voice matters. Don’t waste the gift you’ve been given.”

For years, I brushed that off. But as I’ve gotten older, I’ve started to understand exactly what they meant.`,
    },
    {
      heading: "Making It Mine",
      text: `I’ve been fortunate to earn awards and recognition, but those have always carried someone else’s name. I wanted something that was mine from start to finish, something that reflected me without anyone else’s stamp on it.

This blog is that.

It’s a place for my creative, sometimes unconventional thoughts to live. A way to share what I care about, connect with people who get it, or even people who don’t, and have real conversations. I want my ideas to stand on their own while also making space for yours.

That’s what OnMyRadar is about.`,
    },
    {
      heading: "What’s Ahead",
      text: `From breaking down economic trends, to exploring cultural shifts, to unpacking the ideas that inspire me, this blog will follow whatever’s been keeping my mind busy. Finance, economics, and culture aren’t just topics, they’re the forces shaping how we live and see the world.

It’ll take time to grow OnMyRadar. I’m not chasing clicks or viral posts. If even one person leaves here with a new question, a fresh perspective, or just a little more curiosity than before, I’ll call that a win.

Thanks again for being here. I’m proud of this start, and I’m even more excited for where it could go. Keep it on your radar, let’s see what we can build together.`,
    },
  ],
},
};

  const post = posts[slug];
  if (!post) return null;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
    setShowTop(scrollTop > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const wordCount = post.sections
  .map(section => section.text)
  .join(" ")
  .split(" ").length;

const readingTime = Math.ceil(wordCount / 200);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>Post not found</h1>
      </div>
    );
  }

  return (
  <>
    {/* PROGRESS BAR */}
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>

    <div className={`min-h-screen bg-gradient-to-b ${post.gradient || "from-black via-[#0f172a] to-black"} text-white px-6 py-24`}>
      <div className="max-w-3xl mx-auto">

        {/* 🔙 BACK TO BLOG */}
  <Link
    href="/blog"
    className="inline-block mb-10 text-gray-400 hover:text-white transition-colors duration-200 text-base md:text-lg font-medium"
  >
    ← Back to Blog
  </Link>

        {/* TITLE */}
<h1
  className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
    slug === "welcome-omr" ? "text-gray-900" : "text-white"
  }`}
>
  {post.title}
</h1>

        {/* DATE */}
        <p
  className={`mb-12 ${
    slug === "welcome-omr" ? "text-gray-600" : "text-gray-500"
  }`}
>
  {post.date} • {readingTime} min read
</p>
{/* FEATURED IMAGE */}
{post.image && (
  <div className="mb-16 mt-6">
    <img
      src={post.image}
      alt={post.title}
      className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-2xl border border-white/10 transition duration-300 hover:scale-[1.01]"
    />
  </div>
)}
        {/* SECTIONS */}
        {post.sections.map((section, index) => (
          <div
  key={index}
  className="mb-12 transition duration-300 hover:bg-white/5 hover:rounded-xl"
>

            {/* SECTION TITLE */}
            <div className="flex items-center gap-3 mb-4">
  <div className="w-1 h-6 bg-gradient-to-b from-white to-gray-600 rounded-full"></div>

  <h2
  className={`text-2xl md:text-3xl font-semibold ${
    slug === "welcome-omr" ? "text-gray-900" : "text-white"
  }`}
>
    {section.heading}
  </h2>
</div>

            {/* SECTION TEXT */}
            <p
  className={`leading-loose text-lg whitespace-pre-line mb-4 ${
    slug === "welcome-omr" ? "text-gray-700" : "text-gray-300"
  }`}
>
  {section.text}
</p>

          </div>
        ))}

          
      </div>
    </div>

    {/* BACK TO TOP BUTTON */}
    {showTop && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition duration-300"
      >
        ↑
      </button>
    )}

  </>
);
}