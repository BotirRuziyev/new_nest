export interface IBaseController<T, C, U> {
    create(dto: C): Promise<T>;
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    deleteId(id: number): Promise<T>;
    updateId(id: number, dto: U): Promise<T>;
}
