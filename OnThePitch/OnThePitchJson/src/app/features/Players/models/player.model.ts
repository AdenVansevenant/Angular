export class Player {
  id?: number;
  shirtNo = 0;
  name = '';
  positionId = 0;
  appearances?: number;
  goals?: number;
  positionX = 0;
  positionY = 0;
  goalsPerMatch?: number;
  position?: {
    id: number;
    name: string;
    displayOrder?: number;
  };
}
