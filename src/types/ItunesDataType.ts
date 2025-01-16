

interface ITrackType {
    wrapperType: 'track';
    artistId: number;
    artistName: string;
    artistViewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionCensoredName: string;
    collectionExplicitness: string;
    collectionHdPrice: number;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    contentAdvisoryRating: string;
    country: string;
    currency: string;
    discCount: number;
    discNumber: number;
    kind: string;
    longDescription: string;
    previewUrl: string;
    primaryGenreName: string;
    releaseDate: string;
    shortDescription: string;
    trackCensoredName: string;
    trackCount: number;
    trackExplicitness: string;
    trackHdPrice: number;
    trackId: number;
    trackName: string;
    trackNumber: number;
    trackPrice: number;
    trackTimeMillis: number;
    trackViewUrl: string;
  }
  
  interface IAudiobookType {
    wrapperType: 'audiobook';
    artistId: number;
    artistName: string;
    artistViewUrl: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionCensoredName: string;
    collectionExplicitness: string;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    copyright: string;
    country: string;
    currency: string;
    description: string;
    previewUrl: string;
    primaryGenreName: string;
    releaseDate: string;
    trackCount: number;
  }
  

 export type IItunesDataType = ITrackType | IAudiobookType;