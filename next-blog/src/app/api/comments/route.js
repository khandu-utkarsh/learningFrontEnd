import prisma from "@/utils/connect";
import { skip } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

//!Getting all comments of a post
export const GET = async (req)=> {

    const {searchParams} = new URL(req.url)
    const postSlug = searchParams.get("postSlug");
    //console.log("Post slug: ", postSlug)
    try {

        const commments  = await prisma.comment.findMany({
            where: {
                ...(postSlug && {postSlug}),
            },
            include:{user: true},
        });

        //console.log("Comments fetched: ", commments)
        return new NextResponse(JSON.stringify(commments, {status:200}));

    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message:"Something went wrong!"}, {status:500}));
    }
};
