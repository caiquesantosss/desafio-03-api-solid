import { PrismaPetsRepository } from "@/repositories/prisma/pets-prisma.repository";
import { SearchPetUseCase } from "../search-pet-use-case";

export function makeSearchPetsUseCase() {
    return new SearchPetUseCase(new PrismaPetsRepository())
}