import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json([
        {
        id: 20,
        name: "Chain Ear rings",
        price: 350,
        url: "/trend-g-pearl.jpg"
    },
    {
        id: 21,
        name: "Chain Ear rings",
        price: 350,
        url: "/trend-pearl.jpg"
    },
    {
        id: 22,
        name: "Chain Ear rings",
        price: 350,
        url: "/chain-ear-ring-3.jpg"
    },
 
    ])
}
