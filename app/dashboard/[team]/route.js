import { NextResponse } from "next/server"

export async function GET(request, {params}) {
        const team = params.team
        console.log('🚀  team:::', team)
     return NextResponse.json({ team })
}