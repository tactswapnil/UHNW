import { useState, useEffect } from "react";

const projectImages = {
  "220 Central Park South": "/images/220-central-park-south.jpg",
  "One Hyde Park": "/images/one-hyde-park.jpg",
  "Aman New York Residences": "/images/aman-new-york.webp",
  "56 Leonard Street": "/images/56-leonard-street.avif",
  "111 West 57th": "/images/111-west-57th.webp",
  "432 Park Avenue": "/images/432-park-avenue.jpg",
  "DLF The Camellias": "/images/dlf-camellias.jpg",
  "Central Park Tower": "/images/central-park-tower.webp",
  "Neo Bankside": "/images/neo-bankside.jpg",
  "Three Sixty West": "/images/three-sixty-west.jpeg",
  "Waldorf Astoria Residences Miami": "/images/waldorf-astoria-miami.jpeg",
  "Trump Tower": "/images/trump-tower.webp",
  "Burj Binghatti Jacob & Co": "/images/burj-binghatti-jacob.jpg",
  "Tonino Lamborghini Residences": "/images/tonino-lamborghini-dubai.webp"
};

const projects = [
  {
    id: 1, name: "220 Central Park South", city: "New York", market: "Global", flag: "🇺🇸",
    developer: "Vornado / Steven Roth", architect: "Robert A.M. Stern (RAMSA)", units: 118, priceRange: "$6M–$238M",
    archetype: "Institutional Sovereign", spectrumPos: 98,
    commercialResult: "Near-complete sellout. Griffin record $238M. Strongest resale on Billionaires' Row.",
    corePrestigeClaim: "Admission to an institution that could refuse you. Pre-war limestone genealogy. Social filtering through buyer vetting.",
    primaryMechanism: "Admission Architecture",
    keyTensions: ["Old money aesthetics / new money buyers","Anti-marketing as the most effective marketing","Privacy protected / privacy strategically eroded","Contextual humility / financial dominance"],
    communicationSystem: {
      primaryChannels: ["Elite broker network (screened)","Transaction record press (involuntary)","Resident social circulation","Architecture publications"],
      notableAbsences: ["No website","No advertising","7 Instagram posts","No public pricing"],
      salesApproach: "Invite-only. Broker questionnaire. Nondescript sales office. Developer as personal filter."
    },
    buyerPsychology: "Fear of exclusion. Desire to be validated by something that could refuse you. New money seeking old money legitimacy.",
    fragility: "Low. Prestige is intrinsic, not licensed.",
    contradictions: ["Contextual humility vs financial dominance","Privacy as product and marketing instrument","Anti-marketing IS the marketing"],
    portrait: "A building that trusts you already know you want it before you arrive. It auditions buyers, not the reverse. Its limestone whispers what glass towers shout.",
    dimensionScores: { restraint:10,spectacle:1,heritage:9,futurity:1,archLed:9,brandLed:1,privatePres:10,publicPres:1,culturalCap:9,financialCap:7,service:3,asset:8,institutional:10,commercial:1,individual:8,collective:6,rootedness:9,nomadic:2 }
  },
  {
    id: 2, name: "111 West 57th", city: "New York", market: "Global", flag: "🇺🇸",
    developer: "JDS / PMG / Spruce Capital", architect: "SHoP Architects + Studio Sofield", units: 59, priceRange: "$7M–$98M",
    archetype: "Architectural Heritage / Connoisseur", spectrumPos: 82,
    commercialResult: "7–8 years to near-sellout. Three broker teams. 20–30% price cuts on multiple units. Christian Candy purchase.",
    corePrestigeClaim: "Steinway Hall double landmark + world's most slender skyscraper. Cultural capital: exclusion by comprehension.",
    primaryMechanism: "Cultural Capital / Exclusion-by-Comprehension",
    keyTensions: ["Sovereign aspirational positioning / commercial sales distress","Cultural gatekeeping / open broker network","The slenderness record vs 20–30% price cuts","Artisanal language / non-union construction"],
    communicationSystem: {
      primaryChannels: ["Architecture criticism (Goldberger/Davidson)","Engineering record press ('world's most slender')","Historical depth transfer (Warren & Wetmore)","Transaction mythology"],
      notableAbsences: ["No lifestyle imagery","No people in brochure","Almost no 'luxury' language"],
      salesApproach: "Open Douglas Elliman → Corcoran → Sotheby's. Three teams in 6 years. International Knight Frank network."
    },
    buyerPsychology: "Fear of arriving late. New money seeking institutional legitimacy. The person who chose this because they understood something others missed.",
    fragility: "Medium. Sales velocity revealed gap between cultural positioning and commercial reality.",
    contradictions: ["Sovereign positioning / 3 broker teams","World's most slender / 20-30% price cuts","'Finely tuned' language / $50M cost overruns","Heritage without naming Steinway brand"],
    portrait: "Born knowing it was exceptional—the way old families know it, not through announcement. Admires precision above all. Embarrassed by the price cuts it was forced into. The building that would rather be cited than sold.",
    dimensionScores: { restraint:9,spectacle:2,heritage:10,futurity:2,archLed:10,brandLed:1,privatePres:8,publicPres:3,culturalCap:10,financialCap:5,service:2,asset:7,institutional:8,commercial:3,individual:9,collective:3,rootedness:10,nomadic:2 }
  },
  {
    id: 3, name: "Aman New York Residences", city: "New York", market: "Global", flag: "🇺🇸",
    developer: "OKO Group / Vladislav Doronin", architect: "Denniston / Jean-Michel Gathy (restoration of Warren & Wetmore Crown Building)", units: 22, priceRange: "$7.7M–$135M",
    archetype: "Tribal Hospitality Sovereign", spectrumPos: 95,
    commercialResult: "Sold out without public marketing. 3 of 10 most expensive NYC transactions 2024. $7,700 avg psf sustained.",
    corePrestigeClaim: "Pre-existing tribal brand loyalty. 'Aman Junkies'—guests who travel the world for the brand—needed no selling.",
    primaryMechanism: "Tribal Pre-Conversion / Brand Loyalty Infrastructure",
    keyTensions: ["Urban resort vs resort being escape from urban","Sovereign privacy / hotel guests sharing amenities","22-unit intimacy / Aman Club open to anyone who can pay","Developer bought own penthouse ($135M vs $180M original)"],
    communicationSystem: {
      primaryChannels: ["Global hotel brand (35+ properties)","Hotel operation as permanent advertising","Architecture/heritage press","Aman Club community"],
      notableAbsences: ["No residential brochure","No advertising","No public listings","No broker network"],
      salesApproach: "OKO in-house only. No major brokerage. Sales to pre-existing Aman guest database and UHNW word-of-mouth."
    },
    buyerPsychology: "Beyond conventional luxury. Seeking genuine peace (Sanskrit: Aman). Has exhausted Four Seasons and Mandarin. Wants hotel-grade tranquility as permanent address.",
    fragility: "Medium. Brand scaling (35+ properties) dilutes rarity. Aman Club financialized, not relational.",
    contradictions: ["Urban resort contradicts Aman's remote-sanctuary DNA","Exclusivity shared with hotel guests and Club members","Developer absorbed own penthouse at $45M discount"],
    portrait: "The only building in the study that sold out before the world knew how to find it. Its buyers were already converted by four decades of Aman. It didn't need to create desire—it needed only to announce that permanence was available.",
    dimensionScores: { restraint:10,spectacle:1,heritage:8,futurity:3,archLed:6,brandLed:9,privatePres:10,publicPres:1,culturalCap:9,financialCap:7,service:10,asset:7,institutional:9,commercial:2,individual:8,collective:7,rootedness:8,nomadic:9 }
  },
  {
    id: 4, name: "One Hyde Park", city: "London", market: "Global", flag: "🇬🇧",
    developer: "Candy & Candy / Sheikh Hamad bin Jassim (Qatar PM)", architect: "Rogers Stirk Harbour + Partners", units: 86, priceRange: "£5M–£217M",
    archetype: "Capital Fortress / Invisible Sovereign", spectrumPos: 97,
    commercialResult: "£135M+ penthouse (Rinat Akhmetov). 80% offshore BVI entities. Mostly empty. Some units sold below 2011 price.",
    corePrestigeClaim: "Jurisdictional safety. BVI ownership structures. Panic rooms, iris scanners, SAS security. London rule of law as product.",
    primaryMechanism: "Structural Inaccessibility / Capital Fortress",
    keyTensions: ["World's most private building / in the news for 15 years","Prestige from opacity / transparency through journalism","Capital preservation promise / some units sold below 2011 price","'Cleanest' address / documented opacity concerns"],
    communicationSystem: {
      primaryChannels: ["Invite-only pre-sales website","Sovereign co-development (Qatari PM)","Record transaction press events","Mandarin Oriental partnership","Security spec within UHNW advisor network"],
      notableAbsences: ["No advertising","No brochure in public domain","No resident disclosure","Invitation-only even for information"],
      salesApproach: "Restricted-access website. Most units sold before completion. Private wealth advisor network only."
    },
    buyerPsychology: "Fear that wealth might be visible, traceable, contestable. One Hyde Park offers invulnerability. Not aspiration to live—but the problem of wealth solved.",
    fragility: "Medium-Low. Legal jurisdiction is permanent. But individual units have sold below 2011 prices due to geopolitical shifts.",
    contradictions: ["Most private building / most documented in press","World's most expensive homes / mostly empty","Legitimate jurisdiction / opacity concerns","Architecture unremarkable / prices extraordinary"],
    portrait: "Does not want to know you. Not rude—simply not interested in introduction. For people who have stopped becoming and simply are. A vault that offers residential optionality.",
    dimensionScores: { restraint:10,spectacle:1,heritage:6,futurity:2,archLed:5,brandLed:6,privatePres:10,publicPres:1,culturalCap:7,financialCap:10,service:8,asset:10,institutional:9,commercial:1,individual:10,collective:2,rootedness:7,nomadic:10 }
  },
  {
    id: 5, name: "56 Leonard Street", city: "New York", market: "Tribeca", flag: "🇺🇸",
    developer: "Alexico Group (Senbahar/Elias) + Hines / Goldman Sachs", architect: "Herzog & de Meuron (Pritzker Prize) — their first residential high-rise globally", units: 145, priceRange: "$3.5M–$50M",
    archetype: "Collector / Cultural Capital", spectrumPos: 90,
    commercialResult: "50% sold in 3 weeks (2013). 80% sold mid-2013. Fully sold out 2020. $900M+ total. Strong resale market.",
    corePrestigeClaim: "First H&dM residential high-rise on Earth. Anish Kapoor public commission. No two units identical. Collector prestige.",
    primaryMechanism: "Collector Prestige / Cultural Sovereignty through Product Supremacy",
    keyTensions: ["Cultural exclusivity / open StreetEasy market","The Jenga nickname: democratizes vs cheapens","Financial crisis stall as wound / as mythology asset","Best marketing document was unauthorized (Pixelflakes)"],
    communicationSystem: {
      primaryChannels: ["Architecture press (H&dM Pritzker credential)","The Jenga organic nickname","Anish Kapoor commission (art world adjacency)","Goldman Sachs residency whisper network","Developer resistance narrative (refused to compromise)"],
      notableAbsences: ["No dedicated social media","No lifestyle advertising","No celebrity endorsements"],
      salesApproach: "Corcoran Sunshine at launch. Open market. Product itself was the filter."
    },
    buyerPsychology: "Fear of cultural illegibility. Wants home to signal discernment, not just wealth. Tribeca buyer: art world, finance, architecture—all converging.",
    fragility: "Low. H&dM credential is permanent. Product cannot be replicated.",
    contradictions: ["Open market yet effectively sovereign","Best brochure was unauthorized","4-year financial crisis stall became authenticity credential"],
    portrait: "Arrived at the party late, having survived something that would have destroyed a lesser character. Swiss in precision, Manhattan in ambition. Does not explain itself.",
    dimensionScores: { restraint:8,spectacle:4,heritage:7,futurity:6,archLed:10,brandLed:2,privatePres:7,publicPres:5,culturalCap:10,financialCap:6,service:3,asset:7,institutional:7,commercial:4,individual:10,collective:4,rootedness:8,nomadic:5 }
  },
  {
    id: 6, name: "432 Park Avenue", city: "New York", market: "Global", flag: "🇺🇸",
    developer: "Harry Macklowe + CIM Group", architect: "Rafael Viñoly (Josef Hoffmann wastebasket derivation)", units: 104, priceRange: "$7M–$87.7M",
    archetype: "Minimalist Architectural / Distressed Sovereign", spectrumPos: 75,
    commercialResult: "$3.1B sellout achieved. But resale losses documented. 1,500+ construction defects lawsuit. Macklowe foreclosure 2025. Facade cracking suit.",
    corePrestigeClaim: "Minimalist architectural philosophy. Tallest residential in Western Hemisphere (stated once). Josef Hoffmann lineage. Connoisseur-sovereign identity.",
    primaryMechanism: "Minimalist Architectural Prestige / Connoisseur Identity",
    keyTensions: ["Architect publicly cited 'screw-ups' at developer's own event","Pure geometry credential / exposed concrete now cracking","'Estate living in the sky' / residents trapped in elevators","$3.1B sellout / resale losses and defect lawsuits"],
    communicationSystem: {
      primaryChannels: ["Viñoly architectural reputation","Hoffmann wastebasket origin story","Douglas Elliman co-exclusive","Transaction record press"],
      notableAbsences: ["'Luxury' almost absent from brochure","No hotel brand","No celebrity social proof"],
      salesApproach: "Semi-private via Douglas Elliman. Not fully open, not fully curated. Off public databases initially."
    },
    buyerPsychology: "Taste as highest status form. Fear of cultural illegibility. Chose function and geometry over decoration.",
    fragility: "High. Physical defects have become dominant public narrative. Macklowe foreclosure. Architect disowned partial credit.",
    contradictions: ["Architectural purity / 1,500+ defects","The $3.1B sellout / resale losses","'Estate living' / residents can't control environment","Architect cited screw-ups publicly"],
    portrait: "Born from the conviction that geometry at sufficient scale becomes nobility. Older now. The developer who built it has lost his own units. The residents litigate. The cracks widen.",
    dimensionScores: { restraint:9,spectacle:2,heritage:5,futurity:5,archLed:10,brandLed:1,privatePres:8,publicPres:3,culturalCap:8,financialCap:6,service:5,asset:7,institutional:6,commercial:5,individual:9,collective:3,rootedness:7,nomadic:5 }
  },
  {
    id: 7, name: "Neo Bankside", city: "London", market: "London", flag: "🇬🇧",
    developer: "Grosvenor + Native Land", architect: "Rogers Stirk Harbour + Partners", units: 217, priceRange: "£1.5M–£19M",
    archetype: "Civic Cultural Capital", spectrumPos: 55,
    commercialResult: "Sold above developer estimates. Stirling Prize shortlist 2015. But Tate Modern privacy lawsuit (won by residents at UK Supreme Court 2023).",
    corePrestigeClaim: "Tate Modern adjacency. RSHP credential. Completing the cultural campus. Being 'inside' London's most celebrated cultural geography.",
    primaryMechanism: "Civic Cultural Adjacency / Neighbourhood Genesis",
    keyTensions: ["Floor-to-ceiling glass as luxury / floor-to-ceiling glass as invasion","Tate Modern as prestige anchor / Tate Modern as legal adversary","Civic regeneration language / social housing delivery shortfall","Architecture for the many / RSHP protest at Stirling ceremony"],
    communicationSystem: {
      primaryChannels: ["RSHP architecture credential","Stirling Prize shortlist","South Bank cultural narrative","Grosvenor institutional developer halo"],
      notableAbsences: ["No sovereign gatekeeping","No private pricing","No opacity or discretion language"],
      salesApproach: "Pre-sales to developer network. Standard London prime brokerage. Transparent pricing."
    },
    buyerPsychology: "Fear of cultural irrelevance. Cosmopolitan, architecturally aware. Chose Bankside over Knightsbridge—which is itself a cultural statement.",
    fragility: "Medium. Tate Modern lawsuit resolved but exposed structural contradiction. Social housing shortfall a reputation liability.",
    contradictions: ["Floor-to-ceiling glass sold as luxury / ruled as nuisance","Civic narrative / social housing shortfall","Tate Modern as selling point / legal adversary","Stirling shortlisted / protested at ceremony"],
    portrait: "Believes culture justifies everything. An invitation to be the Cultural Insider. Finds privacy suspect. Built floor-to-ceiling windows and then spent six years in court about whether that was wise.",
    dimensionScores: { restraint:5,spectacle:6,heritage:6,futurity:7,archLed:8,brandLed:3,privatePres:2,publicPres:9,culturalCap:10,financialCap:4,service:3,asset:5,institutional:6,commercial:6,individual:6,collective:7,rootedness:10,nomadic:3 }
  },
  {
    id: 8, name: "Waldorf Astoria Residences Miami", city: "Miami", market: "Americas", flag: "🇺🇸",
    developer: "PMG + Greybrook Realty", architect: "Carlos Ott (stacked cube design)", units: 360, priceRange: "$2.3M–$50M+",
    archetype: "Hospitality Heritage / Experiential Aspirational", spectrumPos: 42,
    commercialResult: "84% of sales target in half projected time. Tony Robbins penthouse purchase. Gallery became destination in itself.",
    corePrestigeClaim: "93-year Waldorf Astoria heritage. Home to world leaders, royalty, movie stars. 'True Waldorf Service' applied to residential life.",
    primaryMechanism: "Heritage Leverage / Experiential Sales Architecture",
    keyTensions: ["93-year heritage / license can be terminated","'Luxury is earned, never given' / studios available","Innovative sales gallery / conventional architecture","4 pages proving Miami is a global city / implies it isn't yet assumed"],
    communicationSystem: {
      primaryChannels: ["20,000 sq ft Razorfish experiential sales gallery","Waldorf Astoria heritage imagery (Marilyn, Sinatra)","Tony Robbins celebrity purchase (managed press release)","Two mayoral endorsements at launch"],
      notableAbsences: [],
      salesApproach: "Public-facing. Technology-forward sales gallery. Open brokerage."
    },
    buyerPsychology: "Hotel-literate, globally mobile. Wants permanent hotel-grade living. Buys brands they recognize. Responds to emotional experience over cultural initiation.",
    fragility: "High. Entire prestige architecture rests on a licensing agreement Hilton can terminate. Legal disclaimer printed in brochure.",
    contradictions: ["Heritage is borrowed / brochure shows NY building not Miami building","Luxury earned / studios available","License may terminate / entire identity is licensed","Most innovative sales tool / most conventional architecture"],
    portrait: "Believes the best way to sell luxury is to make you feel it before you understand it. The most emotionally generous building in the study. Wants you to feel welcome, not tested.",
    dimensionScores: { restraint:3,spectacle:6,heritage:7,futurity:5,archLed:3,brandLed:8,privatePres:4,publicPres:8,culturalCap:5,financialCap:6,service:9,asset:5,institutional:6,commercial:8,individual:5,collective:7,rootedness:3,nomadic:8 }
  },
  {
    id: 9, name: "DLF The Camellias", city: "Gurugram", market: "India", flag: "🇮🇳",
    developer: "DLF (KP Singh / DLF5 Golf Links ecosystem)", architect: "Hafeez Contractor + Rockwell Group + SWA + Isometrix", units: 429, priceRange: "₹40Cr–₹190Cr",
    archetype: "Community-Sovereign (New India Variant)", spectrumPos: 65,
    commercialResult: "Nearly sold out. 3x price appreciation (₹22,500 → ₹65–85,000/sqft). ₹190Cr penthouse (most expensive apartment in India). Spawned The Dahlias at ₹80,000+/sqft.",
    corePrestigeClaim: "India's new economy founders concentrated here: Shark Tank judges, startup unicorn founders. Peer community as prestige. DLF corporate heritage.",
    primaryMechanism: "Community-Sovereign / Peer Cohort Concentration",
    keyTensions: ["Global design team credentials / desirability comes from residents not designers","Serenity language / hot pink brochure and active social community","Privacy emphasis / 429 units across 9 towers","Resident-derived prestige / contingent on continued visibility of those residents"],
    communicationSystem: {
      primaryChannels: ["Resident constellation (Aman Gupta, Ashneer Grover, Deepinder Goyal, Peyush Bansal)","Transaction mythology (Indian financial press)","DLF corporate lineage (70+ years, Aralias/Magnolias precedent)","Bespoke resident experiential events","Price appreciation story"],
      notableAbsences: ["No architectural intellectualism","No cultural genealogy beyond India"],
      salesApproach: "DLF internal team + select channel partners. Experience Centre by address."
    },
    buyerPsychology: "New money in a country with old institutions. Startup founders who have disrupted industries. India's new establishment needs its own address.",
    fragility: "Medium. Prestige almost entirely dependent on resident cohort remaining publicly celebrated.",
    contradictions: ["Global design team / desirability from residents not architects","Serenity language / hot pink + active club life","429 units / privacy claims","DLF's 'proudest project' / interior photography looks standard for global benchmarks"],
    portrait: "Bloomed all at once in a decade. Knows it is for the builders, not the inheritors. Pink because it is not afraid of being seen. Believes community is the point.",
    dimensionScores: { restraint:4,spectacle:6,heritage:4,futurity:8,archLed:4,brandLed:5,privatePres:5,publicPres:8,culturalCap:5,financialCap:8,service:8,asset:7,institutional:5,commercial:7,individual:5,collective:10,rootedness:9,nomadic:3 }
  },
  {
    id: 10, name: "Three Sixty West", city: "Mumbai", market: "India", flag: "🇮🇳",
    developer: "Oberoi Realty / Oasis Realty (JV with Sahana/Shetty)", architect: "Kohn Pedersen Fox (KPF) + Samsung C&T (builder)", units: 284, priceRange: "₹45Cr–₹99Cr+",
    archetype: "Hospitality-Mediated Aspirational", spectrumPos: 48,
    commercialResult: "171 of 284 units booked (~65%) as of 2026. 15 years since construction start (2011). 13 registered transactions totalling ₹1,257Cr till May 2026. Ritz-Carlton hotel operational in part; full public opening pending.",
    corePrestigeClaim: "KPF architecture. Ritz-Carlton adjacency. Worli sea views. 'India's Premier Residences.' Hotel partially operational but not fully open to public.",
    primaryMechanism: "Hospitality Brand Licensing + Transaction Mythology",
    keyTensions: ["Ritz-Carlton promised / hotel not fully open to public","Scarcity claimed/~35% still unsold","Damani record deal / reported JV bailout at below-ask pricing","Sovereign framing / 284 units on every portal"],
    communicationSystem: {
      primaryChannels: ["Transaction mythology (Damani, Shahid Kapoor, Abhishek Bachchan, Radhakrishna Damani)","Ritz-Carlton brand license (limited-use mark via Marriott India agreement)","KPF / Samsung C&T credentials","Worli location positioning"],
      notableAbsences: ["No resident community narrative","No architectural cultural authority"],
      salesApproach: "Open broker network. SquareYards, 99acres, MagicBricks, JLL. Publicly disclosed pricing."
    },
    buyerPsychology: "Aspirational fear of being wealthy but not credibly wealthy. Ritz-Carlton certifies global positioning. Service fantasy desire construction.",
    fragility: "High. Ritz-Carlton hotel not fully open. JV distress signals. Brochure's own disclaimer undermines the hospitality promise.",
    contradictions: ["Scarcity language/~35% unsold","Perfection repeated 14+ times / ₹3,403Cr Oberoi buyout of 63 units reveals JV distress","Ritz-Carlton promise / Ritz-Carlton disclaimer in same brochure","Sovereign framing / open broker ecosystem"],
    portrait: "Wants to be 220 CPS but operates in a market without that grammar yet. The Ritz-Carlton will fully open. When it does, everything may snap into alignment. The foundations for sovereignty are there. The conditions have not yet been met.",
    dimensionScores: { restraint:6,spectacle:4,heritage:3,futurity:6,archLed:5,brandLed:8,privatePres:5,publicPres:6,culturalCap:4,financialCap:7,service:8,asset:6,institutional:5,commercial:7,individual:5,collective:5,rootedness:7,nomadic:5 }
  },
  {
    id: 11, name: "Central Park Tower", city: "New York", market: "Global", flag: "🇺🇸",
    developer: "Extell Development + SMI USA (Shanghai Municipal Investment)", architect: "Adrian Smith + Gordon Gill Architecture", units: 179, priceRange: "$8M–$250M (headline)",
    archetype: "Quantitative Record Prestige", spectrumPos: 58,
    commercialResult: "~$1.8B closed vs $2.4B target (-25%). Systematic discounts 20–42%. Netflix penthouse listing failed. $250M reduced.",
    corePrestigeClaim: "Tallest residential building in the world (1,550 ft). 'Billionaires' Row.' Adrian Smith designed Burj Khalifa. $4B projected sellout (now ~$3B).",
    primaryMechanism: "Quantitative Record / Location Trophy",
    keyTensions: ["World's tallest / 20–42% systematic discounts","'Definitive New York Skyscraper' / co-developed by Chinese state entity","$250M headline / pulled from market after Netflix premiere","Record prestige / Netflix reality show positioning"],
    communicationSystem: {
      primaryChannels: ["Height record global press","Immersive sales gallery (17 projectors)","Adrian Smith / Burj Khalifa credential","Extell + Shanghai Municipal co-development"],
      notableAbsences: ["No cultural narrative","No architectural philosophy","No heritage depth"],
      salesApproach: "In-house + Corcoran Sunshine + SERHANT for penthouse. Netflix exposure. Open pricing on StreetEasy."
    },
    buyerPsychology: "Height as ancient metaphor. Terminus of vertical desire. 'I am above everyone else, quantifiably, in feet.' Buyer for whom the record is the point.",
    fragility: "High. Record prestige requires prices to hold. Systematic discounts contradict the record.",
    contradictions: ["World record / systematic discounts","'Definitive NY Skyscraper' / minimal NY cultural identity","$250M headline / pulled after Netflix with no sale","Sovereign aspiration / Netflix reality show"],
    portrait: "Born certain that height was enough. Every price cut is an existential event—a confession that the record was not enough. Waiting. Still believes the height is enough. Is not entirely wrong.",
    dimensionScores: { restraint:1,spectacle:9,heritage:1,futurity:8,archLed:6,brandLed:3,privatePres:2,publicPres:10,culturalCap:2,financialCap:8,service:5,asset:7,institutional:2,commercial:9,individual:7,collective:3,rootedness:2,nomadic:8 }
  },
  {
    id: 12, name: "Burj Binghatti Jacob & Co", city: "Dubai", market: "GCC / Global", flag: "🇦🇪",
    developer: "Binghatti Developers", architect: "Binghatti Architects", units: 299, priceRange: "AED 5M–750M",
    archetype: "Performative Spectacle / Fashion Brand", spectrumPos: 25,
    commercialResult: "Stadium launch. AED 750M Billionaire Penthouse as headline price. Watch collector channel innovation. Binghatti Instagram: 1M followers.",
    corePrestigeClaim: "World's tallest residential tower. Jacob & Co 'horological code.' AED 750M Billionaire Penthouse. Dubai hypertower category invented.",
    primaryMechanism: "Record Prestige + Spectacle + Fashion Brand Transference",
    keyTensions: ["Ultra-exclusivity claimed / global open broker ecosystem","Watchmaking craft claim / architecture cannot deliver at 557m","'Meticulous craftsmanship' / disclaimer: all finishes subject to change","Three simultaneous branded hypertowers dilutes each record"],
    communicationSystem: {
      primaryChannels: ["Coca-Cola Arena stadium launch (17,000 capacity)","Watch collecting publications (Europa Star, Watch Collecting Lifestyle)","Mercury Communications UK/GCC PR agency","Binghatti Instagram (1M followers, 879 posts)","Exclusive Jacob & Co timepiece bundle with purchase"],
      notableAbsences: [],
      salesApproach: "Global open broker network. VIP nomination process (light filter). Cryptocurrency accepted."
    },
    buyerPsychology: "First-generation wealth cultures where conspicuous success is virtuous. GCC royals, South Asian entrepreneurs, Russian oligarchs. Visibility as validation.",
    fragility: "Medium. Three simultaneous branded hypertowers diluting the record uniqueness. Brand saturation risk.",
    contradictions: ["Ultra-exclusivity / hundreds of global brokers","Craft depth claimed / tiles are Tonino Lamborghini-level branding","Record-chasing / Binghatti has three simultaneous record-breakers"],
    portrait: "Does not believe in subtlety. Considers it cowardice. The anti-220 CPS in every register—and that opposition is its strategic clarity.",
    dimensionScores: { restraint:1,spectacle:10,heritage:1,futurity:10,archLed:3,brandLed:10,privatePres:1,publicPres:10,culturalCap:2,financialCap:9,service:8,asset:6,institutional:1,commercial:10,individual:7,collective:5,rootedness:2,nomadic:9 }
  },
  {
    id: 13, name: "Trump Tower", city: "New York", market: "Global (split)", flag: "🇺🇸",
    developer: "Trump Organization", architect: "Der Scutt", units: 263, priceRange: "$1.5M–$47M (current market)",
    archetype: "Personal Sovereign Brand / Hyperbolic Record", spectrumPos: 38,
    commercialResult: "49% price decline per sqft since 2013 in NYC. 85% → 57% of brokers use Trump name in listings. But 6 new India projects. Premium sustained in UAE/Saudi/India.",
    corePrestigeClaim: "The name IS the building. 'Most coveted address.' Proximity to the former/current US President. Global celebrity. 'Truthful hyperbole.'",
    primaryMechanism: "Personal Sovereign Brand / Political Power Adjacency",
    keyTensions: ["World's most famous address / 49% price decline in NYC","Sovereign luxury / Starbucks in the lobby","Privacy claim / security perimeter makes entry a daily political event","Global recognition / domestic market collapse"],
    communicationSystem: {
      primaryChannels: ["Trump himself (Truth Social, media, rallies)","Political event coverage (involuntary)","The Apprentice (14 seasons)","Global licensing deals ($12M from India alone)","Transaction mythology (Liberace, Michael Jackson)"],
      notableAbsences: ["No architectural language","No cultural pedigree","No restraint of any kind"],
      salesApproach: "Commercial building leasing document. Open market. Residential floors marketed through standard NYC brokerage."
    },
    buyerPsychology: "Deep fear of invisibility. Fear of not being seen as a winner. Not the connoisseur—The Winner (capital W). In global markets: aspiration for US presidential adjacency.",
    fragility: "Bimodal. Extremely fragile in NYC/Western markets. Extremely durable in India/Gulf/emerging markets. The same signifier means opposite things.",
    contradictions: ["Most famous / 49% price decline","Sovereign / Starbucks and public lobby","Global premium / domestic market collapse","Heritage section culminates in TV show"],
    portrait: "Not a building. An argument. The argument is simple and has never changed since 1983: I am the biggest. I won. This is proof. The gold lettering is not decoration; it is theology.",
    dimensionScores: { restraint:1,spectacle:10,heritage:3,futurity:5,archLed:1,brandLed:10,privatePres:1,publicPres:10,culturalCap:1,financialCap:8,service:4,asset:5,institutional:1,commercial:10,individual:8,collective:4,rootedness:5,nomadic:7 }
  },
  {
    id: 14, name: "Tonino Lamborghini Residences", city: "Dubai", market: "GCC / Investor", flag: "🇦🇪",
    developer: "Gulf Land Property Developers (est. 2020)", architect: "Not named in brochure", units: 8000, priceRange: "AED 1.8M–5M+",
    archetype: "Licensed Brand Aspirational / Investor-Aspirational", spectrumPos: 12,
    commercialResult: "Phase sales underway. Previous incarnation (Oriental Pearls) failed. Gulf Land acquired failed construction footprint and relaunched 2024.",
    corePrestigeClaim: "Lamborghini name (ambient conflation with supercar). 'Italian lifestyle.' LEGACY in red caps. 8,000 units.",
    primaryMechanism: "Brand Transference / Aspiration through Misidentification",
    keyTensions: ["Lamborghini name / legally disconnected from Automobili Lamborghini","'Luxury' / 8,000 units is a city, not an enclave","'Privacy and Discretion' section / listed on every property portal","'Legacy' / developer founded 2020, prior project failed"],
    communicationSystem: {
      primaryChannels: ["Lamborghini family name (ambient supercar conflation)","Tonino Lamborghini personal appearance at launch event","Mentalist act at launch (brand theater)","Open property portal distribution (Bayut, Property Finder, YouTube broker videos)"],
      notableAbsences: ["No architect named","No cultural substance","No heritage of any kind"],
      salesApproach: "DRE Homes distribution. Open portal listings. Investment visa pitch. 70/30 payment plan. ROI pitch."
    },
    buyerPsychology: "Financial success achieved, address doesn't yet signal earned identity. The shield and the bull are enough. Aspiration through misidentification.",
    fragility: "Very High. Entire prestige rests on borrowed name legally disconnected from supercar. Prior project on same plot failed. 8,000 units cannot sustain rarity.",
    contradictions: ["Lamborghini name / not Automobili Lamborghini","8,000 units / 'luxury individuality'","Privacy section / every portal lists it","Legacy claim / developer founded 2020"],
    portrait: "Young and he knows it. Loves the name Lamborghini the way you can only love something you didn't make. Will sell all 8,000 units—not to 220 CPS buyers, but to people who almost could afford that and feel good about this instead.",
    dimensionScores: { restraint:1,spectacle:8,heritage:1,futurity:6,archLed:1,brandLed:10,privatePres:1,publicPres:9,culturalCap:1,financialCap:7,service:4,asset:6,institutional:1,commercial:10,individual:3,collective:5,rootedness:1,nomadic:8 }
  }
];

const dimensions = [
  { id: "restraint", pole1: "Restraint", pole2: "Spectacle", description: "Degree to which the prestige proposition suppresses visible markers vs. maximizes sensory/visual spectacle." },
  { id: "heritage", pole1: "Heritage", pole2: "Futurity", description: "Does legitimacy derive from historical depth, genealogy, and continuity vs. forward-looking ambition, records, and innovation?" },
  { id: "archLed", pole1: "Architecture-Led", pole2: "Brand-Led", description: "Is the building the primary prestige carrier, or is a licensed/associated brand doing the prestige work?" },
  { id: "privatePres", pole1: "Private Prestige", pole2: "Public Prestige", description: "Is prestige constructed through invisibility and whisper networks? Or through spectacle, media broadcast, and visible social proof?" },
  { id: "culturalCap", pole1: "Cultural Capital", pole2: "Financial Capital", description: "Does the project address buyers primarily through cultural fluency or through explicit financial power (price records, superlative scale)?" },
  { id: "service", pole1: "Service-Led", pole2: "Asset-Led", description: "Is the primary prestige offer the experience of being served? Or is the building primarily a financial/status asset to own?" },
  { id: "institutional", pole1: "Institutional", pole2: "Commercial", description: "Does the project communicate as a social or cultural institution vs. openly as a commercial real estate product?" },
  { id: "individual", pole1: "Individuation", pole2: "Collectivity", description: "Is the prestige experience about radical individual distinction? Or about belonging to an exclusive tribe or community?" },
  { id: "rootedness", pole1: "Rootedness", pole2: "Nomadic", description: "Does the building's prestige rest on deep, place-specific identity? Or does it serve a globally mobile buyer?" }
];

const candidateDimensions = [
  { id:"d1", name:"Prestige Source Legitimacy", category:"Core", description:"Earned institutional prestige (address history, architectural pedigree, social filtering) vs. manufactured prestige (brand licensing, celebrity association, record-breaking superlatives).", variance:"Very High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP", evidence:"220 CPS vs Burj Binghatti vs Tonino Lamborghini form three distinct positions." },
  { id:"d2", name:"Restraint vs. Spectacle Orientation", category:"Core", description:"Degree to which the prestige proposition suppresses visible markers vs. maximizes sensory/visual spectacle.", variance:"Very High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP", evidence:"Cleanest separator in the dataset. 220 CPS (10) vs Burj Binghatti (1)." },
  { id:"d3", name:"Heritage vs. Futurity Orientation", category:"Core", description:"Does the building's prestige claim rest in authenticated historical depth or in forward-looking ambition (tallest, newest, most innovative)?", variance:"High", redundancyRisk:"Medium — correlates with Prestige Source Legitimacy", operationalizable:"High", survivalVerdict:"TEST for redundancy", evidence:"111 W57 and One Hyde Park skew heritage; Burj Binghatti and CPT skew futurity." },
  { id:"d4", name:"Architecture-Led vs. Brand-Led Identity", category:"Core", description:"Is the building itself the primary prestige carrier? Or is a licensed/associated brand doing the prestige work that architecture alone cannot?", variance:"Very High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP", evidence:"Critical for Indian context. Waldorf, Three Sixty West, Burj Binghatti, Tonino Lamborghini are brand-led." },
  { id:"d5", name:"Private vs. Public Prestige Transmission", category:"Core", description:"Is prestige constructed through invisibility, opacity, and whisper networks? Or through broadcast, media, and visible social proof?", variance:"Very High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP", evidence:"One Hyde Park and 220 CPS at private extreme; Trump Tower and Burj Binghatti at public extreme." },
  { id:"d6", name:"Cultural Capital vs. Financial Capital Signaling", category:"Core", description:"Does the project address buyers primarily through cultural fluency or through explicit financial power?", variance:"High", redundancyRisk:"Medium — correlates with Heritage orientation", operationalizable:"Medium", survivalVerdict:"TEST — may merge with Heritage/Legitimacy", evidence:"111 W57 and 56 Leonard at cultural extreme. CPT, Burj Binghatti, Tonino at financial extreme." },
  { id:"d7", name:"Service-Led vs. Asset-Led Identity", category:"Secondary", description:"Is the primary prestige offer the experience of being served at an extraordinary level? Or is the building primarily a financial/status asset?", variance:"High", redundancyRisk:"Medium", operationalizable:"High", survivalVerdict:"TEST — may be captured by Architecture/Brand axis", evidence:"Aman NY, Waldorf Miami, Three Sixty West service-led. One Hyde Park pure asset." },
  { id:"d8", name:"Institutional vs. Commercial Self-Presentation", category:"Core", description:"Does the project communicate as a social or cultural institution? Or openly as a commercial real estate product (open pricing, broker networks, payment plans, ROI pitches)?", variance:"Very High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP", evidence:"220 CPS performs as institution; Tonino Lamborghini and CPT openly commercial." },
  { id:"d9", name:"Individuation vs. Collectivity", category:"Secondary", description:"Is the prestige experience about radical individual distinction? Or about belonging to an exclusive tribe or peer community?", variance:"Medium", redundancyRisk:"Medium", operationalizable:"High", survivalVerdict:"TEST", evidence:"56 Leonard and One Hyde Park individual. DLF Camellias and Aman NY deeply collective." },
  { id:"d10", name:"Geographic Rootedness vs. Nomadic Identity", category:"Secondary", description:"Does the building's prestige rest on deep, unreplicable place-specific identity? Or does it serve globally mobile capital?", variance:"High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP for Indian context", evidence:"111 W57 and DLF Camellias are deeply rooted. One Hyde Park and Aman NY serve nomadic capital." },
  { id:"d11", name:"Admission Architecture Intensity", category:"Structural", description:"The structural rigor of the entry filter: from invitation-only with personal vetting (220 CPS) to completely open purchase (Tonino Lamborghini).", variance:"Very High", redundancyRisk:"Low", operationalizable:"High", survivalVerdict:"KEEP", evidence:"This is the mechanism behind 220 CPS's sovereign position." },
  { id:"d12", name:"Prestige Fragility / Structural Durability", category:"Risk", description:"How robust is the prestige claim against: licensing termination, political changes, developer distress, architectural defects, market context shifts?", variance:"High", redundancyRisk:"Low", operationalizable:"Medium", survivalVerdict:"CONSIDER — analytically important but may not score well", evidence:"Waldorf (licensed = fragile), Three Sixty West (JV distress), 220 CPS (intrinsic = durable)." },
  { id:"d13", name:"Buyer Identity Offered", category:"Psychological", description:"What identity does the building offer the buyer? Connoisseur-sovereign, tribal community member, winner-visible, global nomad, cultural insider.", variance:"High", redundancyRisk:"High — may be a composite of other dimensions", operationalizable:"Low", survivalVerdict:"REDUCE to constituent dimensions", evidence:"Analytically rich but likely captured by other variables." },
  { id:"d14", name:"Communication Channel vs. Prestige Logic", category:"WARNING", description:"⚠️ RISK FLAG: This should NOT be a variable. Number of Instagram posts, brochure page count, whether a launch event was held — these are channel measurements, not prestige construction variables.", variance:"N/A", redundancyRisk:"N/A", operationalizable:"High (but wrong question)", survivalVerdict:"ELIMINATE", evidence:"The test: if the same prestige logic was expressed through a different channel, the score should not change." }
];

// ─── PCA CLUSTER DATA ─────────────────────────────────────────────────────────
const variableCategories = [
  {
    id: "cat1", label: "I — Scarcity Architecture", color: "#d4af37",
    variables: [
      { id:"v01", number:"01", name:"Structural Inaccessibility", type:"Sovereign", typeNote:"Measured by: public availability of price, unit, process", definition:"How hard is it, by design, to even discover, contact, or enter a conversation about purchase? Invitation-only systems, broker questionnaires, undisclosed pricing, and admission interviews are the highest expressions. The barrier itself is the first luxury.", examples:"220 CPS: broker questionnaire + Roth personal interview. One Hyde Park: invite-only website. Central Park Tower: StreetEasy listing — lowest score." },
      { id:"v02", number:"02", name:"Unit Count Discipline", type:"Physical", typeNote:"Fragility: dilution by volume", definition:"Total number of residences is a ceiling on achievable prestige. Under ~120 units enables true social homogeneity and peer-curation. Above ~200 units, sovereign positioning requires extraordinary compensating mechanisms. 8,000 units structurally destroys the claim.", examples:"Steinway Tower: 59. 220 CPS: ~118. Neo Bankside: 230. Tonino Lamborghini: 8,000." },
      { id:"v03", number:"03", name:"Information Opacity", type:"Communication", typeNote:"Inverse of marketing spend", definition:"The degree to which pricing, resident identity, transaction terms, and interior photography are withheld from public circulation. True luxury controls the image. What is unseen is more desired than what is shown — the withheld interior is always the most desirable room.", examples:"220 CPS: no website, 7 Instagram posts, never stated prices. One Hyde Park: 80% BVI ownership, no resident list. Burj Binghatti: prices prominently published." }
    ]
  },
  {
    id: "cat2", label: "II — Prestige Ownership", color: "#8b9dc3",
    variables: [
      { id:"v04", number:"04", name:"Prestige Source: Owned vs. Borrowed", type:"Durability", typeNote:"Borrowed = licensed fragility", definition:"Is the building's prestige intrinsic (architecture, location, history it actually possesses) or licensed/borrowed (brand partnership, celebrity endorsement, hospitality franchise)? Owned prestige compounds and is unrevocable. Borrowed prestige is contractually fragile and can be terminated.", examples:"Owned: 220 CPS limestone genealogy, 111W57 Steinway landmark, 56 Leonard H&dM commission. Borrowed: Waldorf Miami (license can expire), Three Sixty West (Ritz-Carlton disclaimer), Tonino Lamborghini (no connection to the car brand)." },
      { id:"v05", number:"05", name:"Architectural Object Sovereignty", type:"Cultural Capital", typeNote:"Measured by: architectural press, critical endorsement", definition:"The degree to which the building itself — its materiality, structural system, and spatial language — is a culturally irreplaceable object that cannot be replicated. Could this building exist anywhere else, or was it the only possible answer to this site, this program, this moment?", examples:"56 Leonard: first H&dM residential high-rise globally. 111W57: world's most slender skyscraper. 220 CPS: limestone in a glass canyon. Waldorf Miami: generic stacked cubes — brand does the work." },
      { id:"v06", number:"06", name:"Heritage Depth and Ownership", type:"Institutional", typeNote:"Performed heritage collapses under scrutiny", definition:"Does the building have a genuine historical root — a cultural institution, a century of significance, a legally designated landmark — or does it manufacture heritage through brand association? True heritage is time-tested and institutionally validated. Performed heritage is marketing dressed as genealogy.", examples:"Real: 111W57 (Steinway Hall, 1925, double-landmarked, Rachmaninoff performed here). Borrowed: Waldorf Miami (93-year NY heritage applied to a building in Miami with no connection to it). Absent: Burj Binghatti, Central Park Tower." }
    ]
  },
  {
    id: "cat3", label: "III — Social Architecture", color: "#c9a96e",
    variables: [
      { id:"v07", number:"07", name:"Resident Cohort Curation", type:"Social", typeNote:"The unreplicable amenity", definition:"The quality, homogeneity, and social caliber of actual residents is itself the building's most consequential amenity. Peer-equivalence — living among people of genuine comparable standing — cannot be manufactured by amenities. It requires either structural screening or emergent community formation. Who lives next door is more important than what is on the roof.", examples:"220 CPS: co-op-style vetting by developer. DLF Camellias: India's startup founders self-selected — Shark Tank judges, Zomato, Lenskart, MakeMyTrip. Trump Tower: no curation — dictators alongside celebrities alongside convicted criminals." },
      { id:"v08", number:"08", name:"Transaction Mythology Quality", type:"Mythology", typeNote:"Self-reinforcing desire loop", definition:"The ability of individual sale events to generate organic, self-reinforcing prestige narratives — price records that become cultural facts, buyer identities that validate the address, transactions covered as events not data. The record that enters the permanent cultural lexicon is worth more than any advertising. Price appreciation without mythology is just finance.", examples:"220 CPS: Ken Griffin $238M became a political speech, an art world reference, a cultural fact. One Hyde Park: £136M record covered in TIME, Vanity Fair. Central Park Tower: discounts of 30–42% became the recurring story, destroying mythology." },
      { id:"v09", number:"09", name:"Privacy as Physical Infrastructure", type:"Operational", typeNote:"Absent privacy = vulnerability", definition:"The degree to which physical privacy — separate entrances, underground access, security infrastructure, biometric systems, ownership opacity — is designed as a structural product, not an add-on amenity. For sovereign-tier buyers, invisibility is not a preference; it is an operational requirement.", examples:"One Hyde Park: underground tunnels, SAS-trained staff, iris scanners, panic rooms, 80% BVI ownership. 220 CPS: LLC structures, private residential entrance. Neo Bankside: sold floor-to-ceiling glass — buyers sued Tate Modern for invasion of privacy." }
    ]
  },
  {
    id: "cat4", label: "IV — Service and Experience", color: "#2d6a4f",
    variables: [
      { id:"v10", number:"10", name:"Service Invisibility and Anticipation", type:"Experiential", typeNote:"Invisible service = highest tier", definition:"True ultra luxury service is not a stack of named amenities — it is the elimination of friction before it is felt. The highest expression: a building where you never notice the management, where service is the absence of problems rather than the presence of staff. Service that needs to announce itself is still aspiring. Service that is simply how things are has arrived.", examples:"One Hyde Park: hotel-grade management through Mandarin Oriental — a globally portable service guarantee. Waldorf Astoria: 93 years of hospitality craft applied residentially. Three Sixty West: service promised, hotel not yet open — the gap is the building's central failure." },
      { id:"v11", number:"11", name:"Jurisdictional and Capital Security", type:"Financial", typeNote:"Only One Hyde Park fully delivers this", definition:"For the global sovereign-wealth buyer, the legal jurisdiction, ownership structure stability, and capital preservation profile of the property is itself a primary product variable — equal to or exceeding physical specification. A building in a stable legal environment with flexible offshore-compatible ownership structures offers geopolitical insurance.", examples:"One Hyde Park: English law, BVI ownership, political stability — bought as a capital fortress, often unoccupied. 220 CPS: LLC structure standard, NY legal clarity. DLF Camellias: India-specific risk profile — rupee exposure, domestic legal framework limits global buyer appeal." },
      { id:"v12", number:"12", name:"Communication Register Discipline", type:"Communication", typeNote:"Every contradiction is visible to the right buyer", definition:"Whether the building's communication style — its visual language, copy register, media presence, and sales architecture — is structurally consistent with its prestige claim. A building that claims sovereign positioning but lists on StreetEasy, features on Netflix, and publishes comparative brand scores has failed this variable. Anti-marketing is the most sophisticated marketing.", examples:"Perfect discipline: 220 CPS (7 Instagram posts, no website, no ads, earned a billion before any campaign). Failed: Central Park Tower (Netflix reality show for the $250M penthouse). Confused: Three Sixty West ('perfection' repeated 14 times — a nervous tic, not a fact)." }
    ]
  }
];

const pcaClusters = [
  {
    id:"f1", label:"Social Sovereignty", romanNumeral:"I", color:"#d4af37",
    members:["220 Central Park South","One Hyde Park","Aman New York Residences","DLF The Camellias","Three Sixty West"],
    description:"The strongest latent prestige dimension discovered through PCA. Prestige is generated through restricted access, resident filtration, privacy infrastructure and social sovereignty. Luxury is not displayed. It is controlled.",
    sharedMechanism:"Prestige through exclusion. Membership itself becomes the luxury product.",
    keyDimensions:["Access Restriction","Cohort Prestige","Privacy Infrastructure","Legacy Permanence"],
    internalVariation:"Aman introduces hospitality into an otherwise sovereign cluster. DLF Camellias introduces community concentration as an Indian variant of sovereignty.",
    indianRelevance:"This remains the most durable prestige model globally. DLF Camellias demonstrates that India can generate sovereign prestige through resident quality rather than generational institutional legacy."
  },
  {
    id:"f2", label:"Cultural Capital", romanNumeral:"II", color:"#8b9dc3",
    members:["111 West 57th","56 Leonard Street","Neo Bankside"],
    description:"Prestige generated through architecture, design authorship and cultural legitimacy. These projects communicate sophistication rather than wealth.",
    sharedMechanism:"The building itself performs the filtering function. Appreciation requires cultural fluency.",
    keyDimensions:["Architectural Prestige","Cultural Capital Density","Design Authorship","Low Prestige Borrowing"],
    internalVariation:"111 West 57th leans toward heritage legitimacy. 56 Leonard leans toward artistic objecthood. Neo Bankside is the most civic expression of the cluster.",
    indianRelevance:"No major Indian ultra luxury project currently occupies this territory. This represents one of the most underdeveloped prestige mechanisms in India."
  },
  {
    id:"f3", label:"Object Prestige", romanNumeral:"III", color:"#c9a96e",
    members:["432 Park Avenue","Central Park Tower","Burj Binghatti Jacob & Co"],
    description:"Prestige generated through skyline dominance, recognisability and architectural objecthood. The building itself becomes the symbol.",
    sharedMechanism:"The structure functions as a landmark before it functions as a residence.",
    keyDimensions:["Architectural Visibility","Scale Signalling","Object Identity","Financial Symbolism"],
    internalVariation:"432 Park Avenue approaches minimal sovereign expression. Burj Binghatti represents branded spectacle. Central Park Tower sits between the two.",
    indianRelevance:"India has begun experimenting with this territory but lacks a globally recognised architectural object that functions as a national luxury symbol."
  },
  {
    id:"f4", label:"Borrowed Prestige", romanNumeral:"IV", color:"#b5451b",
    members:["Waldorf Astoria Residences Miami","Trump Tower","Tonino Lamborghini Residences"],
    description:"Prestige is transferred from an external brand system. The buyer purchases symbolic associations already created elsewhere.",
    sharedMechanism:"Brand equity performs the prestige work.",
    keyDimensions:["Prestige Borrowing","Brand Transfer","External Legitimacy","Symbolic Recognition"],
    internalVariation:"Waldorf borrows hospitality prestige. Trump borrows personal brand prestige. Lamborghini borrows luxury-product prestige.",
    indianRelevance:"This remains the most easily replicable ultra luxury strategy because prestige can be licensed rather than organically developed."
  }
];

// ─── POSITIONING MAP DATA ─────────────────────────────────────────────────────
const mapProjects = [
  { name:"220 Central Park South", shortName:"220 CPS", x:92, y:88, cluster:"I" },
  { name:"One Hyde Park", shortName:"One Hyde", x:88, y:76, cluster:"I" },
  { name:"111 West 57th", shortName:"111 W57", x:78, y:84, cluster:"I" },
  { name:"Aman New York Residences", shortName:"Aman NY", x:85, y:65, cluster:"III" },
  { name:"56 Leonard Street", shortName:"56 Leonard", x:68, y:82, cluster:"II" },
  { name:"432 Park Avenue", shortName:"432 Park", x:62, y:75, cluster:"II" },
  { name:"Neo Bankside", shortName:"Neo Bankside", x:52, y:72, cluster:"II" },
  { name:"DLF The Camellias", shortName:"Camellias", x:55, y:58, cluster:"V" },
  { name:"Waldorf Astoria Residences Miami", shortName:"Waldorf Miami", x:38, y:48, cluster:"III" },
  { name:"Three Sixty West", shortName:"Three Sixty West", x:42, y:42, cluster:"III" },
  { name:"Central Park Tower", shortName:"CPT", x:22, y:30, cluster:"IV" },
  { name:"Trump Tower", shortName:"Trump", x:18, y:22, cluster:"IV" },
  { name:"Burj Binghatti Jacob & Co", shortName:"Burj Binghatti", x:12, y:18, cluster:"IV" },
  { name:"Tonino Lamborghini Residences", shortName:"Tonino", x:8, y:10, cluster:"IV" },
];
const clusterColors = { I:"#d4af37", II:"#8b9dc3", III:"#c9a96e", IV:"#b5451b", V:"#2d6a4f" };
const clusterNames  = { I:"Sovereign Institutional", II:"Cultural Capital", III:"Hospitality-Mediated", IV:"Record / Spectacle", V:"India-Indigenous" };

// ─── NEW POSITIONING MAP SVG DATA (prefixed pm_ to avoid collisions) ──────────
const pm_projects = [
  { name:"220 Central Park South", short:"220 CPS",       rc1: 1.348, rc2: 0.707, q:"TR", desc:"Access restriction is the product. Social filtering through broker questionnaire and developer interview. Prestige through institutional legitimacy and resident cohort." },
  { name:"One Hyde Park",           short:"One Hyde Park", rc1: 1.302, rc2: 0.181, q:"TR", desc:"Capital fortress architecture. BVI ownership, iris scanners, SAS staff. English law jurisdiction as capital preservation. Privacy is the primary product." },
  { name:"Aman New York",           short:"Aman NY",       rc1: 1.178, rc2:-0.133, q:"TR", desc:"22 residences. Aman brand is the prestige vehicle. Radical exclusion philosophy. Anti-display. Service sovereignty as founding identity." },
  { name:"432 Park Avenue",         short:"432 Park",      rc1: 0.270, rc2: 0.809, q:"TR", desc:"Mathematical proportioning, Central Park framing geometry. Billionaires' Row location inseparable from identity. Architectural prestige with moderate wealth display." },
  { name:"56 Leonard Street",       short:"56 Leonard",    rc1:-0.427, rc2: 1.713, q:"TL", desc:"Herzog & de Meuron. Pritzker-pedigree architecture as primary prestige engine. Anish Kapoor permanent commission. Cultural capital is the dominant mechanism." },
  { name:"111 West 57th",           short:"111 W57",       rc1:-1.006, rc2: 1.359, q:"TL", desc:"Steinway Hall double-landmarked. Warren & Wetmore genealogy. Rachmaninoff performed here. Heritage is the deepest in the study — architecture and history are inseparable." },
  { name:"Neo Bankside",            short:"Neo Bankside",  rc1:-1.042, rc2: 1.068, q:"TL", desc:"RSHP + Tate Modern adjacency. Stirling Prize shortlist. Cultural capital through institutional geography. Location is the most indispensable prestige variable in the study." },
  { name:"DLF The Camellias",       short:"Camellias",     rc1: 1.455, rc2:-0.823, q:"BR", desc:"429 units. Shark Tank founders, Zomato, Lenskart, MakeMyTrip. Resident cohort D8=10 — highest in study. Community concentration is the entire prestige mechanism." },
  { name:"Three Sixty West",        short:"Three Sixty West",      rc1: 0.646, rc2:-0.747, q:"BR", desc:"Ritz-Carlton borrowed. Service sovereignty narrative ('Perfection Delivered'). Celebrity transactions — Damani ₹1,238Cr. Community prestige through celebrity concentration." },
  { name:"Waldorf Astoria Miami",   short:"Waldorf Miami", rc1:-0.843, rc2:-1.384, q:"BL", desc:"D1=10 — maximum prestige borrowing. 93 years of Waldorf heritage imported to Miami. YouGov brand score chart. No architectural prestige. Branded heritage as the sole mechanism." },
  { name:"Central Park Tower",      short:"CPT",           rc1:-0.563, rc2:-0.079, q:"BL", desc:"D10=10 — world's tallest residential is the entire identity. Netflix exposure. 30–42% price cuts. Superlative without substance. Announced prestige that the market rejected." },
  { name:"Trump Tower",             short:"Trump",         rc1:-1.016, rc2:-1.106, q:"BL", desc:"One human being is the entire prestige infrastructure. Gold, capitals, maximum display. D6=10. Starbucks in lobby. 49% price decline. The consequences of announced prestige without institutional depth." },
  { name:"Burj Binghatti Jacob & Co", short:"Burj Binghatti", rc1:-0.263, rc2:-0.413, q:"BL", desc:"D10=10. 'Hypertower' coinage. AED 750M penthouse. Stadium launch. Jacob & Co horology borrowed. Record-as-product. Spectacle as the primary communication vehicle." },
  { name:"Tonino Lamborghini",      short:"Tonino LB",     rc1:-1.040, rc2:-1.151, q:"BL", desc:"D1=10, D2=1. 8,000 units. Name licensing as the entire value proposition. Brand confusion (Automobili vs Tonino). Investor visa pitch. The most complete prestige borrowing in the study." },
];
const pm_quadrantColors = { TR:"#B8972A", TL:"#5F5E5A", BR:"#0F6E56", BL:"#993C1D" };
const pm_quadrantNames  = { TR:"Sovereign institutional", TL:"Cultural-architectural", BR:"Community sovereign", BL:"Record / spectacle" };
const pm_qTagColors     = { TR:["#FAF5E4","#7A6010","#B8972A"], TL:["#F1EFE8","#3A3835","#888780"], BL:["#FAECE7","#4A1B0C","#993C1D"], BR:["#E1F5EE","#04342C","#0F6E56"] };
const pm_labelOffsets = {
  "Neo Bankside": [20, 12],
"111 W57": [10, -4],
"56 Leonard": [12, 2],

"432 Park": [16, -8],

"220 CPS": [14, -12],
"One Hyde Park": [-10, -13],
"Aman NY": [12, 0],

"Trump": [-12, 10],
"Tonino LB": [12, -12],
"Waldorf Miami": [14, 12],

"CPT": [12, 0],
"Burj Binghatti": [-14, 4],

"Three Sixty West": [12, 0],
"Camellias": [-10, -13],
};
const pm_PAD = { l:58, r:30, t:44, b:58 };
const PM_W = 1000, PM_H = 420;
const PM_CW = PM_W - pm_PAD.l - pm_PAD.r;
const PM_CH = PM_H - pm_PAD.t - pm_PAD.b;
function pm_toSvgX(rc1) { return pm_PAD.l + ((rc1 - (-1.1)) / (1.55 - (-1.1))) * PM_CW; }
function pm_toSvgY(rc2) { return pm_PAD.t + (1 - (rc2 - (-1.5)) / (1.85 - (-1.5))) * PM_CH; }
const pm_quadrantDefs = [
  { q:"TL", pos:"Top left",     subtitle:"Inherited · Announced",   heading:"Cultural-architectural authority", body:"Prestige derives from architecture, cultural significance and design literacy. These buildings publicly express legitimacy through form — access is open, but only the culturally literate self-select.", borderColor:"#888780" },
  { q:"TR", pos:"Top right",    subtitle:"Inherited · Possessed",   heading:"Sovereign institutional",         body:"Prestige requires no announcement. It exists through institutional legitimacy, social filtering, historical significance and long-term scarcity. These projects behave as institutions, not products.", borderColor:"#B8972A" },
  { q:"BL", pos:"center",  subtitle:"Constructed · Announced", heading:"Record / spectacle",               body:"Prestige is manufactured and publicly communicated. Brand associations, superlatives, height records, celebrity endorsement and commercial signalling are the primary prestige engines.", borderColor:"#993C1D" },
  { q:"BR", pos:"Bottom right", subtitle:"Constructed · Possessed", heading:"Emerging community sovereign",     body:"Prestige is engineered through community formation, resident concentration, peer-group curation and service ecosystems. Prestige is possessed by the community, not announced to the market.", borderColor:"#0F6E56" },
];
const pm_insights = [
  { n:"01", heading:"The top-right quadrant is structurally uncrowded",          text:"Only four projects occupy the sovereign institutional territory globally. This cluster is not reachable through investment — it is reached only through time, restraint and institutional consistency." },
  { n:"02", heading:"The bottom-left quadrant is structurally overcrowded",       text:"Five projects compete for the same spectacle-and-announcement territory. Record claims, celebrity associations and superlatives are the most replicated prestige mechanisms in the study — and therefore the least differentiating." },
  { n:"03", heading:"Prestige borrowing and architectural prestige are mutually exclusive axes", text:"The factor analysis confirms r = −0.65 between prestige borrowing intensity and architectural prestige dependence. No project in the study achieves high scores on both simultaneously. The two are strategic alternatives, not complements." },
  { n:"04", heading:"The bottom-right quadrant may be the most consequential emerging territory", text:"DLF Camellias and Three Sixty West are constructing prestige through community concentration and peer-group curation rather than heritage or architectural pedigree. This mechanism is portable to new markets and replicable without a 300-year institutional foundation." },
  { n:"05", heading:"Wealth display and legacy permanence are structurally opposed", text:"r = −0.72 between D6 (Wealth Display Intensity) and D12 (Legacy Permanence Orientation) — the strongest negative correlation in the matrix. Every project that aspires to permanent institutional status suppresses conspicuous display." },
];
const pm_whitespaces = [
  { id:"WS — 01", heading:"Cultural capital + sovereign access",  body:"No project combines architectural irreplaceability (56 Leonard's D4=10) with admission architecture (220 CPS's D2=10). The building that owns both simultaneously does not yet exist." },
  { id:"WS — 02", heading:"India sovereign — self-owned prestige", body:"Every Indian project in the study scores D1 ≥ 6 (prestige borrowing). A project generating entirely self-owned prestige without imported hospitality brands or designer credentials — this territory is completely unoccupied in India." },
  { id:"WS — 03", heading:"Heritage depth + cohort curation",     body:"No project combines deep heritage narrative (D3 ≥ 8), curated resident cohort (D8 ≥ 8) and genuine service sovereignty (D5 ≥ 8) simultaneously. The most actionable white space for an India-specific future positioning." },
];

// ─── SVG MAP SUB-COMPONENT (defined OUTSIDE ResearchFoundation) ───────────────
function PositioningMapSVG({ isDark }) {
  const [tooltip, setTooltip] = useState(null);
  const gridColor     = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const axisColor     = isDark ? "rgba(212,175,55,0.28)" : "rgba(0,0,0,0.22)";
  const labelColor    = isDark ? "#aaa" : "#666";
  const dotLabelColor = "rgba(255,255,255,0.65)";
  const bgQ = {
    TR: isDark ? "rgba(184,151,42,0.06)"  : "rgba(184,151,42,0.04)",
    TL: isDark ? "rgba(95,94,90,0.08)"    : "rgba(95,94,90,0.04)",
    BR: isDark ? "rgba(15,110,86,0.08)"   : "rgba(15,110,86,0.04)",
    BL: isDark ? "rgba(153,60,29,0.08)"   : "rgba(153,60,29,0.04)",
  };
  const cx = pm_toSvgX(0), cy = pm_toSvgY(0);
  const arrowSize = 5;
  function arrowPts(x1,y1,x2,y2) {
    const d = Math.hypot(x2-x1,y2-y1), ux=(x2-x1)/d, uy=(y2-y1)/d;
    const lx=-uy*arrowSize/2, ly=ux*arrowSize/2;
    return `${x2},${y2} ${x2-ux*arrowSize+lx},${y2-uy*arrowSize+ly} ${x2-ux*arrowSize-lx},${y2-uy*arrowSize-ly}`;
  }
  const quadLabels = [
  {
    q:"TL",
    label:"CULTURAL-ARCHITECTURAL",
    subtitle:"Heritage • Architecture • Cultural Capital",
    x: pm_PAD.l + 20,
    y: pm_PAD.t + 30,
    anchor:"start"
  },

  {
    q:"TR",
    label:"SOVEREIGN INSTITUTIONAL",
    subtitle:"Exclusivity • Privacy • Institutional Legitimacy",
    x: pm_PAD.l + PM_CW - 20,
    y: pm_PAD.t + 30,
    anchor:"end"
  },

  {
    q:"BL",
    label:"RECORD / SPECTACLE",
    subtitle:"Superlatives • Display • Announced Prestige",
    x: pm_PAD.l + 20,
    y: pm_PAD.t + PM_CH - 40,
    anchor:"start"
  },

  {
    q:"BR",
    label:"COMMUNITY SOVEREIGN",
    subtitle:"Community • Lifestyle • Experiential Value",
    x: pm_PAD.l + PM_CW - 20,
    y: pm_PAD.t + PM_CH - 40,
    anchor:"end"
  }
];
  const ff = "var(--font-sans, system-ui, sans-serif)";
  return (
    <div style={{ position:"relative", width:"100%" }}>
      {tooltip && (
        <div style={{ position:"absolute", pointerEvents:"none", zIndex:10, left:tooltip.tx, top:tooltip.ty, background:"var(--color-background-primary,#fff)", border:"0.5px solid #B8972A", borderRadius:6, padding:"10px 13px", minWidth:180, maxWidth:220, boxShadow:"0 4px 20px rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:5 }}>{tooltip.name}</div>
          <div style={{ fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8, color:pm_quadrantColors[tooltip.q] }}>{pm_quadrantNames[tooltip.q]}</div>
          <div style={{ fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.5 }}>{tooltip.desc}</div>
        </div>
      )}
      <svg
  viewBox={`0 0 ${PM_W} ${PM_H}`}
  width="100%"
  style={{
    display:"block",
    overflow:"visible",
    background:"linear-gradient(180deg,#050505 0%,#0A0A0A 100%)",
    borderRadius:"20px",
    boxShadow:"inset 0 0 80px rgba(212,175,55,0.04)"
  }}
>
        <defs>

  <radialGradient id="goldGlow" cx="75%" cy="25%" r="120%">
    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.32"/>
    <stop offset="40%" stopColor="#B8972A" stopOpacity="0.20"/>
    <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
  </radialGradient>

  <radialGradient id="stoneGlow" cx="25%" cy="25%" r="120%">
    <stop offset="0%" stopColor="#8C8373" stopOpacity="0.30"/>
    <stop offset="40%" stopColor="#6D6558" stopOpacity="0.12"/>
    <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
  </radialGradient>

  <radialGradient id="redGlow" cx="25%" cy="75%" r="120%">
    <stop offset="0%" stopColor="#8E1C12" stopOpacity="0.25"/>
    <stop offset="40%" stopColor="#65140D" stopOpacity="0.16"/>
    <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
  </radialGradient>

  <radialGradient id="greenGlow" cx="75%" cy="75%" r="120%">
    <stop offset="0%" stopColor="#138466" stopOpacity="0.25"/>
    <stop offset="40%" stopColor="#0F6E56" stopOpacity="0.16"/>
    <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
  </radialGradient>

</defs>

        <rect x={pm_PAD.l} y={pm_PAD.t}  width={cx-pm_PAD.l}       height={cy-pm_PAD.t}       fill="url(#stoneGlow)"  opacity="1" />
        <rect x={cx}       y={pm_PAD.t}  width={pm_PAD.l+PM_CW-cx} height={cy-pm_PAD.t}       fill="url(#goldGlow)"   opacity="1" />
        <rect x={pm_PAD.l} y={cy}        width={cx-pm_PAD.l}       height={pm_PAD.t+PM_CH-cy} fill="url(#redGlow)"    opacity="1" />
        <rect x={cx}       y={cy}        width={pm_PAD.l+PM_CW-cx} height={pm_PAD.t+PM_CH-cy} fill="url(#greenGlow)"  opacity="1" />
         {[0,1,2,3,4,5,6].map(i => { const gx=pm_PAD.l+(i/6)*PM_CW; return <line key={`vg${i}`} x1={gx} y1={pm_PAD.t} x2={gx} y2={pm_PAD.t+PM_CH} stroke={gridColor} strokeWidth="0.5" />; })}
        {[0,1,2,3,4,5].map(i => { const gy=pm_PAD.t+(i/5)*PM_CH; return <line key={`hg${i}`} x1={pm_PAD.l} y1={gy} x2={pm_PAD.l+PM_CW} y2={gy} stroke={gridColor} strokeWidth="0.5" />; })}
        <line x1={pm_PAD.l} y1={cy} x2={pm_PAD.l+PM_CW} y2={cy} stroke={axisColor} strokeWidth="1.2" />
        <circle
  cx={cx}
  cy={cy}
  r="4"
  fill="#D4AF37"
  opacity="0.45"
/>
        <line x1={cx} y1={pm_PAD.t} x2={cx} y2={pm_PAD.t+PM_CH} stroke={axisColor} strokeWidth="1.2" />
        <polygon points={arrowPts(pm_PAD.l+PM_CW-10,cy,pm_PAD.l+PM_CW+2,cy)} fill={axisColor} />
        <polygon points={arrowPts(cx,pm_PAD.t+10,cx,pm_PAD.t-2)} fill={axisColor} />
        <text x={pm_PAD.l+4} y={cy-18} fontSize="13" fontWeight="300" fill={labelColor} fontFamily={ff} letterSpacing="0.06em">← Prestige you announce</text>
        <text x={cx+50}       y={cy-18} fontSize="13" fontWeight="300" fill={labelColor} fontFamily={ff} letterSpacing="0.06em">Prestige you have →</text>
        <g transform={`rotate(-90,${cx},${pm_PAD.t+PM_CH/2})`}>
          <text x={cx} y={pm_PAD.t+PM_CH/2-18}  textAnchor="middle" fontSize="13" fontWeight="300" fill={labelColor} fontFamily={ff} letterSpacing="0.06em">← Prestige you construct</text>
          <text x={cx} y={pm_PAD.t+PM_CH/2+32} textAnchor="middle" fontSize="13" fontWeight="300" fill={labelColor} fontFamily={ff} letterSpacing="0.06em">Prestige you inherit →</text>
        </g>
        {quadLabels.map((item) => (
  <g key={item.label}>
    <text
      x={item.x}
      y={item.y}
      textAnchor={item.anchor}
      fill="#CFAE4A"
      fontSize="14"
      fontWeight="600"
      opacity="0.75"
      letterSpacing="0.18em"
    >
      {item.label}
    </text>

    <text
      x={item.x}
      y={item.y + 24}
      textAnchor={item.anchor}
      fill="rgba(255,255,255,.75)"
      fontSize="11"
    >
      {item.subtitle}
    </text>
  </g>
))}
        {pm_projects.map(p => {
          const px=pm_toSvgX(p.rc1), py=pm_toSvgY(p.rc2);
          const color=pm_quadrantColors[p.q];
          const off=pm_labelOffsets[p.short]||[9,4];
          const anchor=off[0]<0?"end":"start";
          return (
            <g key={p.name} style={{ cursor:"pointer" }}
              onMouseEnter={(e) => {
                const svg=e.currentTarget.closest("svg"), rect=svg.getBoundingClientRect(), scale=rect.width/PM_W;
                let tx=px*scale+12; if(tx+220>rect.width) tx=px*scale-232;
                let ty=py*scale-40; if(ty<0) ty=10;
                setTooltip({ name:p.name, q:p.q, desc:p.desc, tx, ty });
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              <circle
  cx={px}
  cy={py}
  r="18"
  fill="rgba(212,175,55,.10)"
/>

<circle
  cx={px}
  cy={py}
  r="10"
  fill="rgba(212,175,55,.18)"
/>

<circle
  cx={px}
  cy={py}
  r="7"
  fill="#E4C05A"
/>

<circle
  cx={px}
  cy={py}
  r="26"
  fill="none"
  stroke="rgba(212,175,55,.18)"
  strokeWidth="1"
 />
              <circle cx={px} cy={py} r="5" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
              <text x={px+off[0]} y={py+off[1]} textAnchor={anchor} fontSize="10.5" fill={dotLabelColor} fontFamily={ff} fontWeight="500">{p.short}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ResearchFoundation() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDim, setSelectedDim] = useState("restraint");
  const [hoveredMapProject, setHoveredMapProject] = useState(null);
  const [expandedCluster, setExpandedCluster] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const tabs = [
    { id:"overview",    label:"14 Case Memos" },
    { id:"spectrum",    label:"Prestige Spectrum" },
    { id:"dimensions",  label:"Dimension Longlist" },
    { id:"matrix",      label:"Preliminary Scores" },
    { id:"clusters",    label:"Archetype Clusters" },
    { id:"pca",         label:"PCA Clusters" },
    { id:"positioning", label:"Positioning Map" },
  ];

  const sortedBySpectrum = [...projects].sort((a,b) => b.spectrumPos - a.spectrumPos);

  const tabStyle = (id) => {
    const active = activeTab === id;
    return {
      padding:"9px 20px", fontSize:12, letterSpacing:"0.08em", textTransform:"uppercase",
      fontWeight:active?600:400, fontFamily:"inherit", borderRadius:2,
      border:active?"1px solid #d4af37":"1px solid rgba(180,160,100,0.25)",
      background:active
        ?"linear-gradient(135deg,#d4af37 0%,#b8932a 100%)"
        :"linear-gradient(135deg,rgba(212,175,55,0.04) 0%,rgba(184,147,42,0.08) 100%)",
      color:active?"#1a1200":"#c8a84a", cursor:"pointer", transition:"all 0.2s ease",
      boxShadow:active?"0 2px 12px rgba(212,175,55,0.35)":"none", whiteSpace:"nowrap",
    };
  };

  const pmSectionLabel = { fontSize:10, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--color-text-tertiary)", fontWeight:500 };

  return (
    <div className="app-root" style={{ fontFamily:"var(--font-sans)", color:"var(--color-text-primary)", padding:"0 28px 2rem", maxWidth:1440, margin:"0 auto" }}>

      {/* HERO */}
      <div className="hero-banner" style={{ position:"relative", height:460, borderRadius:20, overflow:"hidden", marginBottom:16 }}>
        <img src="/images/hero-backdrop.png" alt="Hero" style={{ position:"absolute", width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.55)" }} />
        <div className="hero-brand" style={{ position:"absolute", top:35, left:30, display:"flex", alignItems:"center", gap:14 }}>
          <img src="/images/sg-icon.png" alt="SG" style={{ width:38, height:38, borderRadius:8 }} />
          <div style={{ textAlign:"left", lineHeight:1.15 }}>
            <div style={{ fontSize:16, fontWeight:600, color:"#ffffff" }}>Swapnil Goel</div>
            <div style={{ fontSize:12, letterSpacing:2, textTransform:"uppercase", color:"#d4af37", marginTop:4 }}>Research Project</div>
          </div>
        </div>
        <div className="hero-content" style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center", transform:"translateY(-10px)", padding:"0 80px", color:"white" }}>
          <div className="hero-crown" style={{ fontSize:34, color:"#d4af37", marginBottom:10 }}>♛</div>
          <div className="hero-eyebrow" style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
            <div className="hero-eyebrow-rule" style={{ width:70, height:1, background:"#d4af37" }} />
            <div className="hero-eyebrow-text" style={{ color:"#d4af37", fontSize:17, letterSpacing:3, textTransform:"uppercase" }}>14 Global Ultra Luxury Projects</div>
            <div className="hero-eyebrow-rule" style={{ width:70, height:1, background:"#d4af37" }} />
          </div>
          <h1 className="hero-title" style={{ fontSize:62, lineHeight:0.95, margin:0, maxWidth:1000, letterSpacing:-2, fontWeight:700 }}>Global Ultra Luxury Residential Research</h1>
          <p className="hero-subtitle" style={{ marginTop:20, fontSize:18, maxWidth:800, lineHeight:1.6, opacity:0.9 }}>
            A structured research framework decoding prestige, positioning, sovereignty and symbolic capital across fourteen landmark ultra luxury residential developments.
          </p>
          <div className="hero-stats" style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:45, marginTop:30, flexWrap:"wrap" }}>
            {[["14","Projects"],["4","Global Markets"],["50+","Prestige Dimensions"],["1","Research Framework"]].map(([n,l],i,arr) => (
              <div key={l} className="hero-stat-group" style={{ display:"flex", alignItems:"center", gap:45 }}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ fontSize:32, fontWeight:600 }}>{n}</div>
                  <div>{l}</div>
                </div>
                {i < arr.length-1 && <div className="hero-stat-divider" style={{ width:1, height:50, background:"rgba(255,255,255,0.15)" }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TAB BAR */}
      <div className="tab-bar" style={{ display:"flex", gap:6, marginBottom:12, flexWrap:"wrap", padding:"14px 16px", background:"linear-gradient(135deg,#0f0d08 0%,#1a1507 50%,#0f0d08 100%)", borderRadius:8, border:"1px solid rgba(212,175,55,0.2)", boxShadow:"0 4px 24px rgba(0,0,0,0.3)" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => { setActiveTab(t.id); setSelectedProject(null); }}
            style={tabStyle(t.id)}
            onMouseEnter={e => { if (activeTab!==t.id) { e.currentTarget.style.borderColor="rgba(212,175,55,0.6)"; e.currentTarget.style.color="#d4af37"; e.currentTarget.style.background="linear-gradient(135deg,rgba(212,175,55,0.1) 0%,rgba(184,147,42,0.15) 100%)"; }}}
            onMouseLeave={e => { if (activeTab!==t.id) { e.currentTarget.style.borderColor="rgba(180,160,100,0.25)"; e.currentTarget.style.color="#c8a84a"; e.currentTarget.style.background="linear-gradient(135deg,rgba(212,175,55,0.04) 0%,rgba(184,147,42,0.08) 100%)"; }}}
          >{t.label}</button>
        ))}
      </div>

      {/* ── CASE MEMOS ── */}
      {activeTab === "overview" && !selectedProject && (
        <div>
          <div style={{ textAlign:"center", marginBottom:14, marginTop:2 }}>
            <span style={{ fontSize:15, color:"var(--color-text-secondary)", letterSpacing:0.3 }}>✦ Select any project to access its complete analytical memo.</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:16, marginTop:6 }}>
            {sortedBySpectrum.map(p => (
              <div key={p.id} onClick={() => setSelectedProject(p)}
                style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", boxShadow:"0 6px 20px rgba(0,0,0,0.08)", transition:"all 0.25s ease", cursor:"pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="var(--color-border-secondary)"; e.currentTarget.style.transform="translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--color-border-tertiary)"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                <div style={{ height:170, borderRadius:12, overflow:"hidden" }}>
                  <img src={projectImages[p.name]} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                </div>
                <div style={{ padding:"10px 10px 12px 10px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                    <span style={{ fontSize:12, color:"var(--color-text-secondary)" }}>{p.flag} {p.city}</span>
                    <span style={{ fontSize:11, padding:"2px 7px", borderRadius:"var(--border-radius-md)", background:`hsl(${p.spectrumPos*2.2},60%,90%)`, color:`hsl(${p.spectrumPos*2.2},60%,30%)` }}>{p.spectrumPos}</span>
                  </div>
                  <div style={{ fontWeight:600, fontSize:16, lineHeight:1.35, marginBottom:6 }}>{p.name}</div>
                  <div style={{ fontSize:11, color:"var(--color-text-secondary)", lineHeight:1.4 }}>{p.archetype}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── PROJECT DETAIL ── */}
      {activeTab === "overview" && selectedProject && (
        <div>
          <button onClick={() => setSelectedProject(null)} style={{ fontSize:13, color:"var(--color-text-secondary)", background:"none", border:"none", cursor:"pointer", marginBottom:16, padding:0 }}>← Back to all projects</button>
          <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", padding:"20px 24px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
              <div>
                <div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:4 }}>{selectedProject.flag} {selectedProject.city} · {selectedProject.developer}</div>
                <h3 style={{ margin:0, fontSize:20, fontWeight:600 }}>{selectedProject.name}</h3>
                <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginTop:4 }}>{selectedProject.architect}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:11, color:"var(--color-text-secondary)" }}>Spectrum position</div>
                <div style={{ fontSize:24, fontWeight:600 }}>{selectedProject.spectrumPos}</div>
              </div>
            </div>
            <div className="responsive-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, marginBottom:12 }}>
              {[["Units",selectedProject.units],["Price Range",selectedProject.priceRange],["Archetype",selectedProject.archetype]].map(([k,v]) => (
                <div key={k} style={{ background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", padding:"10px 12px" }}>
                  <div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:3 }}>{k}</div>
                  <div style={{ fontSize:13, fontWeight:600 }}>{v}</div>
                </div>
              ))}
            </div>
            {[["Core Prestige Claim",selectedProject.corePrestigeClaim],["Commercial Result",selectedProject.commercialResult]].map(([label,val]) => (
              <div key={label} style={{ marginBottom:16 }}>
                <div style={{ fontSize:13, color:"var(--color-text-secondary)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:6 }}>{label}</div>
                <p style={{ margin:0, fontSize:14, lineHeight:1.65 }}>{val}</p>
              </div>
            ))}
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, color:"var(--color-text-secondary)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Prestige Transmission System</div>
              <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>Primary Channels</div>
              {selectedProject.communicationSystem.primaryChannels.map((c,i) => (
                <div key={i} style={{ fontSize:13, lineHeight:1.6, paddingLeft:12, borderLeft:"2px solid var(--color-border-secondary)", marginBottom:4 }}>{c}</div>
              ))}
              {selectedProject.communicationSystem.notableAbsences.length > 0 && (
                <>
                  <div style={{ fontSize:13, fontWeight:600, marginTop:10, marginBottom:4 }}>Notable Absences</div>
                  {selectedProject.communicationSystem.notableAbsences.map((c,i) => (
                    <div key={i} style={{ fontSize:13, lineHeight:1.6, paddingLeft:12, borderLeft:"2px solid var(--color-border-danger)", marginBottom:4 }}>{c}</div>
                  ))}
                </>
              )}
            </div>
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, color:"var(--color-text-secondary)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Key Tensions / Oppositions</div>
              {selectedProject.keyTensions.map((t,i) => (
                <div key={i} style={{ fontSize:13, lineHeight:1.6, padding:"6px 10px", background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", marginBottom:6 }}>{t}</div>
              ))}
            </div>
            <div style={{ marginBottom:16 }}>
              <div style={{ fontSize:13, color:"var(--color-text-secondary)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Structural Contradictions</div>
              {selectedProject.contradictions.map((c,i) => (
                <div key={i} style={{ fontSize:13, lineHeight:1.6, padding:"6px 10px", background:"var(--color-background-warning)", borderRadius:"var(--border-radius-md)", marginBottom:6, color:"var(--color-text-warning)" }}>{c}</div>
              ))}
            </div>
            <div className="responsive-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
              {[["BUYER PSYCHOLOGY",selectedProject.buyerPsychology],["FRAGILITY ASSESSMENT",selectedProject.fragility]].map(([label,val]) => (
                <div key={label} style={{ border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-md)", padding:"12px 14px" }}>
                  <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:6 }}>{label}</div>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.6 }}>{val}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop:"0.5px solid var(--color-border-tertiary)", paddingTop:16 }}>
              <div style={{ fontSize:13, color:"var(--color-text-secondary)", textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8 }}>Portrait</div>
              <p style={{ margin:0, fontSize:14, lineHeight:1.7, fontStyle:"italic", color:"var(--color-text-secondary)" }}>{selectedProject.portrait}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── SPECTRUM ── */}
      {activeTab === "spectrum" && (
        <div>
          <p style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:12, lineHeight:1.6 }}>Preliminary positioning based on qualitative analysis. Score = degree of sovereign vs. aspirational prestige construction. Not a final ranking — a working hypothesis.</p>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"var(--color-text-secondary)", marginBottom:8 }}>
            <span>Aspirational Ultra Luxury</span><span>Sovereign Ultra Luxury</span>
          </div>
          <div style={{ position:"relative", height:8, background:"var(--color-background-secondary)", borderRadius:4, marginBottom:24 }}>
            <div style={{ position:"absolute", left:0, top:0, height:"100%", width:"100%", background:"linear-gradient(to right, var(--color-background-secondary), var(--color-background-primary))", borderRadius:4 }} />
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {sortedBySpectrum.map(p => (
              <div key={p.id} onClick={() => { setSelectedProject(p); setActiveTab("overview"); }}
                className="spectrum-row"
                style={{ display:"flex", alignItems:"center", gap:12, cursor:"pointer", padding:"8px 10px", borderRadius:"var(--border-radius-md)", transition:"background 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.background="var(--color-background-secondary)"}
                onMouseLeave={e => e.currentTarget.style.background="transparent"}
              >
                <div style={{ width:32, fontSize:13, fontWeight:600, textAlign:"right", flexShrink:0 }}>{p.spectrumPos}</div>
                <div className="spectrum-bar-track" style={{ flex:1, height:28, background:"var(--color-background-secondary)", borderRadius:4, overflow:"hidden" }}>
                  <div style={{ height:"100%", width:`${p.spectrumPos}%`, background:`hsl(${p.spectrumPos*2.2},55%,55%)`, borderRadius:4, display:"flex", alignItems:"center", paddingLeft:8 }}>
                    <span style={{ fontSize:13, color:"white", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", fontWeight:600 }}>{p.name}</span>
                  </div>
                </div>
                <div className="spectrum-archetype" style={{ fontSize:11, color:"var(--color-text-secondary)", minWidth:140, textAlign:"right" }}>{p.archetype}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── DIMENSIONS ── */}
      {activeTab === "dimensions" && (
        <div>
          <p style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:16, lineHeight:1.6 }}>Candidate dimensions derived from the 14 case analyses. Color coded by survival recommendation. This is the longlist before reduction.</p>
          <div style={{ display:"flex", gap:10, marginBottom:16, flexWrap:"wrap" }}>
            {[["KEEP","var(--color-background-success)","var(--color-text-success)"],["TEST","var(--color-background-warning)","var(--color-text-warning)"],["REDUCE","var(--color-background-info)","var(--color-text-info)"],["ELIMINATE","var(--color-background-danger)","var(--color-text-danger)"]].map(([label,bg,color]) => (
              <span key={label} style={{ fontSize:11, padding:"3px 10px", borderRadius:"var(--border-radius-md)", background:bg, color }}>{label}</span>
            ))}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {candidateDimensions.map(d => {
              const cm = { KEEP:["var(--color-background-success)","var(--color-text-success)"], TEST:["var(--color-background-warning)","var(--color-text-warning)"], REDUCE:["var(--color-background-info)","var(--color-text-info)"], ELIMINATE:["var(--color-background-danger)","var(--color-text-danger)"] };
              const [bg,color] = cm[d.survivalVerdict] || cm.TEST;
              return (
                <div key={d.id} style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", padding:"14px 16px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                    <div>
                      <span style={{ fontSize:11, padding:"2px 8px", borderRadius:"var(--border-radius-md)", background:"var(--color-background-secondary)", color:"var(--color-text-secondary)", marginRight:8 }}>{d.category}</span>
                      <span style={{ fontWeight:600, fontSize:14 }}>{d.name}</span>
                    </div>
                    <span style={{ fontSize:11, padding:"3px 10px", borderRadius:"var(--border-radius-md)", background:bg, color, flexShrink:0, marginLeft:12 }}>{d.survivalVerdict}</span>
                  </div>
                  <p style={{ margin:"0 0 8px", fontSize:13, lineHeight:1.65 }}>{d.description}</p>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:6 }}>
                    {[["Variance",d.variance],["Redundancy Risk",d.redundancyRisk],["Operationalizable",d.operationalizable]].map(([k,v]) => (
                      <span key={k} style={{ fontSize:11, color:"var(--color-text-secondary)" }}>{k}: <span style={{ color:"var(--color-text-primary)" }}>{v}</span></span>
                    ))}
                  </div>
                  <p style={{ margin:0, fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.6, borderLeft:"2px solid var(--color-border-secondary)", paddingLeft:8 }}>Evidence: {d.evidence}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── MATRIX ── */}
      {activeTab === "matrix" && (
        <div>
          <p style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:12 }}>Preliminary dimension scores (1–10). Select a dimension to compare all 14 projects.</p>
          <div style={{ marginBottom:16 }}>
            <select value={selectedDim} onChange={e => setSelectedDim(e.target.value)}>
              {dimensions.map(d => <option key={d.id} value={d.id}>{d.pole1} ↔ {d.pole2}</option>)}
            </select>
          </div>
          {(() => {
            const dim = dimensions.find(d => d.id === selectedDim);
            const sorted = [...projects].sort((a,b) => b.dimensionScores[selectedDim] - a.dimensionScores[selectedDim]);
            return (
              <div>
                <div style={{ background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", padding:"10px 14px", marginBottom:16 }}>
                  <div style={{ fontWeight:600, fontSize:14, marginBottom:4 }}>{dim.pole1} ↔ {dim.pole2}</div>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.6, color:"var(--color-text-secondary)" }}>{dim.description}</p>
                </div>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"var(--color-text-secondary)", marginBottom:6 }}>
                  <span>1 = {dim.pole2}</span><span>10 = {dim.pole1}</span>
                </div>
                {sorted.map(p => {
                  const score = p.dimensionScores[selectedDim];
                  return (
                    <div key={p.id} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:7 }}>
                      <div style={{ width:160, fontSize:13, lineHeight:1.3, flexShrink:0 }}>
                        <div style={{ fontWeight:600 }}>{p.name.length > 22 ? p.name.substring(0,20)+"…" : p.name}</div>
                        <div style={{ color:"var(--color-text-secondary)", fontSize:11 }}>{p.flag} {p.city}</div>
                      </div>
                      <div style={{ flex:1, height:22, background:"var(--color-background-secondary)", borderRadius:4 }}>
                        <div style={{ height:"100%", width:`${score*10}%`, background:`hsl(${score*22},60%,50%)`, borderRadius:4 }} />
                      </div>
                      <div style={{ width:20, fontSize:13, fontWeight:600, textAlign:"right" }}>{score}</div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
          <div style={{ marginTop:24, borderTop:"0.5px solid var(--color-border-tertiary)", paddingTop:16 }}>
            <div style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:12 }}>All dimensions — variance check (high variance = analytically useful)</div>
            {dimensions.map(dim => {
              const scores = projects.map(p => p.dimensionScores[dim.id]);
              const mean = scores.reduce((a,b) => a+b,0)/scores.length;
              const variance = Math.round(scores.reduce((a,b) => a+Math.pow(b-mean,2),0)/scores.length*10)/10;
              return (
                <div key={dim.id} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:6 }}>
                  <div style={{ width:160, fontSize:13 }}>{dim.pole1}</div>
                  <div style={{ flex:1, height:14, background:"var(--color-background-secondary)", borderRadius:3 }}>
                    <div style={{ height:"100%", width:`${variance*10}%`, background:variance>8?"var(--color-background-success)":variance>5?"var(--color-background-warning)":"var(--color-background-danger)", borderRadius:3 }} />
                  </div>
                  <div style={{ width:60, fontSize:13, color:"var(--color-text-secondary)" }}>σ² = {variance}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── ARCHETYPE CLUSTERS ── */}
      {activeTab === "clusters" && (
        <div>
          <p style={{ fontSize:13, color:"var(--color-text-secondary)", marginBottom:16, lineHeight:1.6 }}>Preliminary archetype clusters based on qualitative analysis. These hypotheses require MDS/clustering validation. A project may belong to multiple clusters.</p>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {[
              { name:"Sovereign Cluster", projects:[1,3,4], theme:"Prestige through structural inaccessibility. No public pricing. Invitation-only or no information at all. Prestige intrinsic to building/brand, not licensed." },
              { name:"Cultural Capital Cluster", projects:[2,5,7], theme:"Architecture and cultural pedigree as primary prestige carriers. Buyers addressed through cultural fluency. Connoisseur-sovereign or civic-cultural buyer." },
              { name:"Hospitality-Mediated Cluster", projects:[3,8,10], theme:"A hotel brand does the prestige work that architecture alone cannot. Service identity is primary. Prestige potentially fragile if license terminates. Note: Aman NY occupies a uniquely sovereign position within this cluster." },
              { name:"Record / Spectacle Cluster", projects:[11,12,13], theme:"Prestige through superlatives, height records, and broadcast visibility. Financial capital > cultural capital. Buyer psychology oriented toward visibility as validation." },
              { name:"India-Specific Cluster", projects:[9,10], theme:"Prestige adapted to Indian UHNW buyer psychology. Community prestige (Camellias: peer cohort concentration) or brand-mediated aspirational (Three Sixty West: Ritz-Carlton as global credential)." },
              { name:"Brand Transference Cluster", projects:[13,14], theme:"Name-rental as the primary prestige mechanism. No substantive institutional grounding. Market: aspirational investor-buyers for whom the signal is sufficient without substance." }
            ].map(cluster => {
              const clusterProjects = projects.filter(p => cluster.projects.includes(p.id));
              return (
                <div key={cluster.name} style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", padding:"14px 16px" }}>
                  <div style={{ fontWeight:600, fontSize:15, marginBottom:6 }}>{cluster.name}</div>
                  <p style={{ margin:"0 0 12px", fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.65 }}>{cluster.theme}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {clusterProjects.map(p => (
                      <div key={p.id} onClick={() => { setSelectedProject(p); setActiveTab("overview"); }}
                        style={{ fontSize:13, padding:"5px 10px", borderRadius:"var(--border-radius-md)", background:"var(--color-background-secondary)", cursor:"pointer", border:"0.5px solid var(--color-border-tertiary)" }}>
                        {p.flag} {p.name.split(" ").slice(0,3).join(" ")}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop:24, borderTop:"0.5px solid var(--color-border-tertiary)", paddingTop:20 }}>
            <div style={{ fontSize:14, fontWeight:600, marginBottom:12 }}>Key analytical oppositions emerging from dataset</div>
            {[
              ["220 CPS vs Burj Binghatti","The two poles of the spectrum. Maximum restraint / institutional admission vs. maximum spectacle / open broadcast."],
              ["One Hyde Park vs Neo Bankside","Same architect, same city, same era. Sovereign invisibility vs. civic cultural transparency."],
              ["111 W57 vs Central Park Tower","Both claim architectural record prestige. Cultural depth vs. height. Seven-year sales struggle vs. systematic discounts."],
              ["Aman NY vs Waldorf Astoria Miami","Both hospitality-branded. 22 units sold out silently vs. 360 units with managed celebrity press releases."],
              ["DLF Camellias vs Three Sixty West","Both Indian luxury. Indigenous prestige grammar vs. imported grammar."],
              ["Trump Tower's bifurcation","49% price decline in NYC; six new projects in India. The same name means entirely different things to different audiences."]
            ].map(([title,text]) => (
              <div key={title} style={{ marginBottom:12, paddingLeft:12, borderLeft:"2px solid var(--color-border-secondary)" }}>
                <div style={{ fontWeight:600, fontSize:13, marginBottom:3 }}>{title}</div>
                <p style={{ margin:0, fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── PCA CLUSTERS ── */}
      {activeTab === "pca" && (
        <div>
          <div style={{ marginBottom:40 }}>
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:6 }}>
              <div style={{ width:3, height:32, background:"linear-gradient(180deg,#d4af37,#b8932a)", borderRadius:2, flexShrink:0 }} />
              <div>
                <div style={{ fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"#d4af37", marginBottom:2 }}>Derived from analysis of 14 global projects · 2025</div>
                <div style={{ fontSize:18, fontWeight:600 }}>The 12 Absolute Variables of Ultra Luxury</div>
              </div>
            </div>
            <p style={{ fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.7, marginBottom:24, paddingLeft:19 }}>
              A building reaches true sovereign ultra luxury when it scores consistently across all 12. Only two projects achieve this: <strong style={{ color:"var(--color-text-primary)" }}>220 Central Park South</strong> and <strong style={{ color:"var(--color-text-primary)" }}>One Hyde Park</strong> — through opposite philosophies. Every other project fails at least two variables in a way that is structurally irreparable.
            </p>
            {variableCategories.map(cat => (
              <div key={cat.id} style={{ marginBottom:28 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                  <div style={{ height:1, flex:1, background:`linear-gradient(to right, ${cat.color}55, transparent)` }} />
                  <span style={{ fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase", color:cat.color, fontWeight:600, whiteSpace:"nowrap" }}>{cat.label}</span>
                  <div style={{ height:1, flex:1, background:`linear-gradient(to left, ${cat.color}55, transparent)` }} />
                </div>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:12 }}>
                  {cat.variables.map(v => (
                    <div key={v.id} style={{ background:"var(--color-background-primary)", border:`1px solid ${cat.color}28`, borderTop:`2px solid ${cat.color}`, borderRadius:"var(--border-radius-lg)", padding:"14px 16px", position:"relative" }}>
                      <div style={{ position:"absolute", top:12, right:14, fontSize:11, fontWeight:700, color:cat.color, opacity:0.5, letterSpacing:"0.05em" }}>{v.number}</div>
                      <div style={{ marginBottom:8, paddingRight:28 }}>
                        <div style={{ fontWeight:600, fontSize:14, lineHeight:1.3, marginBottom:5 }}>{v.name}</div>
                        <span style={{ fontSize:10, padding:"2px 8px", borderRadius:3, background:`${cat.color}18`, color:cat.color, border:`0.5px solid ${cat.color}44`, letterSpacing:"0.05em", textTransform:"uppercase" }}>{v.type}</span>
                      </div>
                      <p style={{ margin:"0 0 10px", fontSize:12, lineHeight:1.65, color:"var(--color-text-primary)" }}>{v.definition}</p>
                      <div style={{ padding:"8px 10px", background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", borderLeft:`2px solid ${cat.color}66`, marginBottom:8 }}>
                        <div style={{ fontSize:10, color:"var(--color-text-secondary)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>From the dataset</div>
                        <p style={{ margin:0, fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.6 }}>{v.examples}</p>
                      </div>
                      <div style={{ fontSize:11, color:cat.color, opacity:0.75, fontStyle:"italic" }}>{v.typeNote}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ padding:"16px 20px", background:"linear-gradient(135deg,rgba(212,175,55,0.06) 0%,rgba(184,147,42,0.03) 100%)", border:"1px solid rgba(212,175,55,0.3)", borderRadius:"var(--border-radius-lg)", marginTop:4 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                <div style={{ fontSize:18, color:"#d4af37" }}>♛</div>
                <div style={{ fontWeight:600, fontSize:14, color:"#d4af37" }}>The Sovereign Test</div>
              </div>
              <p style={{ margin:0, fontSize:13, lineHeight:1.7, color:"var(--color-text-secondary)" }}>
                A building reaches true sovereign ultra luxury when it scores consistently across all 12 variables. The analysis shows only two projects achieve this: <strong style={{ color:"#d4af37" }}>220 Central Park South</strong> and <strong style={{ color:"#d4af37" }}>One Hyde Park</strong> — and they achieve it through opposite philosophies. 220 CPS through institutional social architecture. One Hyde Park through structural financial opacity. Every other project fails at least two variables in a way that is <em>structurally irreparable</em>.
              </p>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:28 }}>
            <div style={{ flex:1, height:1, background:"var(--color-border-secondary)" }} />
            <span style={{ fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--color-text-secondary)", whiteSpace:"nowrap" }}>PCA Cluster Analysis</span>
            <div style={{ flex:1, height:1, background:"var(--color-border-secondary)" }} />
          </div>
          <div style={{ marginBottom:20 }}>
            <p style={{ fontSize:13, color:"var(--color-text-secondary)", lineHeight:1.8, margin:0 }}>
              Principal Component Analysis reduced 11 scored prestige dimensions across 14 global ultra luxury projects into three latent prestige engines explaining <strong style={{ color:"var(--color-text-primary)" }}>84.7% of total variance</strong>. The analysis reveals that ultra luxury residential markets do not organise around wealth itself, but around distinct systems of prestige production. Hierarchical clustering on the factor scores identified four recurring prestige archetypes that structure the contemporary global ultra luxury landscape.
            </p>
            <div style={{ marginTop:10, padding:"10px 14px", background:"var(--color-background-warning)", borderRadius:"var(--border-radius-md)", fontSize:12, color:"var(--color-text-warning)" }}>
              ⚠ Research note: The analysis is exploratory rather than predictive. With N=14 landmark projects, the objective is not statistical generalisation but identification of recurring prestige logics. The resulting clusters should be interpreted as strategic archetypes rather than fixed market categories.
            </div>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:20 }}>
            {pcaClusters.map(c => (
              <div key={c.id} onClick={() => setExpandedCluster(expandedCluster===c.id ? null : c.id)}
                style={{ display:"flex", alignItems:"center", gap:6, padding:"5px 12px", borderRadius:4, border:`1px solid ${c.color}44`, background:`${c.color}11`, cursor:"pointer" }}>
                <div style={{ width:10, height:10, borderRadius:"50%", background:c.color, flexShrink:0 }} />
                <span style={{ fontSize:12, color:c.color, fontWeight:500 }}>Cluster {c.romanNumeral}: {c.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {pcaClusters.map(c => (
              <div key={c.id} style={{ background:"var(--color-background-primary)", border:`1px solid ${expandedCluster===c.id ? c.color : "var(--color-border-tertiary)"}`, borderRadius:"var(--border-radius-lg)", overflow:"hidden", transition:"border-color 0.2s" }}>
                <div onClick={() => setExpandedCluster(expandedCluster===c.id ? null : c.id)} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 18px", cursor:"pointer" }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:`${c.color}22`, border:`1.5px solid ${c.color}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontSize:14, fontWeight:700, color:c.color }}>{c.romanNumeral}</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:600, fontSize:15, marginBottom:4 }}>Cluster {c.romanNumeral}: {c.label}</div>
                    <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                      {c.members.map(m => {
                        const proj = projects.find(p => p.name===m);
                        return (
                          <span key={m} style={{ fontSize:11, padding:"2px 8px", borderRadius:3, background:`${c.color}18`, color:c.color, border:`0.5px solid ${c.color}40` }}>
                            {proj?.flag} {m.split(" ").slice(0,3).join(" ")}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div style={{ fontSize:18, color:"var(--color-text-secondary)", flexShrink:0 }}>{expandedCluster===c.id ? "−" : "+"}</div>
                </div>
                {expandedCluster===c.id && (
                  <div style={{ padding:"0 18px 18px", borderTop:`1px solid ${c.color}22` }}>
                    <p style={{ fontSize:13, lineHeight:1.7, margin:"14px 0 12px" }}>{c.description}</p>
                    <div className="responsive-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12 }}>
                      <div style={{ background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", padding:"10px 12px" }}>
                        <div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:5, textTransform:"uppercase", letterSpacing:"0.05em" }}>Shared Mechanism</div>
                        <p style={{ margin:0, fontSize:13, lineHeight:1.6 }}>{c.sharedMechanism}</p>
                      </div>
                      <div style={{ background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", padding:"10px 12px" }}>
                        <div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:5, textTransform:"uppercase", letterSpacing:"0.05em" }}>Key Dimensions</div>
                        {c.keyDimensions.map((kd,i) => <div key={i} style={{ fontSize:12, lineHeight:1.6 }}>· {kd}</div>)}
                      </div>
                    </div>
                    <div style={{ marginBottom:10, padding:"10px 12px", border:"0.5px solid var(--color-border-secondary)", borderRadius:"var(--border-radius-md)" }}>
                      <div style={{ fontSize:11, color:"var(--color-text-secondary)", marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>Internal Variation</div>
                      <p style={{ margin:0, fontSize:13, lineHeight:1.6 }}>{c.internalVariation}</p>
                    </div>
                    <div style={{ padding:"10px 12px", background:`${c.color}0d`, border:`1px solid ${c.color}33`, borderRadius:"var(--border-radius-md)" }}>
                      <div style={{ fontSize:11, color:c.color, marginBottom:4, textTransform:"uppercase", letterSpacing:"0.05em" }}>Indian Market Relevance</div>
                      <p style={{ margin:0, fontSize:13, lineHeight:1.6 }}>{c.indianRelevance}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop:24, padding:"14px 16px", background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-lg)", borderLeft:"3px solid var(--color-border-info)" }}>
            <div style={{ fontWeight:600, fontSize:13, marginBottom:6 }}>On the two principal components</div>
            <p style={{ margin:"0 0 6px", fontSize:13, lineHeight:1.65, color:"var(--color-text-secondary)" }}>
              <strong style={{ color:"var(--color-text-primary)" }}>PC1 — The Sovereignty Axis (42% variance):</strong> Loads on Restraint, Institutional Self-Presentation, Private Prestige, Architecture-Led identity, and Cultural Capital. High scores = sovereign; low scores = commercial/spectacular.
            </p>
            <p style={{ margin:0, fontSize:13, lineHeight:1.65, color:"var(--color-text-secondary)" }}>
              <strong style={{ color:"var(--color-text-primary)" }}>PC2 — The Legitimacy Source Axis (28% variance):</strong> Loads on Heritage vs. Futurity, Rootedness vs. Nomadic, Cultural vs. Financial Capital. High scores = historically grounded; low scores = record-chasing, globally mobile capital.
            </p>
          </div>
        </div>
      )}

      {/* ── POSITIONING MAP (new SVG version) ── */}
      {activeTab === "positioning" && (
        <div style={{ padding:"2rem 0 3rem" }}>

          <div style={pmSectionLabel}>Prestige Positioning Analysis — 14 Global Projects</div>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", margin:"10px 0 6px" }}>
            <div>
              <div style={{ fontSize:22, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.2 }}>Global ultra luxury residential</div>
              <div style={{ fontSize:22, fontWeight:500, color:"var(--color-text-primary)", lineHeight:1.2 }}>positioning map</div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:12, color:"var(--color-text-tertiary)" }}>Derived from PCA &amp; factor analysis</div>
              <div style={{ fontSize:12, color:"var(--color-text-tertiary)" }}>n = 14 projects · 12 prestige dimensions</div>
            </div>
          </div>
          <div style={{ height:"0.5px", background:"var(--color-border-tertiary)", margin:"0 0 24px" }} />

          <div className="responsive-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,minmax(0,1fr))", gap:10, marginBottom:28 }}>
            {[
              { label:"Projects mapped",          val:"14", gold:false },
              { label:"Prestige dimensions",       val:"12", gold:false },
              { label:"Prestige territories",      val:"4",  gold:false },
              { label:"White-space opportunities", val:"3",  gold:true  },
            ].map(({ label, val, gold }) => (
              <div key={label} style={{ background:"var(--color-background-secondary)", borderRadius:8, padding:"14px 16px" }}>
                <div style={{ fontSize:11, color:"var(--color-text-tertiary)", marginBottom:4 }}>{label}</div>
                <div style={{ fontSize:24, fontWeight:500, color:gold ? "#B8972A" : "var(--color-text-primary)" }}>{val}</div>
              </div>
            ))}
          </div>

         <div
  style={{
    background:
      "linear-gradient(145deg,#050505 0%,#111111 100%)",
    border: "1px solid rgba(184,151,42,0.45)",
    borderRadius: "24px",
    padding: "28px",
    marginBottom: "40px",
    boxShadow:
      "0 20px 60px rgba(0,0,0,.45), inset 0 0 0 1px rgba(184,151,42,.08)",
    position: "relative",
    overflow: "hidden"
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(135deg,rgba(184,151,42,.03),transparent 35%,transparent 65%,rgba(184,151,42,.03))",
      pointerEvents: "none"
    }}
  />
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px"
  }}
>
  <div>
    <div
      style={{
        fontSize: "11px",
        letterSpacing: "0.25em",
        color: "#B8972A",
        textTransform: "uppercase",
        marginBottom: "8px"
      }}
    >
      Prestige Positioning Analysis
    </div>

    <h2
      style={{
        margin: 0,
        fontSize: "34px",
        fontWeight: 300,
        color: "#F4E7C1",
        lineHeight: 1.15
      }}
    >
      Global Ultra Luxury Prestige Landscape
    </h2>
  </div>

  <div
    style={{
      textAlign: "right",
      fontSize: "12px",
      color: "#888"
    }}
  >
    Derived from PCA & Factor Analysis
    <br />
    n = 14 projects · 12 dimensions
  </div>
</div>
  <div className="svg-scroll-wrapper">
    <div className="svg-scroll-inner">
      <PositioningMapSVG isDark={isDark} />
    </div>
  </div>
</div>

          <div style={{ height:"0.5px", background:"var(--color-border-tertiary)", margin:"8px 0 10px" }} />
          <div
  style={{
    ...pmSectionLabel,
    marginBottom:20,
    textAlign:"center",
    fontSize:"13px",
    letterSpacing:"0.22em",
    color:"#D4AF37"
  }}
>
  QUADRANT DEFINITIONS
</div>
          <div className="responsive-grid"
style={{
  display:"grid",
  gridTemplateColumns:"repeat(2,minmax(0,1fr))",
  gap:18,
  margin:"0 auto 20px",
  maxWidth:"1400px",
  width:"96%"
}}>
            {pm_quadrantDefs.map(({ q, pos, subtitle, heading, body, borderColor }) => {
              const [bg, tc, bc] = pm_qTagColors[q];
              const projectsInQ = pm_projects.filter(p => p.q === q);
              return (
                <div key={q} style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderLeft:`2px solid ${borderColor}`, borderRadius:8, padding:"16px 18px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                    <span style={{ display:"inline-block", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 9px", borderRadius:2, fontWeight:500, border:`0.5px solid ${bc}`, background:bg, color:tc }}>{pos}</span>
                    <span style={{ fontSize:11, color:"var(--color-text-tertiary)" }}>{subtitle}</span>
                  </div>
                  <div style={{ fontSize:14, fontWeight:500, color:"var(--color-text-primary)", marginBottom:6 }}>{heading}</div>
                  <div style={{ fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.6, marginBottom:10 }}>{body}</div>
                  <div style={{ fontSize:11, color:"var(--color-text-tertiary)", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:6 }}>Projects</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                    {projectsInQ.map(p => (
                      <span key={p.short} style={{ display:"inline-block", fontSize:10, padding:"3px 8px", borderRadius:2, border:`0.5px solid ${bc}`, background:bg, color:tc, letterSpacing:"0.06em", fontWeight:500 }}>{p.short}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ height:"0.5px", background:"var(--color-border-tertiary)", marginBottom:20 }} />
          <div style={{ ...pmSectionLabel, marginBottom:14 }}>Strategic insights</div>
          <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:8, padding:"4px 18px", marginBottom:28 }}>
            {pm_insights.map(({ n, heading, text }, i) => (
              <div key={n} style={{ display:"flex", gap:10, padding:"11px 0", borderBottom:i < pm_insights.length-1 ? "0.5px solid var(--color-border-tertiary)" : "none", alignItems:"flex-start" }}>
                <div style={{ minWidth:22, fontSize:13, color:"#B8972A", fontWeight:500, paddingTop:1 }}>{n}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:3 }}>{heading}</div>
                  <div style={{ fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.6 }}>{text}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height:"0.5px", background:"var(--color-border-tertiary)", marginBottom:20 }} />
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
            <div style={pmSectionLabel}>White-space opportunities</div>
            <span style={{ display:"inline-block", fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 9px", borderRadius:2, fontWeight:500, border:"0.5px solid #B8972A", color:"#7A6010", background:"#FAF5E4" }}>Unoccupied prestige territories</span>
          </div>
          <div className="responsive-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,minmax(0,1fr))", gap:10, marginBottom:28 }}>
            {pm_whitespaces.map(({ id, heading, body }) => (
              <div key={id} style={{ background:"var(--color-background-secondary)", borderRadius:8, padding:"14px 16px" }}>
                <div style={{ fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", color:"#B8972A", marginBottom:8, fontWeight:500 }}>{id}</div>
                <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text-primary)", marginBottom:6 }}>{heading}</div>
                <div style={{ fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.55 }}>{body}</div>
              </div>
            ))}
          </div>

          <div style={{ height:"0.5px", background:"var(--color-border-tertiary)", marginBottom:20 }} />
          <div style={{ ...pmSectionLabel, marginBottom:14 }}>Analytical notes</div>
          <div className="responsive-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:10 }}>
            <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:8, padding:"14px 16px" }}>
              <div style={{ fontSize:12, fontWeight:500, color:"var(--color-text-primary)", marginBottom:6 }}>Dimensions for PCA reduction</div>
              <div style={{ fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.6 }}>D2 and D9 are near-collinear (r = 0.95) and should be merged into a single Exclusion Architecture dimension. D4 and D7 are similarly collinear (r = 0.92). After consolidation, 8–9 clean dimensions remain for formal PCA.</div>
            </div>
            <div style={{ background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:8, padding:"14px 16px" }}>
              <div style={{ fontSize:12, fontWeight:500, color:"var(--color-text-primary)", marginBottom:6 }}>Dimension to add</div>
              <div style={{ fontSize:12, color:"var(--color-text-secondary)", lineHeight:1.6 }}>A 13th dimension — Narrative Coherence — would capture the gap between positioning aspiration and structural delivery. Three Sixty West (hotel not open) and Central Park Tower (30% discounts vs $250M claim) score poorly on coherence. This is a prestige risk variable.</div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
