import fs from "node:fs";
import path from "node:path";

const directoryCrawler = (
    directory: string,
    fileExtension: string
): string[] => {
    let results: string[] = [];
    let files: string[];

    try {
        files = fs.readdirSync(directory);
    } catch (e) {
        files = [];
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.resolve(directory, file);

        const stats = fs.statSync(filePath);

        if (!stats.isDirectory()) {
            if (path.extname(filePath).substring(1) === fileExtension) {
                results.push(filePath);
            }
        } else {
            results = results.concat(directoryCrawler(filePath, fileExtension));
        }
    }

    return results.sort();
};

export default directoryCrawler;
