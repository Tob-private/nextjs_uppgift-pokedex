export const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args);
    if (!res.ok) {
        throw new Error(`An error occurred: ${res.status} ${res.statusText}`);
    }
    return res.json();
};
