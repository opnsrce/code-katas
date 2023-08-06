import { describe, expect, beforeEach, afterEach } from "@jest/globals";
import path from "node:path";
import mockFs from "mock-fs";
import crawlDirectory from "./index";

describe("Directory Crawler", () => {
    const tempDirectory = path.join(__dirname, "temp");

    beforeEach(() => {
        mockFs({
            [tempDirectory]: {
                folder1: {
                    "file1.txt": "File 1 content",
                    "file2.js": "File 2 content",
                    subfolder1: {
                        "file3.txt": "File 3 content"
                    }
                },
                folder4: {},
                folder2: {
                    subfolder2: {
                        "file4.json": "File 4 content"
                    }
                },
                "file5.txt": "File 5 content"
            }
        });
    });

    it("should find all files matching the file extension", () => {
        const result = crawlDirectory(tempDirectory, "txt");

        expect(result).toStrictEqual(
            [
                path.join(tempDirectory, "file5.txt"),
                path.join(tempDirectory, "folder1", "file1.txt"),
                path.join(tempDirectory, "folder1", "subfolder1", "file3.txt")
            ].sort()
        );
    });

    it("should handle empty directories", () => {
        const result = crawlDirectory(tempDirectory, "txt");

        expect(result).toStrictEqual(
            [
                path.join(tempDirectory, "file5.txt"),
                path.join(tempDirectory, "folder1", "file1.txt"),
                path.join(tempDirectory, "folder1", "subfolder1", "file3.txt")
            ].sort()
        );
    });

    it("should handle 0 results", () => {
        const result = crawlDirectory(tempDirectory, "bmp");

        expect(result).toStrictEqual([]);
    });

    it("should handle a non-existent directory", () => {
        const result = crawlDirectory("not-real", "bmp");

        expect(result).toStrictEqual([]);
    });

    afterEach(() => {
        mockFs.restore();
    });
});
