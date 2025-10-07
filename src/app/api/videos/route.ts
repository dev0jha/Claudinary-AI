import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export async function GET(){
    try {
        // Check database connection
        await prisma.$connect()
        
        const videos = await prisma.video.findMany({
            orderBy: {createdAt: "desc"}
        })
        return NextResponse.json(videos)
    } catch (error) {
        console.log("Error fetching videos:", error)
        if (error instanceof Error && error.message.includes("Can't reach database")) {
            return NextResponse.json({error: "Database connection failed. Please check your database configuration."}, {status: 503})
        }
        return NextResponse.json({error: "Error fetching videos"}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}