export type IOptions = {
    page: number;
    limit: number;
    searchTerm: string;
    sortOrder: 'asc' | 'desc';
    sortBy: string;
}