export interface IBaseService<T, C, U> {
    create(data: C): Promise<T>;
    getAll(): Promise<T[]>;
    getById(_id: number): Promise<T>;
    deleteId(_id: number): Promise<T>;
    updateId(_id: number, data: U): Promise<T>;
}
