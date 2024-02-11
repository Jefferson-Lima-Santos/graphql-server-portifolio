export default function getConnectionString(name: string): string {
    try {
        return process.env[`ConnectionStrings:${name}`] || process.env[`${name}`];
    } catch (e) {
        throw new Error(`Connection string ${name} not found`);
    }
}