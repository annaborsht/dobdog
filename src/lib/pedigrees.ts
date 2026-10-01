import type { PedigreeEntry } from "@/components/PedigreeTree";

// Pedigree for the 'A' litter (sire Korifey Vanquish x dam Fortuna Freya
// Happy Fly) — source: https://register.kennelliit.ee/dogs/400071
export const A_LITTER_PEDIGREE: PedigreeEntry[] = [
  // Sire's side
  {
    gen: 1,
    side: "sire",
    row: "1 / span 4",
    reg: "KCAX02483802",
    name: "Korifey Vanquish",
  },
  {
    gen: 2,
    side: "sire",
    row: "1 / span 2",
    reg: "RKF4891873",
    name: "Sant Kreal Bellator",
  },
  {
    gen: 2,
    side: "sire",
    row: "3 / span 2",
    reg: "KCAX0901739",
    name: "Saltiga Iz Zoosfery",
  },
  {
    gen: 3,
    side: "sire",
    row: "1",
    reg: "ROI14/162",
    name: "Ebay Del Tibur",
  },
  {
    gen: 3,
    side: "sire",
    row: "2",
    reg: "RKF3392185",
    name: "Sant Kreal Centara",
  },
  {
    gen: 3,
    side: "sire",
    row: "3",
    reg: "LCCLOF281140/12535",
    name: "Gangster Dandias De La Villa Valiano",
  },
  {
    gen: 3,
    side: "sire",
    row: "4",
    reg: "RKF3378173",
    name: "Holland Rose Iz Zoosfery",
  },

  // Dam's side
  {
    gen: 1,
    side: "dam",
    row: "5 / span 4",
    reg: "EST-01040/23",
    name: "Fortuna Freya Happy Fly",
  },
  {
    gen: 2,
    side: "dam",
    row: "5 / span 2",
    reg: "LŠVKD2983/20",
    name: "Teraline El Seras",
  },
  {
    gen: 2,
    side: "dam",
    row: "7 / span 2",
    reg: "LV-DB-1937/18",
    name: "Teraline Gwendolin Happy Fly",
  },
  {
    gen: 3,
    side: "dam",
    row: "5",
    reg: "LOE2369015",
    name: "Legend Goez on Astor",
  },
  {
    gen: 3,
    side: "dam",
    row: "6",
    reg: "RKF4767845",
    name: "Teraline Arwen",
  },
  {
    gen: 3,
    side: "dam",
    row: "7",
    reg: "RKF4162750",
    name: "Teraline Rohan",
  },
  {
    gen: 3,
    side: "dam",
    row: "8",
    reg: "RKF4233638",
    name: "Teraline Sapphira",
  },
];
