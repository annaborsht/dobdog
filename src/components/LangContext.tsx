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
      p0: 'The Great Dane, often referred to as the "Apollo of all breeds", is a majestic and noble dog known for its impressive stature, elegant build, and gentle demeanor. Despite its intimidating size, the breed is famous for combining raw physical power with a calm, affectionate spirit, earning it a reputation as a true "gentle giant". Originating from medieval Europe, these dogs were initially bred for hunting large and dangerous game such as wild boars, stags, and even bears, tasks that demanded both courage and strength.',
      p1: 'In the Middle Ages, European nobility relied on large, agile, and courageous dogs to hunt formidable prey across dense forests and open estates. King Frederick II of Denmark imported strong English Mastiffs, which, when crossbred with local German hunting breeds such as the Irish Wolfhound and old English Mastiff lines, formed the genetic basis of the modern Great Dane. These dogs, known as Kammerhunde or "chamber dogs", were given the honor of sleeping in the bedchambers of noblemen and were often adorned with gilded collars as symbols of prestige. By the late 19th century, German breeders formalized the standard under the name "Deutsche Dogge", and in 1880 Germany officially declared it the national breed, distancing it from its earlier English Mastiff associations.',
      p3: "Great Danes are well-balanced and elegant, with a square, muscular build, deep chest, and a smooth, powerful gait that reflects both strength and grace. They have a long, rectangular head, a pronounced stop, and an alert, intelligent expression. Ears may be cropped or left natural and folded. Recognized coat colors include fawn, brindle, black, blue, mantle, and harlequin, each with its own distinct markings. Males typically stand at least 80 cm at the shoulder and weigh between 54–90 kg, while females reach a minimum of 72 cm and weigh 45–59 kg, making the Great Dane one of the tallest dog breeds in the world.",
      p4: "Despite their imposing size, Great Danes are affectionate, friendly, patient, and deeply loyal to their families. They are known for being remarkably gentle with children and the elderly, often described as having a calm, dignified awareness of their own strength around smaller or more vulnerable companions. While they may appear reserved or aloof with strangers at first, unprovoked aggression is not typical of the breed and is considered a serious fault by breed standards. Great Danes thrive on companionship and can suffer from separation anxiety if left alone for long periods, making their calm, sociable nature best suited to families who can offer consistent attention.",
      p5: "Owning a Great Dane requires genuine commitment, planning, and financial readiness. A carefully balanced diet with controlled calcium and protein levels, along with limited high-impact exercise during their rapid growth phase (roughly 6 to 18 months), is essential to prevent developmental joint issues such as hip and elbow dysplasia. Regular veterinary check-ups are a must, as the breed is prone to serious health concerns including gastric torsion (bloat), dilated cardiomyopathy, wobbler syndrome, and bone cancer. Due to their large frame, Great Danes have a relatively short lifespan of around 7 to 10 years. Grooming needs are minimal thanks to their short coat, though regular nail trims and dental care are important given their size and weight.",
      p6: "The Great Dane combines grandeur with gentleness, making it one of the most beloved and recognizable breeds worldwide. Their loyalty, affection, and surprisingly calm temperament make them exceptional family companions, provided owners are prepared for the space, cost, and dedicated care their size and health needs demand. For the right household, a Great Dane offers not just a striking presence but a devoted and loving companion for life.",
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
      p1: `Freya is the heart of DobDog Elegance — a magnificent Dobermann whose presence fills every room.`,
      p2: `Named after the Norse goddess of love and beauty, Freya lives up to her name completely. She is at once elegant, powerful, and full of vibrant character — a dog who stands out both in appearance and in nature.`,
      p3: `Freya comes from the renowned Latvian kennel Happy Fly, where she was born as a result of breeder Valentina Sapolgina's dedicated breeding work. She is an exceptional female, whose energy, drive, attentiveness, and motivation seem enough for several dogs. Everything she does, she does with her whole heart.`,
      p4: `Her versatility is also confirmed by her achievements. In the show ring, Freya has been remarkably successful, effortlessly earning champion titles in seven countries. She works with the same enthusiasm and dedication in obedience training, where her willingness to cooperate, ability to learn, and desire to please her handler make every session enjoyable.`,
      p5: `In her free time, however, Freya always finds her way to the sunniest spot on the couch, where she rests contentedly until it's time for the evening walk.`,
      p6: `Freya is the foundation on which DobDog Elegance is built — and she knows it.`,
      p7: `It is precisely her dignified nature, excellent work ethic, excellent health, and willingness to cooperate with people that are the values we want to carry forward in our breeding work. Freya is not just our first breeding dog — she is the heart, inspiration, and standard of DobDog Elegance, one we strive toward when raising future generations as well.`,
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
      h2: "Füüsilised omadused",
      h3: "Iseloom ja käitumine",
      h4: "Hooldus ja terviseaspektid",
      h5: "Kokkuvõte",
      p0: 'Saksa dogi, keda tihti nimetatakse "kõigi tõugude Apolloks", on majesteetlik ja üllas koer, mis on tuntud oma muljetavaldava kasvu, elegantse kehaehituse ja leebe olemuse poolest. Vaatamata hirmuäratavale suurusele on tõug tuntud selle poolest, et ühendab endas tohutu füüsilise jõu ja rahuliku, hella iseloomu, mis on talle toonud "õrna hiiglase" maine. Tõug pärineb keskaegsest Euroopast, kus neid koeri aretati algselt suurulukite, nagu metssigade, hirvede ja isegi karude jahtimiseks – ülesanded, mis nõudsid nii julgust kui ka jõudu.',
      p1: 'Keskajal toetusid Euroopa aadlikud tihedates metsades ja avarates mõisamaades toimuva jahi ajal suurtele, kärmetele ja vaprattele koertele. Taani kuningas Frederick II importis tugevaid inglise mastife, kes ristati kohalike Saksa jahikoertõugudega, nagu iiri hurt ja vana inglise mastifi liinid, luues nõnda tänapäeva Saksa dogi geneetilise aluse. Neid koeri, keda kutsuti Kammerhunde ehk "kambrikoerteks", peeti au sees – neil lubati magada aadlike magamistubades ning neid ehiti sageli kuldsete kaelarihmadega, mis sümboliseerisid prestiiži. 19. sajandi lõpuks vormistasid Saksa aretajad tõustandardi nime "Deutsche Dogge" all ning 1880. aastal kuulutas Saksamaa selle ametlikult oma rahvustõuks, eraldudes varasemast seosest inglise mastifiga.',
      p3: "Saksa dogid on hästi tasakaalustatud ja elegantsed, ruudukujulise ja lihaselise kehaehitusega, sügava rindkere ning sujuva, jõulise kõnnakuga, mis peegeldab nii tugevust kui ka graatsilisust. Neil on pikk, ristkülikukujuline pea, selgelt eristuv nurgatõus ning tähelepanelik, aruka pilguga ilme. Kõrvad võivad olla kärbitud või looduslikult voltis. Tunnustatud karvavärvid hõlmavad kollaspruuni (fawn), triibulist (brindle), musta, sinist, mantlivärvi ja harlekiin-mustrit, millest igaühel on oma iseloomulikud märgistused. Isasloomad on tavaliselt vähemalt 80 cm kõrgused turjani ja kaaluvad 54–90 kg, emasloomad aga vähemalt 72 cm ja kaaluvad 45–59 kg, mistõttu on Saksa dogi üks maailma kõrgemaid koeratõuge.",
      p4: "Vaatamata oma muljetavaldavale suurusele on Saksa dogid hellad, sõbralikud, kannatlikud ja oma perele sügavalt truud. Nad on tuntud oma erakordse õrnuse poolest laste ja eakate suhtes ning neid kirjeldatakse sageli kui koeri, kes on rahulikult ja väärikalt teadlikud oma jõust väiksemate või haavatavamate kaaslaste läheduses. Kuigi nad võivad võõraste suhtes esmapilgul tunduda tagasihoidlikud või ükskõiksed, ei ole provotseerimata agressiivsus sellele tõule omane ning seda peetakse tõustandardite kohaselt tõsiseks veaks. Saksa dogid vajavad seltskonda ning võivad pikaajalisel üksijätmisel kannatada lahusoleku ärevuse all, mistõttu sobib nende rahulik ja seltsiv olemus kõige paremini peredele, kes suudavad pakkuda järjepidevat tähelepanu.",
      p5: "Saksa dogi omamine nõuab tõsist pühendumust, planeerimist ja rahalist valmisolekut. Hoolikalt tasakaalustatud toitumine, kus kaltsiumi ja valgu tase on kontrolli all, ning piiratud intensiivne treening kiire kasvu perioodil (umbes 6 kuni 18 kuu vanuses) on hädavajalikud, et vältida liigeste arenguhäireid, nagu puusa- ja küünarliigese düsplaasia. Regulaarsed loomaarsti visiidid on kohustuslikud, kuna tõug on altis tõsistele terviseprobleemidele, sealhulgas mao väändumisele (bloat), laienenud kardiomüopaatiale, wobbler-sündroomile ja luuvähile. Suure kehaehituse tõttu on Saksa dogide eluiga suhteliselt lühike, jäädes tavaliselt 7–10 aasta piiresse. Karvkatte hooldus on lühikese karva tõttu minimaalne, kuid regulaarne küünte lõikamine ja hammaste hooldus on nende suuruse ja kaalu tõttu olulised.",
      p6: "Saksa dogi ühendab endas suursugususe ja hellusega, mistõttu on ta üks maailma armastatumaid ja äratuntavamaid tõuge. Nende truudus, kiindumus ja üllatavalt rahulik iseloom teevad neist suurepärased pereliikmed, eeldusel et omanikud on valmis pakkuma nende suurusest ja terviseseisundist tulenevat vajalikku ruumi, kulutusi ja hoolt. Sobivas kodus pakub Saksa dogi mitte ainult muljetavaldavat väljanägemist, vaid ka pühendunud ja armastavat kaaslast kogu eluks.",
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
      p1: `Freya on DobDog Elegance'i süda — suurejooneline dobermann, kelle kohalolek täidab iga ruumi.`,
      p2: `Nimetatud Põhja mütoloogia armastuse ja ilu jumalanna järgi, vastab Freya oma nimele täielikult. Ta on ühtaegu elegantne, jõuline ja särava iseloomuga – koer, kes paistab silma nii oma välimuse kui ka olemusega.`,
      p3: `Freya on pärit Läti tunnustatud kennelist Happy Fly, kus ta sündis kasvataja Valentina Sapolgina pühendunud aretustöö tulemusena. Ta on erakordne emane, kelle energiat, tegutsemistahet, tähelepanuvõimet ja motivatsiooni jaguks justkui mitme koera jaoks. Kõik, mida ta teeb, teeb ta kogu südamega.`,
      p4: `Tema mitmekülgsust kinnitavad ka saavutused. Näituseringides on Freya olnud silmapaistvalt edukas, saavutades mängleva kergusega seitsme riigi tšempionitiitlid. Sama suure innu ja pühendumusega töötab ta kuulekustreeningutel, kus tema koostöötahe, õppimisvõime ja soov oma inimest rõõmustada muudavad iga treeningu nauditavaks.`,
      p5: `Vabal ajal leiab Freya aga alati tee kõige päikeselisema diivanikoha juurde, kus ta mõnuga puhkab, kuni saabub õhtuse jalutuskäigu aeg.`,
      p6: `Freya on vundament, millele DobDog Elegance on ehitatud — ja ta teab seda.`,
      p7: `Just tema väärikas olemus, suurepärane töötahe, suurepärane tervis ning soov teha koostööd inimesega on väärtused, mida soovime oma aretustöös edasi kanda. Freya ei ole ainult meie esimene aretuskoer – ta on DobDog Elegance'i süda, inspiratsioon ja standard, mille poole püüdleme ka tulevaste põlvkondade kasvatamisel.`,
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
      h2: "Физические характеристики",
      h3: "Темперамент и поведение",
      h4: "Уход и вопросы здоровья",
      h5: "Заключение",
      p0: 'Немецкий дог, которого часто называют "Аполлоном среди всех пород", — это величественная и благородная собака, известная своим впечатляющим ростом, элегантным телосложением и мягким нравом. Несмотря на устрашающие размеры, порода славится сочетанием невероятной физической силы со спокойным, ласковым характером, за что получила репутацию настоящего "нежного гиганта". Порода зародилась в средневековой Европе, где этих собак изначально разводили для охоты на крупную и опасную дичь — кабанов, оленей и даже медведей, что требовало от них и смелости, и силы.',
      p1: 'В Средние века европейская знать полагалась на крупных, ловких и отважных собак для охоты в густых лесах и на обширных угодьях. Король Дании Фредерик II завёз сильных английских мастифов, которые при скрещивании с местными немецкими охотничьими породами, такими как ирландский волкодав и старые линии английского мастифа, заложили генетическую основу современного немецкого дога. Этих собак, называемых Kammerhunde, или "комнатными собаками", удостаивали чести спать в опочивальнях знати, а также украшали позолоченными ошейниками в знак престижа. К концу XIX века немецкие заводчики закрепили стандарт породы под названием "Deutsche Dogge", а в 1880 году Германия официально объявила её национальной породой, дистанцировавшись от прежней связи с английским мастифом.',
      p3: "Немецкие доги отличаются гармоничным и элегантным телосложением: квадратный, мускулистый корпус, глубокая грудная клетка и плавная, мощная походка, отражающая одновременно силу и грацию. У них длинная прямоугольная голова, выраженный переход ото лба к морде и внимательное, умное выражение морды. Уши могут быть купированными или естественными, свисающими. К признанным окрасам относятся палевый, тигровый, чёрный, голубой, мантиевый и арлекин, каждый со своим характерным рисунком. Кобели обычно достигают в холке не менее 80 см и весят от 54 до 90 кг, суки — не менее 72 см при весе 45–59 кг, что делает немецкого дога одной из самых высоких пород собак в мире.",
      p4: "Несмотря на внушительные размеры, немецкие доги ласковы, дружелюбны, терпеливы и глубоко преданы своей семье. Они известны исключительной мягкостью по отношению к детям и пожилым людям — часто отмечают, что эти собаки спокойно и с достоинством осознают собственную силу рядом с более мелкими или уязвимыми существами. Хотя с незнакомцами они поначалу могут казаться сдержанными или отстранёнными, немотивированная агрессия породе не свойственна и считается серьёзным недостатком по стандартам породы. Немецкие доги нуждаются в обществе и могут страдать от тревоги разлуки при долгом одиночестве, поэтому их спокойный, общительный характер лучше всего подходит семьям, способным уделять им постоянное внимание.",
      p5: "Содержание немецкого дога требует настоящей ответственности, планирования и финансовой готовности. Тщательно сбалансированное питание с контролируемым уровнем кальция и белка, а также ограниченные высокоинтенсивные нагрузки в период активного роста (примерно с 6 до 18 месяцев) необходимы для предотвращения проблем с суставами, таких как дисплазия тазобедренных и локтевых суставов. Регулярные визиты к ветеринару обязательны, поскольку порода предрасположена к серьёзным заболеваниям, включая заворот желудка (вздутие), дилатационную кардиомиопатию, синдром воблера и костный рак. Из-за крупного телосложения продолжительность жизни немецких догов относительно невелика — обычно от 7 до 10 лет. Уход за шерстью минимален благодаря её короткой длине, однако регулярная стрижка когтей и уход за зубами важны с учётом размера и веса собаки.",
      p6: "Немецкий дог сочетает в себе величие и нежность, что делает его одной из самых любимых и узнаваемых пород в мире. Их преданность, ласковый нрав и на удивление спокойный темперамент делают их прекрасными компаньонами для семьи — при условии, что владельцы готовы обеспечить пространство, расходы и заботу, которых требуют их размер и здоровье. В подходящем доме немецкий дог станет не просто впечатляющим украшением, а преданным и любящим спутником на всю жизнь.",
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
      p1: `Фрея — сердце DobDog Elegance, великолепный доберман, чьё присутствие наполняет собой любое помещение.`,
      p2: `Названная в честь богини любви и красоты из скандинавской мифологии, Фрея полностью соответствует своему имени. Она одновременно элегантна, мощна и обладает ярким характером — собака, выделяющаяся как своей внешностью, так и своей натурой.`,
      p3: `Фрея происходит из известного латвийского питомника Happy Fly, где она родилась благодаря самоотверженной племенной работе заводчицы Валентины Сапольгиной. Она незаурядная сука, чьей энергии, целеустремлённости, внимательности и мотивации хватило бы на нескольких собак. Всё, что она делает, она делает от всего сердца.`,
      p4: `Её разносторонность подтверждают и достижения. На выставочных рингах Фрея добилась выдающихся успехов, играючи завоевав титулы чемпиона семи стран. С таким же энтузиазмом и самоотдачей она занимается на тренировках по послушанию, где её готовность к сотрудничеству, способность к обучению и желание радовать своего хозяина делают каждое занятие увлекательным.`,
      p5: `В свободное время Фрея всегда находит дорогу к самому солнечному месту на диване, где она с удовольствием отдыхает до наступления времени вечерней прогулки.`,
      p6: `Фрея — фундамент, на котором построен DobDog Elegance, и она это знает.`,
      p7: `Именно её достоинство, отличная работоспособность, крепкое здоровье и стремление к сотрудничеству с человеком — те качества, которые мы хотим передавать в нашей племенной работе. Фрея — не просто наша первая племенная собака: она сердце, вдохновение и эталон DobDog Elegance, к которому мы стремимся и при выращивании будущих поколений.`,
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
