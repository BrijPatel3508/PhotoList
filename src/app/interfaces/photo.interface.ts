// IPhotos (I stands for Interface)
export interface IPhoto {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    isComparing: boolean;
}