export const MIME_TYPE_FOLDER = "application/vnd.google-apps.folder";
declare var gapi:any;

export class FileInfo {
    static fromGoogleFile(file: gapi.client.drive.File): FileInfo {
        let fileInfo = new FileInfo();
        fileInfo.id = file.id;
        fileInfo.mimeType = file.mimeType;
        fileInfo.modifiedTime = file.modifiedTime;
        fileInfo.name = file.name;
        fileInfo.size = file.size;
        fileInfo.webContentLink = file.webContentLink;
        return fileInfo;
    }

    //Blob:File;
    id?: string;
    mimeType?: string;
    modifiedTime?: string;
    name?: string;
    //Progress: number;
    size?: string;
    webContentLink?:string;

    // public get Icon(): string {
    //     if (this.IsFolder) {
    //         return "folder";
    //     }
    //     else {
    //         return "file";
    //     }
    // }

    // public get IsFolder(): boolean {
    //     return this.mimeType === MIME_TYPE_FOLDER
    // }

    // public get ModifiedTimeText(): string {
    //     return this.modifiedTime.getDate() + "." + (this.modifiedTime.getMonth() + 1) + "." + this.modifiedTime.getFullYear();
    // }

    // public get SizeText(): string {
    //     if (!this.Size) return "-";

    //     let size: number = parseInt(this.Size);
    //     if (size < Math.pow(1024, 1))
    //         return size.toString();
    //     else if (size < Math.pow(1024, 2))
    //         return Math.floor(size / Math.pow(1024, 1)) + " KB";
    //     else if (size < Math.pow(1024, 3))
    //         return Math.floor(size / Math.pow(1024, 2)) + " MB";
    //     else if (size < Math.pow(1024, 3))
    //         return Math.floor(size / Math.pow(1024, 3)) + " GB";
    //     else
    //         return Math.floor(size / Math.pow(1024, 4)) + " GB";
    // }
}
