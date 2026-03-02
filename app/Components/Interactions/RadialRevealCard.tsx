'use client'

import { useState } from "react"

const RadialRevealCard = () => {
    const [dark, setDark] = useState(false)

    return (
        <div className="w-screen h-screen bg-red-700 flex items-center justify-center">
            <div style={{
                background: dark ? "#000" : "#fff",
                borderColor: dark ? "#fff" : "#000",
                color: dark ? "#fff" : "#000"
            }} className="border-4 rounded-3xl max-w-100 p-10 flex flex-col gap-8">
                <h2 className="text-3xl font-black  ">Lorem Ipsum</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                <button style={{
                    background: dark ? "#000" : "#fff",
                    borderColor: dark ? "#fff" : "#000",
                    color: dark ? "#fff" : "#000"
                }}
                    onClick={() => setDark(prev => !prev)}
                    className="border-2 cursor-pointer py-4 rounded-lg"
                >Click Me</button>
            </div>
        </div>
    )
}

export default RadialRevealCard