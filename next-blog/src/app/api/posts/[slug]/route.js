import prisma from "@/utils/connect";
import { skip } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

//!Query for getting single post
export const GET = async (req, {params})=> {

    const {slug} = params
    try {

        const post  = await prisma.post.findUnique({
            where: {slug: slug},
            include:{user: true},
        });


        return new NextResponse(JSON.stringify({post}, {status:200}));

    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something went wrong!"}, {status:500}));
    }
};
