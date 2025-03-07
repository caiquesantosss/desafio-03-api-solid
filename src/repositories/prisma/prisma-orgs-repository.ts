import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { OrgsRepository } from "../orgs.repository"

export class PrismaOrgsRepository implements OrgsRepository {
    async create(data: Prisma.ORGCreateInput) {
        return await prisma.oRG.create({
            data,
        })
    }
}