import { ResourceNotFoundError } from "@/errors/resource-not-found.error";
import { ExampleRepositoryInterface } from "@/repositories/example-repository.interface";

interface FindExampleUseCaseInput {
  id: string
}


class FindExampleUseCase {
  constructor(private exampleRepository: ExampleRepositoryInterface) {}
  public async execute({ id }: FindExampleUseCaseInput): Promise<string> {
    const example = await this.exampleRepository.findById(id)

    if(!example) {
      throw new ResourceNotFoundError()
    }

    return example
  }
}

export { FindExampleUseCase }