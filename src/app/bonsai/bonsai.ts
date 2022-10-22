export interface Bonsai {
    id: number;
    title: string;
    description: string;
    pictureLink?: string;
  }  
  
  
  export interface BonsaiDialogData {
    bonsai: Partial<Bonsai>;
    enableDelete: boolean;
  }
  
  export interface BonsaiDialogResult {
    bonsai: Bonsai;
    delete?: boolean;
  }