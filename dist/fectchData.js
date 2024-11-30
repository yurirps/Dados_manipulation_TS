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
    }
}
//# sourceMappingURL=fectchData.js.map