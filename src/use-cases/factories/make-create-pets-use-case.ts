import { PrismaPetsRepository } from "@/repositories/prisma/pets-prisma.repository";
import { CreatePetUseCase } from "../create-pet-use-case";
import { PrismaOrgsRepository } from "@/repositories/prisma/org-prisma.repository";

export function MakeCreatePetUseCase() {
    return new CreatePetUseCase(
        new PrismaOrgsRepository(),
        new PrismaPetsRepository()
    )
}