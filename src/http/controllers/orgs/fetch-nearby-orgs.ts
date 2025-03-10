import { MakeFetchNearbyUseCase } from "@/use-cases/factories/make-fetch-nearby-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const QuerySchema = z.object({
    latitude: z.coerce.number().refine((value) => {
        return Math.abs(value) <= 90
    }),
    longitude: z.coerce.number().refine((value) => {
        return Math.abs(value) <= 180
    }),
})

export async function FetchNearbyOrg(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const query = QuerySchema.parse(request.body)

    const fetchNearby = MakeFetchNearbyUseCase()

    try {
        const { orgs } = await fetchNearby.execute({
            latitude: query.latitude,
            longitude: query.longitude
        })
    } catch(error) {
        console.log(error)

        return reply.status(400)     
    }
}