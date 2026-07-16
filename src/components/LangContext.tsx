/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Lang = "en" | "et" | "ru";

export const translations = {
  en: {
    nav: {
      home: "Home",
      dobermann: "Dobermann",
      greatDane: "Great Dane",
      ourDogs: "Our dogs",
      puppies: "Puppies",
      contact: "Contact",
    },
    home: {
      subtitle: "Bred with heart, for hearts",
      welcomeTitle: "Welcome to Dobdog Elegance!",
      welcome1:
        "Dobdog Elegance is a small home kennel founded in Estonia in 2024, where dogs aren't just dogs – they are our family, friends, and everyday companions.",
      welcome2:
        "Our dogs grow up in a loving home environment. Besides shows, training, and active city life, they get to enjoy freedom every day, long walks, and movement amid Estonia's beautiful forests and bogs. We believe that a happy, balanced dog comes from a life with equal parts activity, care, and freedom.",
      welcome3:
        "At the heart of our breeding work are quality, health, and love for the breed. We select only carefully considered dogs for our breeding program – ones that combine excellent appearance, strong health, an intelligent character, and a balanced temperament. Our breeding dogs undergo the necessary health screenings, and our goal is to preserve and develop the breed in line with the breed standard.",
      welcome4:
        "Every puppy born is very special to us and carries a piece of our heart. That's why breeding pairs are chosen with great care and responsibility, with attention to the parents' health, character, and pedigree. We raise our puppies with the same dedication – offering a safe home environment, plenty of love, and thorough socialization, so they grow into confident, balanced, and wonderful family members.",
    },
    footer: {},
    dobermann: {
      byline: "Breed spotlight",
      title: "The Dobermann",
      h1: "Breed History",
      h2: "Physical Characteristics",
      h3: "Temperament and Behavior",
      h4: "Care and Health",
      h5: "Conclusion",
      p0: "The Dobermann is one of the most recognizable working breeds in the world — sleek, athletic, and known for a rare combination of intelligence, loyalty, and fearless protective instinct. Elegant in appearance yet formidable in function, the breed has earned a reputation as both a devoted family companion and one of the most capable working dogs in existence.",
      p1: "The breed's origins trace back to Apolda, in the German state of Thuringia, in the 1880s. Karl Friedrich Louis Dobermann, a local tax collector, night watchman, and dog pound operator, wanted a dog that could protect him on his rounds, since he often carried large sums of money. Selecting from the dogs that passed through the pound, he began breeding for loyalty, alertness, and courage.",
      p2: "After his death in 1894, other breeders continued refining the line, and the breed was officially named in his honor. The exact ancestral mix was never fully documented, but it's believed to include the old German Shepherd, Rottweiler, German Pinscher, Weimaraner, and possibly the Greyhound and Manchester Terrier. The German Kennel Club recognized the breed in 1899, followed by the AKC in 1908.",
      p3: "By the early 20th century, Dobermanns had spread across Europe and the United States, serving as police dogs, military dogs — notably as the official war dog of the U.S. Marine Corps in the Pacific during World War II — and personal guardians.",
      p4: "Dobermanns have a compact, muscular, square-proportioned body built for speed and endurance rather than bulk. Males stand roughly 68–72 cm at the shoulder and weigh 40–45 kg; females are somewhat smaller, around 63–68 cm and 32–35 kg.",
      p5: "The coat is short, smooth, and close-fitting, in black, red, blue, or fawn, each with rust-colored markings above the eyes, on the muzzle, throat, chest, legs, and below the tail. The head is long and wedge-shaped, with almond-shaped eyes that give a confident, alert expression.",
      p6: "Dobermanns consistently rank among the most intelligent dog breeds and excel in obedience and working trials. They form close bonds with their families and are often described as shadowing their owners closely, earning the nickname 'velcro dogs.'",
      p7: "Key traits include high trainability, a strong protective instinct without indiscriminate aggression when well-socialized, and keen situational awareness. They are sensitive to tone and respond best to firm, consistent, positive training rather than harsh correction. Early socialization is essential, as an under-socialized Dobermann can become overly wary of strangers.",
      p8: "This is a high-energy working breed that needs substantial daily exercise — ideally 60–90 minutes combining physical activity with mental engagement such as obedience work or scent games. Underexercised Dobermanns can become anxious or destructive.",
      p9: "The breed is predisposed to several serious health conditions that responsible breeders screen for, including dilated cardiomyopathy (DCM), von Willebrand's disease, hip and elbow dysplasia, and cervical vertebral instability, sometimes called Wobbler syndrome. Regular veterinary checkups, cardiac screening, and a balanced diet are key to a long, healthy life.",
      p10: "The Dobermann is a noble, highly intelligent, and trainable breed, ideal for active owners seeking a loyal, protective companion. With proper care, socialization, and exercise, they become deeply devoted and affectionate members of the family.",
      source:
        "Source: Doberman Pinscher Dog Breed Information – American Kennel Club ↗",
    },
    greatDane: {
      byline: "Breed spotlight",
      title: "The Great Dane",
      h1: "Breed history",
      h2: "Physical characteristics",
      h3: "Temperament and behavior",
      h4: "Care and health considerations",
      h5: "Conclusion",
      p0: 'The Great Dane, often referred to as the "Apollo of all breeds", is a majestic and noble dog known for its impressive stature and gentle demeanor. Originating from medieval Europe, these dogs were initially bred for hunting large game like wild boars.',
      p1: 'In the Middle Ages, European nobility used large, agile dogs for hunting formidable prey. King Frederick II of Denmark imported strong English Mastiffs, which, when crossbred with local breeds, formed the basis of the modern Great Dane. These dogs, called Kammerhunde or "chamber dogs", became prized companions of the aristocracy.',
      p2: "Great Danes are well-balanced and elegant, with a square build, powerful musculature, and a graceful gait. They have a long, narrow head and intelligent expression. Coat colors include fawn, brindle, black, blue, and harlequin. Males stand at least 80 cm tall, while females reach 72 cm or more.",
      p3: "Despite their size, Great Danes are affectionate, friendly, and loyal. They're known for being gentle with children and the elderly. While they may be reserved with strangers, aggression is not typical and is a fault by breed standards. Their calm nature makes them ideal family companions.",
      p4: "Owning a Great Dane requires commitment. A balanced diet and limited exercise during their rapid growth phase are important to avoid joint issues. Regular vet visits are a must, as they're prone to health concerns like hip dysplasia and gastric torsion (bloat), which can be life-threatening.",
      p5: "The Great Dane combines grandeur with gentleness, making it a beloved breed worldwide. Their loyalty and affection make them ideal family pets, but they require dedicated care and understanding of their physical and emotional needs.",
      source: "Source: Creed Danes – The Breed ↗",
    },
    ourDogs: {
      byline: "Meet the family",
      title: "Our dogs",
      freya: {
        breed: "Dobermann",
        blurb:
          "Our spirited and devoted Dobermann girl — a true heart of the pack.",
        link: "Read her story →",
      },
      sirius: {
        breed: "Dobermann",
        blurb:
          "Bold, loyal, and endlessly playful — Sirius lights up every room he enters.",
        link: "Read his story →",
      },
      mia: {
        breed: "Dobermann · Rescue",
        blurb:
          "Rescued from war-torn Ukraine, Mia is living proof that love can heal anything.",
        link: "Read her story →",
      },
      sahara: {
        breed: "Great Dane",
        blurb:
          "Our accomplished champion girl — elegant, focused, and beautifully decorated.",
        link: "Read her story →",
      },
    },
    freya: {
      titlesHeader: "Official titles & achievements",
      photosHeader: "Photos",
      documentsHeader: "Diplomas & certificates",
      pedigreeHeader: "Freya's pedigree",
      parents: "1. generation",
      grandParents: "2. generation",
      greatGrandParents: "3. generation",
      byline: "DOB 21.10.2021",
      title: "Fortuna Freya Happy Fly",
      p0: "Freya is the heart of DobDog Elegance — a magnificent Dobermann whose presence fills every room she enters. From her very first days with us, she demonstrated the perfect blend of regal dignity and playful warmth that defines the finest Dobermanns.",
      p1: "Named after the Norse goddess of love and beauty, Freya lives up to her name entirely. She is as elegant as she is spirited, as gentle as she is watchful. Whether she's greeting guests with graceful curiosity or bounding through the yard with boundless energy, she brings joy to everyone who meets her.",

      p3: "Off-duty, you'll find Freya claiming the sunniest spot on the couch, patiently waiting for her evening walk, or supervising the rest of the pack with quiet authority. She has a soft spot for children and a fondness for ear scratches.",
      p4: "Freya is the foundation upon which DobDog Elegance was built — and she knows it.",
    },
    sirius: {
      byline: "DOB 16.04.2021",
      title: "Taikaviitan Åikeasti-Åsuu",
      pedigreeHeader: "Sirius's pedigree",
      parents: "1. generation",
      grandParents: "2. generation",
      greatGrandParents: "3. generation",
      greatgreatGrandParents: "4. generation",
      photosHeader: "Photos",
      videosHeader: "Videos",
      p0: "Sirius – our proud companion from Finland",
      p1: "Sirius joined our family from the Taikaviitan kennel in Finland, run by breeder Soile Karttunen.",
      p2: "Sirius is an incredibly friendly and well-balanced boy. He moves calmly among both other dogs and people, always ready for a friendly encounter. At the same time, he possesses the dignity and alertness characteristic of the breed—if a stranger enters our property, he will certainly make his presence known. Sirius keeps a watchful eye over our home and ensures that his family is always safely protected.",
      p3: "He has participated in obedience training and demonstrated excellent cooperation, successfully passing the KK1, BH, and IBGH1 exams. However, his true, unique talent and greatest joy shine through in running sports. Sirius thoroughly enjoys staying active and has competed in several canicross events, where his energy, drive, and joy of working together really get to shine.",
      p4: "Sirius is a boy with a big heart—a calm and friendly family member, and a companion who is always ready to embark on a fun activity with his human.",
    },
    mia: {
      title: "Mia's story",
      p0: "Mia is a Dobermann rescued from the streets of Ukraine. She arrived in Estonia and into our care on April 30, 2024. Mia was found in a dire state — emaciated, exhausted, and severely ill. She was already knocking on heaven's door with one paw. Only she and God know what her past life was like and where her former owners are. Her body bears many sad marks of what she has endured.",
      p1: "The family who rescued Mia from the streets and from the violence of war and local stray dogs live in extreme poverty themselves — so much so that they don't always know if there will be food on the table the next day. Yet they still found space in their home and hearts for this poor soul. Thanks to the dedication of Ukrainian volunteers, she received medical care and was given proper nourishment.",
      p2: "All efforts to locate her original owners were in vain. The phone remained silent… no one came forward. A new home had to be found for Mia, and so began her journey to Estonia.",
      p3: "Today, the once timid, uncertain, and melancholic dog has transformed into a lively, affectionate, and deeply friendly girl. She has learned to walk up stairs, play ball, sit on command — and of course, sleep in bed.",
      p4: "With her gentle nature, she quickly won everyone's hearts and seamlessly blended into our pack of Dobermanns. We're grateful to have had the opportunity to help restore one soul's faith and trust in humans and in other dogs, as well as her courage to live again.",
      p5: "Veterinarians estimate Mia's age to be between 5 and 8 years.",
    },
    sahara: {
      title: "Creed Danes´Diamonds R Forever",
      byline: "DOB 05.03.2025",
      titlesHeader: "Official titles & achievements",
      documentsHeader: "Diplomas & certificates",
      downloadText: "Download document",
      pedigreeHeader: "Sahara's pedigree",
      parents: "1. generation",
      grandParents: "2. generation",
      greatGrandParents: "3. generation",
      photosHeader: "Photos",
      p0: "Sahara comes from Switzerland, from the renowned Creed Danes kennel, bred by Roberta Gaiofatto.",
      p1: "Her kennel name, Sahara, is no coincidence. It was given as a tribute to her outstanding grandmother PHILLYS-F DE' CINEGETI – an exceptionally successful show dog whose pet name was also Sahara. In this way, our Sahara carries a piece of her noble grandmother's legacy and continues her story in her own way.",
      p2: "Our Sahara has also begun a beautiful journey in the show world. At just 15 months old, she has already achieved several prestigious titles, including the International Junior Champion title C.I.B.-J. These achievements confirm her excellent quality and mark just the beginning of a beautiful and promising show career.",
      p3: "For us, however, Sahara is much more than her distinguished background, noble pedigree, or show achievements. She is a beloved family member – a dog with a gentle heart, a joyful spirit, and a dignified presence, bringing joy, pride, and endless warm moments into our every day.",
    },
    puppies: {
      badge: "Enquiries welcome",
      title: "Raise them with knowledge, patience and love.",
      p0: "All DobDog Elegance puppies are raised in our home alongside their parents, surrounded by love, proper socialization, and excellent veterinary care from day one.",
      p1: "We breed for health, temperament, and conformation — and we are selective about the families our puppies join. Every pup leaves with a full health check, vaccinations, microchip, and a lifetime of support from us.",
      p2: "We do not always have litters available, but we encourage you to register your interest. When puppies are expected, registered families are the first to know.",
      p3: "Current availability: Please contact us directly for up-to-date litter information.",
      cta: "Enquire about puppies",
    },
    contact: {
      title: "Get in touch",
      subtitle:
        "Whether you're interested in our puppies, have questions about the breeds, or simply want to say hello — we'd love to hear from you.",
      name: "Your name",
      email: "Email address",
      subject: "Subject",
      message: "Message",
      subjectDefault: "Select a topic…",
      topics: [
        "Puppy enquiry",
        "Stud service",
        "Breed information",
        "Arranging a visit",
        "Other",
      ],
      send: "Send message",
    },
  },
  et: {
    nav: {
      home: "Avaleht",
      dobermann: "Dobermann",
      greatDane: "Saksa dogi",
      ourDogs: "Meie koerad",
      puppies: "Kutsikad",
      contact: "Kontakt",
    },
    home: {
      subtitle: "Südamest südamesse!",
      welcomeTitle: "Tere tulemast Dobdog Elegance'i!",
      welcome1:
        "Dobdog Elegance on 2024. aastal Eestis loodud väike kodune kennel, kus koerad ei ole lihtsalt koerad – nad on meie pere, sõbrad ja igapäevased kaaslased.",
      welcome2:
        "Meie koerad kasvavad armastavas koduses keskkonnas. Lisaks näitustele, treeningutele ja aktiivsele linnaelule saavad nad iga päev nautida vabadust, pikki jalutuskäike ning liikumist Eesti kaunite metsade ja rabade keskel. Usume, et õnnelik ja tasakaalukas koer sünnib just sellisest elust, kus on võrdselt nii tegevust, hoolt kui ka vabadust.",
      welcome3:
        "Meie aretustöö keskmes on kvaliteet, tervis ja tõuarmastus. Aretusprogrammi valime ainult parimad koerad, kes ühendavad endas suurepärase välimiku, tugeva tervise, intelligentse iseloomu ning tasakaaluka temperamendi. Aretuskoer läbib vajalikud terviseuuringud, sest eesmärk on säilitada ja arendada tõugu kooskõlas tõustandardiga.",
      welcome4:
        "Iga sündiv kutsikas on väga eriline ning kannab endas killukest meie südamest. Seetõttu on aretuspaar valitud suure hoole ja vastutustundega, pöörates tähelepanu nii vanemate tervisele, iseloomule kui ka sugupuule. Sama pühendunult kasvatame ka oma kutsikaid – pakkudes neile turvalist kodust kasvukeskkonda, palju armastust ning põhjalikku sotsialiseerimist, et neist sirguksid enesekindlad, tasakaalukad ja suurepärased pereliikmed.",
    },
    footer: {},
    dobermann: {
      title: "Dobermann",
      h1: "Tõu ajalugu",
      h2: "Välised tunnused",
      h3: "Temperament ja käitumine",
      h4: "Hooldus ja tervis",
      h5: "Kokkuvõte",
      p0: "Dobermann on üks maailma äratuntavamaid töökoerte tõuge — sale, atleetlik ning tuntud haruldase kombinatsiooni poolest, milles ühinevad intelligentsus, ustavus ja kartmatu kaitseinstinkt. Elegantne välimuselt, kuid võimekas oma töövõimete poolest, on tõug pälvinud maine nii pühendunud pereliikme kui ka ühe võimekaima töökoerana.",
      p1: "Tõu juured ulatuvad 1880. aastatesse Saksamaale, Tüüringi liidumaale Apolda linna. Karl Friedrich Louis Dobermann, kohalik maksukoguja, öövaht ja koerte varjupaiga pidaja, soovis koera, kes kaitseks teda tema ringkäikudel, kuna ta kandis sageli endaga kaasas suuri rahasummasid. Valides varjupaigast läbi käinud koerte hulgast, hakkas ta aretama koeri, kellel oleks ustavus, valvsus ja julgus.",
      p2: "Pärast tema surma 1894. aastal jätkasid teised aretajad tõu arendamist ning tõug nimetati ametlikult tema auks. Täpne päritolu pole kunagi täielikult dokumenteeritud, kuid arvatakse, et selle loomisel kasutati vana saksa lambakoera, rottveilerit, saksa pinšerit, veimaranerit ning võimalik, et ka hurta ja Manchesteri terjerit. Saksa Kennelklubi tunnustas tõugu 1899. aastal, sellele järgnes AKC 1908. aastal.",
      p3: "20. sajandi alguseks olid dobermannid levinud üle Euroopa ja Ameerika Ühendriikide, teenides politseikoerte, sõjaväekoertena — eriti tuntud kui USA merejalaväe ametlik sõjakoer Vaikse ookeani rindel Teise maailmasõja ajal — ning isiklike valvurkoertena.",
      p4: "Dobermannidel on kompaktne, lihaseline ja ruudukujuline kehaehitus, mis on loodud pigem kiiruse ja vastupidavuse, mitte massiivsuse jaoks. Isased on turjani umbes 68–72 cm ja kaaluvad 40–45 kg; emased on mõnevõrra väiksemad, umbes 63–68 cm ja 32–35 kg.",
      p5: "Karvkate on lühike, sile ja tihedalt kehal lebav, värvuselt must, pruun, sinine või kollakaspruun (fawn), kõigil roostepruunide märgistega silmade kohal, koonul, kaelal, rinnal, jalgadel ja saba all. Pea on pikk ja kiilukujuline, mandlikujulised silmad annavad enesekindla ja valvsa ilme.",
      p6: "Dobermannid kuuluvad pidevalt kõige intelligentsemate koeratõugude hulka ning saavutavad häid tulemusi kuulekuse ja töövõimekuse katsetel. Nad loovad oma perega tugeva sideme ning neid kirjeldatakse sageli kui omanikku pidevalt jälgivaid koeri, mistõttu kutsutakse neid hüüdnimega 'kliistoerad' (velcro dogs).",
      p7: "Peamised omadused on kõrge õpivõime, tugev kaitseinstinkt ilma põhjendamatu agressiivsuseta hea sotsialiseerimise korral ning terav olukorrataju. Nad on tundlikud tooni suhtes ja reageerivad kõige paremini kindlale, järjekindlale ja positiivsele treeningule, mitte karmile korrigeerimisele. Varajane sotsialiseerimine on hädavajalik, kuna ebapiisavalt sotsialiseeritud dobermann võib muutuda võõraste suhtes liiga ettevaatlikuks.",
      p8: "See on kõrge energiatasemega töötõug, mis vajab olulist igapäevast liikumist — ideaalis 60–90 minutit, mis ühendab füüsilist tegevust vaimse stimulatsiooniga, näiteks kuulekustreening või lõhnamängud. Vähese liikumisega dobermannid võivad muutuda ärevaks või hävitavaks.",
      p9: "Tõul on kalduvus mitmele tõsisele terviseprobleemile, mida vastutustundlikud aretajad kontrollivad, sealhulgas laienenud kardiomüopaatia (DCM), von Willebrandi tõbi, puusa- ja küünarliigese düsplaasia ning kaelalülide ebastabiilsus, mida mõnikord nimetatakse Wobbleri sündroomiks. Regulaarsed veterinaarkontrollid, südame sõeluuring ja tasakaalustatud toitumine on pika ja terve elu võti.",
      p10: "Dobermann on üllas, väga intelligentne ja hõlpsasti treenitav tõug, mis sobib aktiivsetele omanikele, kes soovivad ustavat ja kaitsvat kaaslast. Õige hoolduse, sotsialiseerimise ja liikumise korral saavad neist sügavalt pühendunud ja hellad pereliikmed.",
      source:
        "Allikas: Doberman Pinscher Dog Breed Information – American Kennel Club ↗",
    },
    greatDane: {
      title: "Saksa dogi",
      h1: "Tõu ajalugu",
      h2: "Välised omadused",
      h3: "Iseloom ja käitumine",
      h4: "Hooldus ja tervis",
      h5: "Kokkuvõte",
      p0: 'Saksa dogi nimetatakse sageli "kõigi tõugude Apolloks" — see on majesteetlik koer, mis on tuntud oma muljetavaldava kasvu ja tasase iseloomu poolest.',
      p1: "Keskaegses Euroopas kasutasid aadlikud suuri jahikoeri. Taani kuningas Frederick II importis tugevaid inglise mastiife, mis ristati kohalike tõugudega ning moodustasid tänapäevase Saksa dogi aluse.",
      p2: "Saksa dogid on tasakaalustatud ja elegantsed, ruudukujulise kehaehituse ja graatsilise liikumisega. Isased on vähemalt 80 cm kõrged.",
      p3: "Hoolimata oma suurusest on Saksa dogid hellad, sõbralikud ja lojaalsed. Nad on tuntud oma leebuse poolest lastega.",
      p4: "Saksa dogi omamine nõuab pühendumust. Tasakaalustatud toitumine on liigeste probleemide vältimiseks oluline. Nad on altid maoväändele ja puusaliigese düsplaasiale.",
      p5: "Saksa dogi ühendab suurejoonelisuse leebusega, muutes ta armastatud tõuks üle maailma.",
      source: "Allikas: Creed Danes – The Breed ↗",
    },
    ourDogs: {
      byline: "Tutvu perega",
      title: "Meie koerad",
      freya: {
        breed: "Dobermann",
        blurb:
          "Meie elurõõmus ja pühendunud dobermanni tüdruk — karja tõeline süda.",
        link: "Loe tema lugu →",
      },
      sirius: {
        breed: "Dobermann",
        blurb:
          "Julge, lojaalne ja lõputult mängimisvalmis — Sirius valgustab iga ruumi.",
        link: "Loe tema lugu →",
      },
      mia: {
        breed: "Dobermann · Päästetud",
        blurb: "Ukrainast päästetud Mia on tõend, et armastus ravib.",
        link: "Loe tema lugu →",
      },
      sahara: {
        breed: "Saksa dogi",
        blurb:
          "Meie edukas tšempion — elegantne, sihikindel ja silmapaistvalt auhinnatud.",
        link: "Loe tema lugu →",
      },
    },
    freya: {
      titlesHeader: "Ametlikud tiitlid ja saavutused",
      photosHeader: "Fotod",
      documentsHeader: "Diplomid & sertifikaadid",
      pedigreeHeader: "Freya sugupuu",
      parents: "1. põlvkond",
      grandParents: "2. põlvkond",
      greatGrandParents: "3. põlvkond",
      byline: "DOB 21.10.2021",
      title: "Fortuna Freya Happy Fly",
      p0: "Freya on DobDog Elegance'i süda — suurejooneline dobermann, kelle kohalolek täidab iga ruumi.",
      p1: "Nimetatud Põhja mütoloogia armastuse ja ilu jumalanna järgi, vastab Freya täielikult oma nimele. Ta on same elegantne kui energiline.",

      p3: "Vabal ajal leiad Freya päikesepaistelisemalt diivanikohalt, õhtujalutust oodates.",
      p4: "Freya on vundament, millele DobDog Elegance on ehitatud — ja ta teab seda.",
    },
    sirius: {
      byline: "DOB 16.04.2021",
      title: "Taikaviitan Åikeasti-Åsuu",
      pedigreeHeader: "Siriuse sugupuu",
      parents: "1. põlvkond",
      grandParents: "2. põlvkond",
      greatGrandParents: "3. põlvkond",
      greatgreatGrandParents: "4. põlvkond",
      photosHeader: "Fotod",
      videosHeader: "Videod",
      p0: "Sirius – meie väärikas kaaslane Soomest",
      p1: "Sirius saabus meie perre Soomest Taikaviitan kennelist, mille taga seisab kasvataja Soile Karttunen.",
      p2: "Sirius on üks ütlemata sõbralik ja tasakaalukas poiss. Ta liigub rahulikult nii teiste koerte kui ka inimeste keskel, olles alati valmis sõbralikuks kohtumiseks. Samas on temas olemas ka tõule omane väärikus ja valvsus – kui keegi võõras meie territooriumile saabub, annab ta sellest kindlasti oma kohalolekuga märku. Sirius hoiab tähelepaneliku pilgu all meie kodu ja hoolitseb selle eest, et tema pere oleks alati turvaliselt hoitud.",
      p3: "Ta on osalenud kuulekuskoolituses ning näidanud oma suurepärast koostöövalmidust, sooritades edukalt KK1, BH ja IBGH1 eksamid. Tema tõeline eriline anne ja suurim rõõm avalduvad aga jooksuspordis. Sirius naudib liikumist kogu südamest ning on osalenud mitmetel canicross võistlustel, kus tema energia, tahe ja rõõm koos tegutsemisest saavad särada.",
      p4: "Sirius on suure südamega poiss – rahulikum ja sõbralik pere liige, kaaslane, kellel on alati valmisolek koos oma inimesega midagi toredat ette võtta.",
    },
    mia: {
      title: "Mia lugu",
      p0: "Mia on Ukraina tänavatelt päästetud dobermann. Ta saabus Eestisse meie hoole alla 30. aprillil 2024. Mia leiti hüljatuna keerulisest olukorrast — kurnatud, väsinud ja raskelt haige.",
      p1: "Perekond, kes päästis Mia tänavatelt, elab ise äärmises vaesuses. Ometi leidsid nad ruumi oma kodus ja südames selle vaese hinge jaoks.",
      p2: "Kõik katsed leida tema endisi omanikke olid tulutud. Telefon jäi vaikseks… Miale tuli leida uus kodu ja nii sai alguse tema teekond Eestisse.",
      p3: "Täna on endine arg, ebakindel koer muutunud elavaks ja sõbralikuks tüdrukuks. Ta on õppinud treppidest käima, palli mängima ja voodis magama.",
      p4: "Oma leebe loomuse tõttu võitis ta kiiresti kõigi südamed ja sulandus sujuvalt meie koerte sõpruskonda.",
      p5: "Veterinaarid hindasid Mia vanuseks 5–8 aastat.",
    },
    sahara: {
      title: "Creed Danes´Diamonds R Forever",
      byline: "DOB 05.03.2025",
      titlesHeader: "Ametlikud tiitlid & saavutused",
      documentsHeader: "Diplomid & sertifikaadid",
      downloadText: "Laadi dokument alla",
      pedigreeHeader: "Sahara sugupuu",
      parents: "1. põlvkond",
      grandParents: "2. põlvkond",
      greatGrandParents: "3. põlvkond",
      photosHeader: "Fotod",
      p0: "Sahara on pärit Šveitsist, tunnustatud Creed Danes kennelist, mille kasvatajaks on Roberta Gaiofatto.",
      p1: "Tema kodune hüüdnimi Sahara ei ole juhuslik. See on antud austusavaldusena tema silmapaistvale vanaemale PHILLYS-F DE' CINEGETI'le – erakoldselt edukale näitusekoerale, kelle koduseks hüüdnimeks oli samuti Sahara. Nii kannab meie Sahara endas killukest oma väärika vanaema pärandist ning jätkab tema lugu omal moel.",
      p2: "Ka meie Sahara on alustanud kaunist teekonda näitusemaailmas. Juba 15 kuu vanuselt on ta saavutanud mitmeid hinnatud tiitleid, nende seas ka rahvusvahelise juunioršampioni tiitli C.I.B.-J. Need saavutused kinnitavad tema suurepärast kvaliteeti ning tähistavad alles ühe ilusa ja lootustandva näitusekarjääri algust.",
      p3: "Meie jaoks on Sahara aga palju enamat kui tema silmapaistev päritolu, väärikas sugupuu või näitusesaavutused. Ta on armastatud pereliige – õrna südame, rõõmsa meele ja väärika olemisega koer, kes toob meie igasse päeva rõõmu, uhkust ja lõputult sooje hetki.",
    },
    puppies: {
      badge: "Päringud oodatud",
      title: "Raise them with knowledge, patience and love.",
      p0: "Kõik DobDog Elegance'i kutsikad kasvavad meie kodus koos vanematega, ümbritsetuna armastusest ja suurepärase veterinaarhooldusega.",
      p1: "Me aretame tervise ja iseloomu nimel ning oleme valivad, millisesse peresse meie kutsikad lähevad.",
      p2: "Pesakondi ei ole alati saadaval — registreerige oma huvi ja saate esimesena teada.",
      p3: "Praegune saadavus: võtke meiega otse ühendust.",
      cta: "Saada päring!",
    },
    contact: {
      title: "Võtke ühendust",
      subtitle:
        "Kas olete huvitatud kutsikastest, teil on küsimusi tõugude kohta, või soovite lihtsalt tere öelda — meil on hea meel teist kuulda.",
      name: "Teie nimi",
      email: "E-posti aadress",
      subject: "Teema",
      message: "Sõnum",
      subjectDefault: "Valige teema…",
      topics: [
        "Kutsika päring",
        "Aretusteenus",
        "Tõuteave",
        "Visiidi korraldamine",
        "Muu",
      ],
      send: "Saada sõnum",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      dobermann: "Доберман",
      greatDane: "Дог",
      ourDogs: "Наши собаки",
      puppies: "Щенки",
      contact: "Контакт",
    },
    home: {
      subtitle: "Выращены с сердцем, для сердец",
      welcomeTitle: "Добро пожаловать в Dobdog Elegance!",
      welcome1:
        "Dobdog Elegance — небольшой домашний питомник, основанный в Эстонии в 2024 году, где собаки для нас не просто собаки — они наша семья, друзья и повседневные компаньоны.",
      welcome2:
        "Наши собаки растут в любящей домашней обстановке. Помимо выставок, тренировок и активной городской жизни, они каждый день наслаждаются свободой, долгими прогулками и движением среди прекрасных эстонских лесов и болот. Мы верим, что счастливая и уравновешенная собака рождается именно из такой жизни, где в равной мере есть активность, забота и свобода.",
      welcome3:
        "В основе нашей племенной работы лежат качество, здоровье и любовь к породе. Мы тщательно отбираем для разведения только тех собак, которые сочетают в себе прекрасный экстерьер, крепкое здоровье, умный характер и уравновешенный темперамент. Племенные собаки проходят необходимые обследования здоровья, и наша цель — сохранять и развивать породу в соответствии со стандартом породы.",
      welcome4:
        "Каждый рождённый щенок для нас особенный и несёт в себе частичку нашего сердца. Именно поэтому племенные пары подбираются с большой заботой и ответственностью, с вниманием к здоровью, характеру и родословной родителей. С той же преданностью мы выращиваем и наших щенков — предоставляя им безопасную домашнюю среду, много любви и тщательную социализацию, чтобы из них выросли уверенные, уравновешенные и прекрасные члены семьи.",
    },
    footer: {},
    dobermann: {
      byline: "Порода в фокусе",
      title: "Доберман",
      h1: "История породы",
      h2: "Внешние характеристики",
      h3: "Темперамент и поведение",
      h4: "Уход и здоровье",
      h5: "Заключение",
      p0: "Доберман — одна из самых узнаваемых рабочих пород в мире: стройная, атлетичная и известная редким сочетанием ума, преданности и бесстрашного защитного инстинкта. Элегантный внешне, но грозный по своим рабочим качествам, доберман заслужил репутацию как преданного семейного компаньона, так и одной из самых способных служебных собак.",
      p1: "История породы началась в 1880-х годах в городе Апольда, земля Тюрингия, Германия. Карл Фридрих Луис Доберманн — сборщик налогов, ночной сторож и смотритель приюта для собак — хотел получить собаку, способную защитить его во время обходов, ведь он часто носил с собой крупные суммы денег. Отбирая собак из приюта, он начал целенаправленно выводить животных с преданностью, бдительностью и смелостью.",
      p2: "После его смерти в 1894 году работу продолжили другие заводчики, а порода была официально названа в его честь. Точное происхождение породы не задокументировано полностью, но считается, что в её создании участвовали старонемецкая овчарка, ротвейлер, немецкий пинчер, веймаранер и, возможно, грейхаунд и Манчестерский терьер. Немецкий кеннел-клуб признал породу в 1899 году, а AKC — в 1908 году.",
      p3: "К началу XX века доберманы распространились по Европе и США, служа в полиции, армии — в частности, как официальная военная собака Корпуса морской пехоты США на Тихом океане во время Второй мировой войны — и в качестве личных телохранителей.",
      p4: "Доберманы обладают компактным, мускулистым и пропорциональным телосложением, созданным скорее для скорости и выносливости, чем для массы. Кобели достигают 68–72 см в холке при весе 40–45 кг, суки немного меньше — 63–68 см и 32–35 кг.",
      p5: "Шерсть короткая, гладкая и плотно прилегающая; признанные окрасы — чёрный, коричневый, голубой и палевый, все с рыжими подпалинами над глазами, на морде, груди, лапах и под хвостом. Голова клиновидной формы, миндалевидные глаза придают взгляду уверенное и бдительное выражение.",
      p6: "Доберманы стабильно входят в число самых умных пород собак и отлично проявляют себя в дрессировке и рабочих испытаниях. Они формируют крепкую привязанность к своей семье и часто буквально следуют за хозяином по пятам, за что получили прозвище «собаки-липучки».",
      p7: "Ключевые черты породы — высокая обучаемость, выраженный защитный инстинкт без немотивированной агрессии при должной социализации, и острое восприятие окружающей обстановки. Доберманы чувствительны к тону общения и лучше всего реагируют на твёрдое, последовательное и позитивное обучение, а не на жёсткие методы коррекции. Ранняя социализация крайне важна — недостаточно социализированный доберман может стать излишне настороженным по отношению к посторонним.",
      p8: "Это порода с высоким уровнем энергии, требующая значительных ежедневных нагрузок — в идеале 60–90 минут, сочетающих физическую активность с умственной стимуляцией, например дрессировкой или поисковыми играми. При недостатке нагрузок доберманы могут стать тревожными или деструктивными.",
      p9: "Порода предрасположена к ряду серьёзных заболеваний, которые ответственные заводчики выявляют при отборе племенных собак: дилатационная кардиомиопатия (ДКМП), болезнь фон Виллебранда, дисплазия тазобедренных и локтевых суставов, а также нестабильность шейных позвонков, иногда называемая синдромом Воблера. Регулярные осмотры у ветеринара, кардиологическое обследование и сбалансированное питание — залог долгой и здоровой жизни.",
      p10: "Доберман — благородная, очень умная и легко обучаемая порода, идеальная для активных владельцев, ищущих преданного и защитного компаньона. При правильном уходе, социализации и физических нагрузках доберманы становятся глубоко преданными и ласковыми членами семьи.",
      source:
        "Источник: Doberman Pinscher Dog Breed Information – American Kennel Club ↗",
    },
    greatDane: {
      byline: "Порода в фокусе",
      title: "Немецкий дог",
      h1: "История породы",
      h2: "Внешние характеристики",
      h3: "Темперамент и поведение",
      h4: "Уход и здоровье",
      h5: "Заключение",
      p0: "Немецкий дог, часто называемый «Аполлоном всех пород», — величественная и благородная собака с впечатляющим ростом и мягким нравом.",
      p1: "В Средние века европейская знать использовала крупных собак для охоты. Основу современного немецкого дога заложили мастифы, привезённые королём Дании Фредериком II.",
      p2: "Немецкие доги сбалансированы и элегантны, с квадратным телосложением и грациозной походкой. Кобели — не менее 80 см в холке.",
      p3: "Несмотря на размеры, немецкие доги ласковые, дружелюбные и преданные. Они нежны с детьми и пожилыми.",
      p4: "Содержание немецкого дога требует ответственности: важны сбалансированное питание и ограниченные нагрузки в период роста.",
      p5: "Немецкий дог сочетает величие с мягкостью — любимая порода во всём мире.",
      source: "Источник: Creed Danes – The Breed ↗",
    },
    ourDogs: {
      byline: "Знакомьтесь с семьёй",
      title: "Наши собаки",
      freya: {
        breed: "Доберман",
        blurb:
          "Наша живая и преданная девочка-доберман — истинное сердце стаи.",
        link: "Читать её историю →",
      },
      sirius: {
        breed: "Доберман",
        blurb:
          "Смелый, верный и бесконечно игривый — Сириус освещает каждую комнату.",
        link: "Читать его историю →",
      },
      mia: {
        breed: "Доберман · Спасённая",
        blurb:
          "Спасённая с улиц Украины, Миа — живое доказательство того, что любовь исцеляет.",
        link: "Читать её историю →",
      },
      sahara: {
        breed: "Немецкий дог",
        blurb:
          "Наша титулованная чемпионка — элегантная, целеустремленная и яркая.",
        link: "Читать её историю →",
      },
    },
    freya: {
      titlesHeader: "Заголовки",
      photosHeader: "Фотографии",
      documentsHeader: "Дипломы и сертификаты",
      pedigreeHeader: "Родословная",
      parents: "1-е поколение",
      grandParents: "2-е поколение",
      greatGrandParents: "3-е поколение",
      byline: "DOB 21.10.2021",
      title: "Fortuna Freya Happy Fly",
      p0: "Фрейя — сердце DobDog Elegance, великолепный доберман, чьё присутствие заполняет каждый уголок дома.",
      p1: "Названная в честь скандинавской богини любви и красоты, Фрейя полностью соответствует своему имени.",

      p3: "В свободное время Фрейю можно найти на самым солнечном месте дивана, в ожидании вечерней прогулки.",
      p4: "Фрейя — фундамент, на котором построен DobDog Elegance, — и она это знает.",
    },
    sirius: {
      byline: "DOB 16.04.2021",
      title: "Taikaviitan Åikeasti-Åsuu",
      pedigreeHeader: "Родословная",
      parents: "1-е поколение",
      grandParents: "2-е поколение",
      greatGrandParents: "3-е поколение",
      greatgreatGrandParents: "4-е поколение",
      photosHeader: "фотографии",
      videosHeader: "Видео",
      p0: "Сириус – наш благородный компаньон из Финляндии",
      p1: "Сириус появился в нашей семье из финского питомника Taikaviitan, за которым стоит заводчица Сойле Карттунен (Soile Karttunen).",
      p2: "Сириус – невероятно дружелюбный и уравновешенный парень. Он ведет себя спокойно как среди других собак, так и в окружении людей, всегда готовый к дружелюбной встрече. В то же время ему присущи характерные для породы достоинство и бдительность: если на нашу территорию заходит незнакомец, он обязательно заявит о своем присутствии. Сириус внимательно следит за нашим домом и заботится о том, чтобы его семья всегда была в безопасности.",
      p3: "Он прошел курс дрессировки на послушание и продемонстрировал отличное стремление к сотрудничеству, успешно сдав экзамены KK1, BH и IBGH1. Однако его истинный, особенный талант и огромная радость проявляются в беговом спорте. Сириус от всего сердца наслаждается движением и принимал участие в нескольких соревнованиях по каникроссу, где в полной мере раскрываются его энергия, упорство и радость от совместной работы.",
      p4: "Сириус — парень с большим сердцем: спокойный и дружелюбный член семьи, компаньон, который всегда готов заняться чем-то интересным вместе со своим человеком.",
    },
    mia: {
      title: "История Мии",
      p0: "Миа — доберман, спасённый с улиц Украины. Она прибыла в Эстонию 30 апреля 2024 года в плачевном состоянии — истощённой, измученной и тяжело больной.",
      p1: "Семья, которая спасла Миа от ужасов войны, сама живёт в крайней нищете. Но они всё равно нашли место в своём доме для этой бедной души.",
      p2: "Все попытки найти её прежних хозяев оказались тщетными. Телефон молчал… Нужно было найти новый дом, и так началось её путешествие в Эстонию.",
      p3: "Сегодня некогда пугливая собака превратилась в живую и дружелюбную девочку. Она научилась ходить по лестницам, играть в мяч и спать в кровати.",
      p4: "Своим мягким характером она быстро завоевала все сердца и органично влилась в нашу семью доберманов.",
      p5: "Ветеринары оценивают возраст Мие от 5 до 8 лет.",
    },
    sahara: {
      title: "Creed Danes´Diamonds R Forever",
      byline: "DOB 05.03.2025",
      titlesHeader: "Официальные титулы и достижения",
      documentsHeader: "Дипломы и сертификаты",
      downloadText: "Скачать документ",
      pedigreeHeader: "Родословная Сахары",
      parents: "1-е поколение",
      grandParents: "2-е поколение",
      greatGrandParents: "3-е поколение",
      photosHeader: "фотографии",
      p0: "Сахара родом из Швейцарии, из известного питомника Creed Danes, её заводчик — Роберта Гайофатто.",
      p1: "Её домашняя кличка Сахара выбрана не случайно. Это дань уважения её выдающейся бабушке PHILLYS-F DE' CINEGETI — исключительно успешной выставочной собаке, которую дома тоже звали Сахарой. Так наша Сахара несёт в себе частичку наследия своей благородной бабушки и по-своему продолжает её историю.",
      p2: "Наша Сахара также начала прекрасный путь в мире выставок. Уже в возрасте 15 месяцев она завоевала множество престижных титулов, включая титул Международного юного чемпиона C.I.B.-J. Эти достижения подтверждают её великолепные качества и знаменуют собой лишь начало красивой и многообещающей выставочной карьеры.",
      p3: "Но для нас Сахара — это гораздо больше, чем её выдающееся происхождение, благородная родословная или выставочные успехи. Она — любимый член семьи, собака с нежным сердцем, радостным нравом и полным достоинства характером, которая приносит в каждый наш день радость, гордость и бесконечно много тёплых моментов.",
    },
    puppies: {
      badge: "Запросы приветствуются",
      title: "Raise them with knowledge, patience and love.",
      p0: "Все щенки DobDog Elegance выращиваются в нашем доме вместе с родителями, в окружении любви и отличного ветеринарного ухода.",
      p1: "Мы разводим собак для здоровья и темперамента — и тщательно отбираем семьи для наших щенков.",
      p2: "Пометы бывают не всегда — рекомендуем зарегистрировать интерес заранее.",
      p3: "Текущая доступность: свяжитесь с нами для актуальной информации.",
      cta: "Запросить о щенках",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle:
        "Интересуетесь нашими щенками, хотите узнать о породах или просто поздороваться — мы рады услышать вас.",
      name: "Ваше имя",
      email: "Адрес эл. почты",
      subject: "Тема",
      message: "Сообщение",
      subjectDefault: "Выберите тему…",
      topics: [
        "Запрос о щенке",
        "Вязка",
        "Информация о породе",
        "Договориться о визите",
        "Другое",
      ],
      send: "Отправить",
    },
  },
} as const;

type LangTranslations = (typeof translations)[Lang];

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: LangTranslations;
}

const LangContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("dobdog-lang");
    if (saved === "en" || saved === "et" || saved === "ru") {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("dobdog-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
