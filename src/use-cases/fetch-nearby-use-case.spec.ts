import { FetchNeabyUseCase } from "./fetch-nearby-use-case";
import { describe } from "node:test";
import { beforeEach, expect, it } from "vitest";
import { OrgInMemoryRepository } from "@/repositories/in-memory/org-in-memory-respository";

let OrgRepository: OrgInMemoryRepository
let sut: FetchNeabyUseCase

describe('Fetch Nearby Use Case', () => {
    beforeEach(() => {
        OrgRepository = new OrgInMemoryRepository()
        sut = new FetchNeabyUseCase(OrgRepository)
    })

    it('should be able to fetch nearby orgs', async () => {
        await OrgRepository.create({
            name_responsible: 'John Doe',
            email: 'johndoe@me.com',
            whatsapp: '11999999999',
            password: '123456',
            CEP: '12345678',
            State: 'SP',
            City: 'São Paulo',
            Adress: 'Av. Paulista, 1000',
            Neighborhood: 'Bela Vista',
            Street: 'Paulista',
            Latitude: -23.5505202,
            Longitude: -46.6333082
        })

        await OrgRepository.create({
            name_responsible: 'Jonas Doe',
            email: 'gonas@me.com',
            whatsapp: '11999999999',
            password: '321312',
            CEP: '12345678',
            State: 'SP',
            City: 'São Mineiro',
            Adress: 'Av. Mineira, 1233',
            Neighborhood: 'Bela Vista',
            Street: 'Paulista',
            Latitude: -27.2092052,
            Longitude: -49.6401091
        })

        const { orgs } = await sut.execute({
            latitude: -23.5505202, 
            longitude: -46.6333082
        })

        expect(orgs).toHaveLength(1)
        expect(orgs).toEqual([expect.objectContaining({ City: 'São Paulo' })])
    })
})