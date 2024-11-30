export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok)
            throw new Error("Erro: " + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log('fetchData: ' + error.message);
        }
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map