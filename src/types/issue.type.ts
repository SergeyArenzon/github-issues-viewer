export type Issue = {
    id: string,
    title: string,
    created_at: string,
    body: string,
    number: number,
    url: string,
    state: "open" | "closed"
}