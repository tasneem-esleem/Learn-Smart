import React from 'react'
import physics from "../image/atom (1) 2.png"
import chemistry from "../image/experiment 1.png"
import biology from "../image/cell 2.png"
import math from "../image/calculating 1.png"
import history from "../image/Group 26711.png"
import geography from "../image/globe 1.png"
import arabic from "../image/Group 26699.png"
import english from "../image/eng 1.png"
import en from "../image/literature 1.png"
import ar from "../image/Group 26709.png"
import historybook  from "../image/history-book (1) 1.png"
import ecologybook from "../image/ecology-book 1.png"
import mathematics from '../image/mathematics 1.png'
import atom from "../image/atom 1.png"
import laboratory from "../image/laboratory (1) 1.png"
import microbiology from "../image/microbiology 1.png"
import english1 from '../image/english 1.png'
import arb from '../image/Group 26710.png'
import biography1 from "../image/biography 1.png"
import world from "../image/world-map 1.png"
import math3 from '../image/mathematics (1) 1.png'
import seesaw from '../image/seesaw 1.png'
import laboratory1 from '../image/laboratory 1.png'
import bacteria from '../image/bacteria 1.png'

export const subjects = [
  // ─── Grade 10 ───────────────────────────────────────────
  {
    id: 1,
    bookId: 6,
    name: "Physics",
    img: physics,
    desc: "The science that studies the laws governing the universe, such as motion, energy, force, electricity, and light.",
    bgColor: "#F3F4F6",
  },
  {
    id: 2,
    bookId: 3,
    name: "Chemistry",
    img: chemistry,
    desc: "The science that studies materials and their components, properties, and the changes that occur to them when they react.",
    bgColor: "#FFFBEB",
  },
  {
    id: 3,
    bookId: 4,
    name: "Biology",
    img: biology,
    desc: "The science that studies living organisms in all their aspects, whether they are cells, plants, animals, or humans themselves.",
    bgColor: "#E0F2FE",
  },
  {
    id: 4,
    bookId: 5,
    name: "Math",
    img: math,
    desc: "The science of numbers, relationships, and patterns is used to understand, analyze, and solve problems logically.",
    bgColor: "#E9FFE6",
  },
  {
    id: 5,
    bookId: 7,
    name: "History",
    img: history,
    desc: "The science that studies past events to understand how societies, states, and civilizations have evolved over time.",
    bgColor: "#F0ECEC",
  },
  {
    id: 6,
    bookId: 8,
    name: "Geography",
    img: geography,
    desc: "The science that studies the Earth, its inhabitants, and natural and human phenomena is what helps us understand the world.",
    bgColor: "#FFE6E6",
  },
  {
    id: 7,
    bookId: 9,
    name: "English",
    img: english,
    desc: "A subject in which we learn to read, write, and speak English, and understand its vocabulary and grammar.",
    bgColor: "#E9FFE6",
  },
  {
    id: 8,
    bookId: 10,
    name: "Arabic",
    img: arabic,
    desc: "A subject in which we learn to read and write Arabic, understand its grammar, express ourselves correctly, and speak correctly.",
    bgColor: "#EEFEF1",
  },

  // ─── Grade 11 Literary ──────────────────────────────────
  {
    id: 9,
    bookId: 13,
    name: "English",
    img: en,
    desc: "A subject in which we learn to read, write, and speak English, and understand its vocabulary and grammar.",
    bgColor: "#FBE8FF",
  },
  {
    id: 10,
    bookId: 26,
    name: "Arabic",
    img: ar,
    desc: "A subject in which we learn to read and write Arabic, understand its grammar, express ourselves correctly, and speak correctly.",
    bgColor: "#E6F2EF",
  },
  {
    id: 11,
    bookId: 11,
    name: "History",
    img: historybook,
    desc: "The science that studies past events to understand how societies, states, and civilizations have evolved over time.",
    bgColor: "#F0ECEC",
  },
  {
    id: 12,
    bookId: 12,
    name: "Geography",
    img: ecologybook,
    desc: "The science that studies the Earth, its inhabitants, and natural and human phenomena is what helps us understand the world.",
    bgColor: "#EBF3FF",
  },

  // ─── Grade 11 Scientific ────────────────────────────────
  {
    id: 13,
    bookId: 16,
    name: "Math",
    img: mathematics,
    desc: "The science of numbers, relationships, and patterns is used to understand, analyze, and solve problems logically.",
    bgColor: "#E6FFFF",
  },
  {
    id: 14,
    bookId: 17,
    name: "Physics",
    img: atom,
    desc: "The science that studies the laws governing the universe, such as motion, energy, force, electricity, and light.",
    bgColor: "#E6FBFF",
    pdfUrl: "https://drive.google.com/file/d/1S9Ne8eHtx661mK-35VZMJpFftw8UlXod/view?usp=sharing"
  },
  {
    id: 15,
    bookId: 14,
    name: "Chemistry",
    img: laboratory,
    desc: "The science that studies materials and their components, properties, and the changes that occur to them when they react.",
    bgColor: "#E6F4E9",
  },
  {
    id: 16,
    bookId: 15,
    name: "Biology",
    img: microbiology,
    desc: "The science that studies living organisms in all their aspects, whether they are cells, plants, animals, or humans themselves.",
    bgColor: "#FEEEF1",
  },

  // ─── Grade 12 Literary ──────────────────────────────────
  {
    id: 17,
    bookId: 20,
    name: "English",
    img: english1,
    desc: "A subject in which we learn to read, write, and speak English, and understand its vocabulary and grammar.",
    bgColor: "#E9FFE6",
  },
  {
    id: 18,
    bookId: 21,
    name: "Arabic",
    img: arb,
    desc: "A subject in which we learn to read and write Arabic, understand its grammar, express ourselves correctly, and speak correctly.",
    bgColor: "#EEFEF1",
  },
  {
    id: 19,
    bookId: 18,
    name: "History",
    img: biography1,
    desc: "The science that studies past events to understand how societies, states, and civilizations have evolved over time.",
    bgColor: "#F0ECEC",
  },
  {
    id: 20,
    bookId: 19,
    name: "Geography",
    img: world,
    desc: "The science that studies the Earth, its inhabitants, and natural and human phenomena is what helps us understand the world.",
    bgColor: "#EBF3FF",
  },

  // ─── Grade 12 Scientific ────────────────────────────────
  {
    id: 21,
    bookId: 23,
    name: "Math",
    img: math3,
    desc: "The science of numbers, relationships, and patterns is used to understand, analyze, and solve problems logically.",
    bgColor: "#E6FFFF",
  },
  {
    id: 22,
    bookId: 24,
    name: "Physics",
    img: seesaw,
    desc: "The science that studies the laws governing the universe, such as motion, energy, force, electricity, and light.",
    bgColor: "#F0FFF8",
  },
  {
    id: 23,
    bookId: 25,
    name: "Chemistry",
    img: laboratory1,
    desc: "The science that studies materials and their components, properties, and the changes that occur to them when they react.",
    bgColor: "#FFF2EB",
  },
  {
    id: 24,
    bookId: 22,
    name: "Biology",
    img: bacteria,
    desc: "The science that studies living organisms in all their aspects, whether they are cells, plants, animals, or humans themselves.",
    bgColor: "#FEFFE6",
  },
]