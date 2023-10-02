export interface ExampleRepositoryInterface {
  findById(id: string): Promise<string>;
}