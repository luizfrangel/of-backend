export interface ExamplesRepositoryInterface {
  findById(id: string): Promise<string>;
}