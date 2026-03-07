'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import ShuffleIcon from "@mui/icons-material/Shuffle"
import AssignmentIcon from "@mui/icons-material/Assignment"
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver"
import GroupIcon from "@mui/icons-material/Group"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"

import TitleSection from '../Components/CaseStudy/TitleSection'
import ContentSection from '../Components/CaseStudy/ContentSection'
import CollapsibleSection from '../Components/CaseStudy/CollapsibleSection'
import CardSwitcher from '../Components/CaseStudy/CardSwitcher'
import { CardDetail } from '../types/casestudy'

function CollapsedCard() {
    const card_details: CardDetail[] = [
        {
            id: 0,
            description: (
                <>
                    <span className="font-bold">80%</span> said friends often forget to repay split expenses;{" "}
                    <span className="font-bold">55%</span> struggle to track who has paid.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 1,
            description: (
                <>
                    <span className="font-bold">75%</span> avoid expense tracking because it feels tedious;{" "}
                    <span className="font-bold">40%</span> stopped using tracking apps.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 2,
            description: (
                <>
                    <span className="font-bold">72%</span> lose track of small UPI payments;{" "}
                    <span className="font-bold">47%</span> said these expenses accumulate unnoticed.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 3,
            description: (
                <>
                    <span className="font-bold">68%</span> rely on bank balance alone instead of actively tracking their spending habits.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 4,
            description: (
                <>
                    <span className="font-bold">65%</span> struggle to recall what a transaction was for;{" "}
                    <span className="font-bold">45%</span> forget whom they paid.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 5,
            description: (
                <>
                    <span className="font-bold">63%</span> struggle to recognize merchants due to inconsistent names;{" "}
                    <span className="font-bold">49%</span> see the same shop listed differently.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 6,
            description: (
                <>
                    <span className="font-bold">60%</span> realize overspending only after their balance drops significantly much later.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 7,
            description: (
                <>
                    <span className="font-bold">58%</span> said creating groups for one-time bill splits feels unnecessary and tedious.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        },
        {
            id: 8,
            description: (
                <>
                    <span className="font-bold">52%</span> said transaction histories often don’t clearly explain where money went.
                </>
            ),
            img: "/case-study-1/images/research-summary-1.png"
        }
    ]

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.4,
                delayChildren: 1.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className='w-full flex flex-col gap-4'
        >
            <div className='h-182 w-full flex gap-4'>
                <div className='flex-1 flex flex-col gap-4'>
                    <motion.div variants={item} className='bg-[#EDE4F3] rounded-lg px-8 py-8 flex-1 flex flex-col gap-4 text-black'>
                        <h3 className="text-[32px] font-heading font-bold">RESEARCH APPROACH</h3>

                        <div className='flex justify-between'>
                            <div className='flex gap-4 items-center'>
                                <ShuffleIcon sx={{ fontSize: 44 }} className='bg-black text-white rounded-sm' />
                                <p className='font-medium max-w-30 leading-5'>Mixed Method Approach</p>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <AssignmentIcon sx={{ fontSize: 44 }} className='text-black rounded-sm' />
                                <p className='font-medium max-w-30 leading-5'>54 Survey Respondents</p>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <RecordVoiceOverIcon sx={{ fontSize: 44 }} className='text-black rounded-sm' />
                                <p className='font-medium max-w-30 leading-5'>18 Interviews</p>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <GroupIcon sx={{ fontSize: 44 }} className='text-black rounded-sm' />
                            <p><span className='text-black font-semibold'>Participants : </span><span className='font-light'>Frequent UPI users</span></p>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <TrackChangesIcon sx={{ fontSize: 44 }} className='text-black rounded-sm' />
                            <p><span className='text-black font-semibold'>Focus : </span><span className='font-light'>Payment behaviour and expense awareness</span></p>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='bg-[#E1F0F2] rounded-lg px-8 py-8 flex-1 flex flex-col gap-4 text-black'>
                        <h3 className="text-[32px] font-heading font-bold">DESIGN OPPORTUNITIES</h3>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Unified Financial Overview</h4>
                                <p>Give users a single place to understand their financial activity. Payments, expenses, and pending obligations should appear together.</p>
                            </div>

                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Passive Expense Tracking</h4>
                                <p>Reduce the effort required to monitor spending. Expenses should be automatically organized and summarized.</p>
                            </div>

                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Integrated Social Payments</h4>
                                <p>Make shared expenses easier to manage within everyday transactions. Pending balances and repayments should remain visible.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <motion.div variants={item} className='bg-[#E1F0F2] rounded-lg px-8 py-8 flex-1 flex flex-col gap-4 text-black'>
                        <h3 className="text-[32px] font-heading font-bold">INSIGHTS SUMMARY</h3>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Transaction Overload</h4>
                                <p>Frequent micro-payments make it difficult for users to track spending. Small daily expenses accumulate unnoticed, and many rely on bank balance.</p>
                            </div>

                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Fragmented Expense Visibility</h4>
                                <p>Transaction histories lack clarity and consistency. Merchant names vary across POS systems, making it harder for users to recognize spending.</p>
                            </div>

                            <div className='flex flex-col'>
                                <h4 className='font-semibold'>Friction in Shared Expenses</h4>
                                <p>Splitting bills introduces extra steps and limited visibility. Users struggle to track who has paid, while pending obligations often disappear.</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className='bg-[#EDE4F3] rounded-lg flex-1'>
                        <CardSwitcher title="User Responses (highlights)" card_details={card_details} />
                    </motion.div>
                </div>
            </div>
            <div className='flex gap-4'>
                <motion.div variants={item} className='bg-[#E1F0F2] p-8 text-black rounded-lg'>
                    <p className='text-[32px] font-heading font-bold'>
                        Users who frequently make digital payments need a low-effort way to track personal and shared expenses so they can maintain financial awareness without manually reviewing transaction histories.
                    </p>
                </motion.div>
                <motion.div variants={item} className='bg-[#EDE4F3] rounded-lg w-340'>
                    Working
                </motion.div>
            </div>
        </motion.div>
    )
}

function ExpandedCard() {
    return (
        <p>Expanded Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    )
}

const page = () => {
    return (
        <div className='flex flex-col'>
            <motion.div
                layoutId='Second'
                transition={{
                    duration: 0.5
                }}
                className='relative bg-red-500 w-screen aspect-[2.65]'
            ></motion.div>

            <div className='mx-6 sm:mx-8 md:mx-16 2xl:mx-80 self-center'>
                <TitleSection />

                <ContentSection title="Introduction">
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </ContentSection>

                <CollapsibleSection collapsed={<CollapsedCard />} expanded={<ExpandedCard />} title='Understanding the Problem' />

                <ContentSection title="Solution">
                    <div className='bg-white w-full h-244'></div>
                </ContentSection>

                <div className='my-8 h-px w-full bg-[#414651]'></div>
                <h2 className='text-5xl'><Link href="/">Back</Link></h2>
            </div>
        </div>
    )
}

export default page