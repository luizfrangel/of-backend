import { beforeEach, describe, expect, it, vitest } from 'vitest'
import { FindExampleUseCase } from './find-example.usecase'
import { ExamplesRepositoryInterface } from '@/repositories/examples-repository.interface'
import { ResourceNotFoundError } from '@/errors/resource-not-found.error'

describe('FindExampleUseCase unit tests', () => {
  let examplesRepository: ExamplesRepositoryInterface
  let usecase: FindExampleUseCase

  beforeEach(() => {
    examplesRepository = {
      findById: vitest.fn()
    }
    usecase = new FindExampleUseCase(examplesRepository)
  })

  it('should find an example by its ID', async () => {
    examplesRepository.findById = vitest.fn().mockResolvedValue('returned-example')
    const result = await usecase.execute({ id: '0ce2d59d-0aab-4f02-ad25-84cc5f75a8f8' })
    expect(result).toBe('returned-example')
  })

  it('should throw error if example was not found', async () => {
    await expect(usecase.execute({ id: '1' })).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})