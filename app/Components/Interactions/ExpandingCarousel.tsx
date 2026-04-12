'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

interface StageStats {
  apps: number
  goals: number
  avg: string
  conv: string
}

interface GoalsByStage {
  groupStage: StageStats
  roundOf16: StageStats
  quarterFinal: StageStats
  semiFinal: StageStats
  final: StageStats
  total: StageStats
  knockoutGoals: number
  knockoutOf: number
  knockoutPct: string
}

interface UCLPlayer {
  id: number
  rank: number
  firstName: string
  lastName: string
  flag: string
  country: string
  club: string
  position: string
  age: number
  clubStripColor: string
  uclSeasons: number
  uclGoals: number
  uclGoalsLabel: string
  uclAssists: number
  uclAppearances: number
  goalsPerGame: string
  wins: number
  uclTitles: number
  winRate: string
  hatTricks: number
  finals: number
  goalsByStage: GoalsByStage
}

// ─── Data ────────────────────────────────────────────────────────────────────

const uclTopScorers: UCLPlayer[] = [
  {
    id: 1, rank: 1, firstName: "Cristiano", lastName: "Ronaldo",
    flag: "🇵🇹", country: "Portugal", club: "Multiple Clubs",
    position: "FW", age: 38, clubStripColor: "#FEBE10", uclSeasons: 19,
    uclGoals: 140, uclGoalsLabel: "All-time record", uclAssists: 40, uclAppearances: 183,
    goalsPerGame: "0.76", wins: 94, uclTitles: 5, winRate: "67%", hatTricks: 8, finals: 8,
    goalsByStage: {
      groupStage: { apps: 119, goals: 67, avg: "0.56", conv: "18%" },
      roundOf16: { apps: 36, goals: 25, avg: "0.69", conv: "21%" },
      quarterFinal: { apps: 28, goals: 22, avg: "0.79", conv: "24%" },
      semiFinal: { apps: 22, goals: 17, avg: "0.77", conv: "23%" },
      final: { apps: 11, goals: 9, avg: "0.82", conv: "25%" },
      total: { apps: 183, goals: 140, avg: "0.76", conv: "20%" },
      knockoutGoals: 73, knockoutOf: 140, knockoutPct: "52%",
    },
  },
  {
    id: 2, rank: 2, firstName: "Lionel", lastName: "Messi",
    flag: "🇦🇷", country: "Argentina", club: "Barcelona / PSG",
    position: "FW", age: 36, clubStripColor: "#A50044", uclSeasons: 18,
    uclGoals: 129, uclGoalsLabel: "2nd all-time", uclAssists: 39, uclAppearances: 169,
    goalsPerGame: "0.76", wins: 92, uclTitles: 4, winRate: "68%", hatTricks: 8, finals: 5,
    goalsByStage: {
      groupStage: { apps: 107, goals: 72, avg: "0.67", conv: "19%" },
      roundOf16: { apps: 34, goals: 22, avg: "0.65", conv: "20%" },
      quarterFinal: { apps: 24, goals: 19, avg: "0.79", conv: "23%" },
      semiFinal: { apps: 14, goals: 11, avg: "0.79", conv: "22%" },
      final: { apps: 8, goals: 5, avg: "0.63", conv: "17%" },
      total: { apps: 169, goals: 129, avg: "0.76", conv: "20%" },
      knockoutGoals: 57, knockoutOf: 129, knockoutPct: "44%",
    },
  },
  {
    id: 3, rank: 3, firstName: "Robert", lastName: "Lewandowski",
    flag: "🇵🇱", country: "Poland", club: "Bayern / Barcelona",
    position: "ST", age: 35, clubStripColor: "#DC052D", uclSeasons: 16,
    uclGoals: 101, uclGoalsLabel: "3rd all-time", uclAssists: 23, uclAppearances: 131,
    goalsPerGame: "0.77", wins: 72, uclTitles: 2, winRate: "64%", hatTricks: 5, finals: 3,
    goalsByStage: {
      groupStage: { apps: 79, goals: 52, avg: "0.66", conv: "21%" },
      roundOf16: { apps: 24, goals: 22, avg: "0.92", conv: "28%" },
      quarterFinal: { apps: 16, goals: 16, avg: "1.00", conv: "30%" },
      semiFinal: { apps: 8, goals: 8, avg: "1.00", conv: "29%" },
      final: { apps: 4, goals: 3, avg: "0.75", conv: "22%" },
      total: { apps: 131, goals: 101, avg: "0.77", conv: "24%" },
      knockoutGoals: 49, knockoutOf: 101, knockoutPct: "49%",
    },
  },
  {
    id: 4, rank: 4, firstName: "Karim", lastName: "Benzema",
    flag: "🇫🇷", country: "France", club: "Real Madrid",
    position: "ST", age: 36, clubStripColor: "#FEBE10", uclSeasons: 19,
    uclGoals: 90, uclGoalsLabel: "4th all-time", uclAssists: 27, uclAppearances: 162,
    goalsPerGame: "0.56", wins: 101, uclTitles: 5, winRate: "71%", hatTricks: 3, finals: 6,
    goalsByStage: {
      groupStage: { apps: 98, goals: 44, avg: "0.45", conv: "15%" },
      roundOf16: { apps: 32, goals: 18, avg: "0.56", conv: "18%" },
      quarterFinal: { apps: 16, goals: 14, avg: "0.88", conv: "27%" },
      semiFinal: { apps: 10, goals: 10, avg: "1.00", conv: "30%" },
      final: { apps: 6, goals: 4, avg: "0.67", conv: "20%" },
      total: { apps: 162, goals: 90, avg: "0.56", conv: "19%" },
      knockoutGoals: 46, knockoutOf: 90, knockoutPct: "51%",
    },
  },
  {
    id: 5, rank: 5, firstName: "Raúl", lastName: "González",
    flag: "🇪🇸", country: "Spain", club: "Real Madrid",
    position: "FW", age: 46, clubStripColor: "#FEBE10", uclSeasons: 16,
    uclGoals: 71, uclGoalsLabel: "Former record", uclAssists: 29, uclAppearances: 142,
    goalsPerGame: "0.50", wins: 82, uclTitles: 3, winRate: "62%", hatTricks: 2, finals: 3,
    goalsByStage: {
      groupStage: { apps: 84, goals: 38, avg: "0.45", conv: "14%" },
      roundOf16: { apps: 26, goals: 14, avg: "0.54", conv: "17%" },
      quarterFinal: { apps: 18, goals: 11, avg: "0.61", conv: "18%" },
      semiFinal: { apps: 8, goals: 6, avg: "0.75", conv: "21%" },
      final: { apps: 6, goals: 2, avg: "0.33", conv: "10%" },
      total: { apps: 142, goals: 71, avg: "0.50", conv: "16%" },
      knockoutGoals: 33, knockoutOf: 71, knockoutPct: "46%",
    },
  },
]

// ─── Image paths ─────────────────────────────────────────────────────────────

const playerImages: Record<number, string> = {
  1: "/micro-interactions/top-scorers/1.png",
  2: "/micro-interactions/top-scorers/2.png",
  3: "/micro-interactions/top-scorers/3.png",
  4: "/micro-interactions/top-scorers/4.png",
  5: "/micro-interactions/top-scorers/5.png",
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SPRING = { type: "spring", stiffness: 180, damping: 25 } as const

type StageKey = "groupStage" | "roundOf16" | "quarterFinal" | "semiFinal" | "final"

const STAGE_ROWS: { key: StageKey; label: string; highlight: boolean }[] = [
  { key: "groupStage", label: "Group Stage", highlight: true },
  { key: "roundOf16", label: "Round of 16", highlight: false },
  { key: "quarterFinal", label: "Quarter-Final", highlight: true },
  { key: "semiFinal", label: "Semi-Final", highlight: false },
  { key: "final", label: "Final", highlight: true },
]

// Grid row heights
// Row 1: cards (357px) | Row 2: separator (36px) | Row 3: detail panel (366px)
// Active card spans rows 1–3 → total height = 357 + 36 + 366 = 759px
const CARD_H = 357
const SEP_H = 36
const DETAIL_H = 366

// ─── Component ───────────────────────────────────────────────────────────────

const ExpandingCarousel = () => {
  const [players, setPlayers] = useState(uclTopScorers)

  const handleClick = (index: number) => {
    setPlayers(prev => [...prev.slice(index), ...prev.slice(0, index)])
  }

  const active = players[0]
  const gs = active.goalsByStage

  return (
    <div className="w-screen min-h-screen bg-[#0a0e1a] flex flex-col px-10 pt-10 pb-8 gap-6">

      {/* ── Header ── */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-white text-[36px] font-bold leading-none tracking-[-2px] uppercase">
            Top Scorers — All Time
          </p>
          <p className="text-[#f5a623] text-[24px] font-bold leading-none tracking-[2px] mt-1">
            UEFA CHAMPIONS LEAGUE
          </p>
        </div>
        <div className="bg-[#1d4ed8] rounded-full px-4 h-[22px] flex items-center">
          <span className="text-white text-[9px] font-bold">All Time</span>
        </div>
      </div>

      {/*
        ── CSS Grid layout ──
        Columns: [300px hero] [1fr] [1fr] [1fr] [1fr]
        Rows:    [357px cards] [36px separator] [366px detail]

        Active card  → col 1, rows 1-3  (spans full height = 759px, physically expands)
        Inactive cards → col 2-5, row 1 (357px, shrink to fit)
        Separator    → col 2-6, row 2
        Detail panel → col 2-6, row 3
      */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "360px repeat(4, 1fr)",
          gridTemplateRows: `${CARD_H}px ${SEP_H}px ${DETAIL_H}px`,
          columnGap: 36,
          rowGap: 0,
        }}
      >

        {/* ── Player cards (all 5 in the same grid) ── */}
        {players.map((player, index) => {
          const isActive = index === 0
          return (
            <motion.div
              key={player.id}
              layout
              transition={SPRING}
              onClick={!isActive ? () => handleClick(index) : undefined}
              className="relative rounded-xl overflow-hidden select-none"
              style={{
                gridColumn: isActive ? 1 : index + 1,
                gridRow: isActive ? "1 / 4" : 1,
                cursor: isActive ? "default" : "pointer",
              }}
              {...(!isActive && {
                whileHover: { scale: 1.025, transition: { duration: 0.15 } },
              })}
            >
              {/* Photo — always present */}
              <img
                src={playerImages[player.id]}
                alt={player.lastName}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              {/* ── Active/hero overlay ── */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {/* Top-to-bottom dark gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(10,14,26,0.95) 0%, rgba(10,14,26,0.3) 40%, rgba(10,14,26,0) 100%)",
                      }}
                    />
                    {/* Name pill at bottom */}
                    <div className="absolute bottom-4 left-3 right-3">
                      <div className="bg-[rgba(10,14,26,0.72)] rounded-xl px-4 py-3 flex items-stretch gap-3">
                        <div className="w-[3px] rounded-sm bg-[#f5a623] flex-shrink-0" />
                        <div>
                          <p className="text-white text-[22px] font-bold leading-tight">{player.firstName}</p>
                          <p className="text-[#f5a623] text-[22px] font-bold leading-tight">{player.lastName}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Inactive/small-card overlay ── */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    {/* Dark scrim */}
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)]" />
                    {/* Bottom-to-top gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,14,26,0.95) 0%, rgba(10,14,26,0.5) 45%, rgba(10,14,26,0) 100%)",
                      }}
                    />
                    {/* Club colour strip — top */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ backgroundColor: player.clubStripColor }}
                    />
                    {/* Rank badge */}
                    <div className="absolute top-2.5 left-2.5 size-[28px] bg-[#1e2d4a] rounded-[14px] flex items-center justify-center">
                      <span className="text-[#9ca3af] text-[10px] font-bold">#{player.rank}</span>
                    </div>
                    {/* Select hint */}
                    <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[rgba(245,166,35,0.5)] text-[8px] font-bold tracking-[1.5px] whitespace-nowrap">
                      ↓ SELECT
                    </p>
                    {/* Bottom info */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <p className="text-white text-[15px] font-bold">{player.lastName}</p>
                        <p className="text-[#9ca3af] text-[10px]">{player.country}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#f5a623] text-[28px] font-bold leading-none">{player.uclGoals}</p>
                        <p className="text-[rgba(245,166,35,0.65)] text-[8px] font-bold tracking-wider">UCL G</p>
                      </div>
                    </div>
                    {/* Club colour accent — bottom */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: `${player.clubStripColor}99` }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {/* ── Gold separator (row 2, cols 2-6) ── */}
        <div
          style={{ gridColumn: "2 / 6", gridRow: 2 }}
          className="flex items-center"
        >
          <div className="h-[2px] w-full bg-[rgba(245,166,35,0.25)]" />
        </div>

        {/* ── Detail panel (row 3, cols 2-6) ── */}
        <div style={{ gridColumn: "2 / 6", gridRow: 3 }} className="h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0d1120] rounded-xl overflow-hidden flex h-full"
            >
              {/* ── Left identity panel ── */}
              <div className="w-[280px] bg-[#0a0e1a] relative flex-shrink-0 px-5 py-5">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#f5a623] rounded-l-xl" />
                <div
                  className="absolute right-0 top-5 bottom-5 w-[3px]"
                  style={{ backgroundColor: `${active.clubStripColor}99` }}
                />
                <p className="text-[#f5a623] text-[9px] font-bold tracking-[2px] mb-3">SELECTED PLAYER</p>
                <div className="size-8 bg-[#f5a623] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-[#0a0e1a] text-[11px] font-bold">#{active.rank}</span>
                </div>
                <p className="text-white text-[28px] font-bold leading-tight">{active.firstName}</p>
                <p className="text-[#f5a623] text-[28px] font-bold leading-tight mb-2">{active.lastName}</p>
                <p className="text-[#9ca3af] text-[11px] mb-3">
                  {active.flag}&nbsp;&nbsp;{active.country}&nbsp;&nbsp;·&nbsp;&nbsp;{active.club}
                </p>
                <div className="flex gap-2 mb-5">
                  <div className="bg-[#1e2d4a] rounded-xl px-3 h-[22px] flex items-center">
                    <span className="text-[#f5a623] text-[10px] font-bold">{active.position}</span>
                  </div>
                  <div className="bg-[#1e2d4a] rounded-xl px-3 h-[22px] flex items-center">
                    <span className="text-[#9ca3af] text-[10px] font-medium">Age {active.age}</span>
                  </div>
                </div>
                <p className="text-[#9ca3af] text-[8px] font-bold tracking-[1.5px] mb-1">UCL SEASONS</p>
                <p className="text-white text-[32px] font-bold">{active.uclSeasons}</p>
              </div>

              {/* ── Middle stats panel ── */}
              <div className="flex-1 border-l border-[#1e2d4a] px-5 py-5 min-w-0 flex flex-col">
                <p className="text-[#f5a623] text-[9px] font-bold tracking-[2px] mb-2">UCL CAREER STATS</p>
                <div className="h-px bg-[#1e2d4a] mb-4" />
                {/* Big 3 */}
                <div className="flex mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#f5a623] text-[36px] font-bold leading-none">{active.uclGoals}</p>
                    <p className="text-white text-[10px] font-semibold mt-2">UCL Goals</p>
                    <p className="text-[#9ca3af] text-[9px]">{active.uclGoalsLabel}</p>
                  </div>
                  <div className="w-px bg-[#1e2d4a] mx-5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[36px] font-bold leading-none">{active.uclAssists}</p>
                    <p className="text-white text-[10px] font-semibold mt-2">UCL Assists</p>
                    <p className="text-[#9ca3af] text-[9px]">Career total</p>
                  </div>
                  <div className="w-px bg-[#1e2d4a] mx-5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[36px] font-bold leading-none">{active.uclAppearances}</p>
                    <p className="text-white text-[10px] font-semibold mt-2">Appearances</p>
                    <p className="text-[#9ca3af] text-[9px]">UCL matches</p>
                  </div>
                </div>
                <div className="h-px bg-[#1e2d4a] mb-4" />
                {/* Small stats row 1 */}
                <div className="flex mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[22px] font-bold">{active.goalsPerGame}</p>
                    <p className="text-[#9ca3af] text-[9px] font-medium mt-1">Goals / Game</p>
                  </div>
                  <div className="w-px bg-[#1e2d4a] mx-5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[22px] font-bold">{active.wins}</p>
                    <p className="text-[#9ca3af] text-[9px] font-medium mt-1">Wins</p>
                  </div>
                  <div className="w-px bg-[#1e2d4a] mx-5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[22px] font-bold">{active.uclTitles}</p>
                    <p className="text-[#9ca3af] text-[9px] font-medium mt-1">UCL Titles</p>
                  </div>
                </div>
                {/* Small stats row 2 */}
                <div className="flex">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[22px] font-bold">{active.winRate}</p>
                    <p className="text-[#9ca3af] text-[9px] font-medium mt-1">Win Rate</p>
                  </div>
                  <div className="w-px bg-[#1e2d4a] mx-5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[22px] font-bold">{active.hatTricks}</p>
                    <p className="text-[#9ca3af] text-[9px] font-medium mt-1">Hat-tricks</p>
                  </div>
                  <div className="w-px bg-[#1e2d4a] mx-5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[22px] font-bold">{active.finals}</p>
                    <p className="text-[#9ca3af] text-[9px] font-medium mt-1">Finals</p>
                  </div>
                </div>
              </div>

              {/* ── Goals by stage panel ── */}
              <div className="w-[340px] border-l border-[#1e2d4a] px-5 py-5 flex-shrink-0 flex flex-col">
                <p className="text-[#f5a623] text-[9px] font-bold tracking-[2px] mb-2">GOALS BY STAGE</p>
                {/* Table header */}
                <div className="bg-[#1e2d4a] rounded-md h-[26px] flex items-center flex-shrink-0 mb-0.5">
                  <span className="text-[#9ca3af] text-[9px] font-bold tracking-wider flex-1 pl-2">Stage</span>
                  <span className="text-[#f5a623] text-[9px] font-bold tracking-wider w-10 text-right pr-2">Apps</span>
                  <span className="text-[#f5a623] text-[9px] font-bold tracking-wider w-10 text-right pr-2">Goals</span>
                  <span className="text-[#f5a623] text-[9px] font-bold tracking-wider w-10 text-right pr-2">Avg</span>
                  <span className="text-[#f5a623] text-[9px] font-bold tracking-wider w-12 text-right pr-2">Conv%</span>
                </div>
                {/* Stage rows */}
                {STAGE_ROWS.map(({ key, label, highlight }, i) => {
                  const data = gs[key]
                  return (
                    <div key={key}>
                      <div className={`flex items-center h-[34px] rounded relative ${highlight ? "bg-[rgba(13,17,32,0.6)]" : ""}`}>
                        {highlight && (
                          <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#f5a623] rounded-sm" />
                        )}
                        <span className={`text-[11px] flex-1 pl-2 ${highlight ? "text-white font-semibold" : "text-[#9ca3af] font-medium"}`}>
                          {label}
                        </span>
                        <span className="text-[#9ca3af] text-[11px] font-medium w-10 text-right pr-2">{data.apps}</span>
                        <span className="text-[#f5a623] text-[12px] font-bold w-10 text-right pr-2">{data.goals}</span>
                        <span className="text-white text-[11px] font-medium w-10 text-right pr-2">{data.avg}</span>
                        <span className="text-[#10b981] text-[11px] font-medium w-12 text-right pr-2">{data.conv}</span>
                      </div>
                      {i < STAGE_ROWS.length - 1 && (
                        <div className="h-px bg-[rgba(30,45,74,0.5)]" />
                      )}
                    </div>
                  )
                })}
                {/* Total */}
                <div className="h-[2px] bg-[rgba(245,166,35,0.4)] mt-1 mb-1 flex-shrink-0" />
                <div className="bg-[#1a2340] rounded h-[28px] flex items-center flex-shrink-0">
                  <span className="text-[#f5a623] text-[9px] font-bold tracking-[1.5px] flex-1 pl-2">TOTAL</span>
                  <span className="text-white text-[11px] font-bold w-10 text-right pr-2">{gs.total.apps}</span>
                  <span className="text-[#f5a623] text-[13px] font-bold w-10 text-right pr-2">{gs.total.goals}</span>
                  <span className="text-white text-[11px] font-bold w-10 text-right pr-2">{gs.total.avg}</span>
                  <span className="text-[#10b981] text-[11px] font-bold w-12 text-right pr-2">{gs.total.conv}</span>
                </div>
                {/* Knockout callout */}
                <div className="bg-[#1e2d4a] rounded-lg h-[32px] flex items-center justify-between px-3 mt-2 flex-shrink-0">
                  <span className="text-[#9ca3af] text-[10px] font-medium">⚡&nbsp; Knockout stage goals</span>
                  <span className="text-[#f5a623] text-[10px] font-bold">
                    {gs.knockoutGoals}&nbsp; of {gs.knockoutOf}&nbsp; ({gs.knockoutPct})
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

export default ExpandingCarousel