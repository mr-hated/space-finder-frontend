import { Space } from "../model/Model";



export class DataService {

  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: 'Paris',
      name: 'Best Location',
      spaceId: '1234'
    })
    result.push({
      location: 'London',
      name: 'Best Location 2',
      spaceId: '1235'
    })
    result.push({
      location: 'Malmo',
      name: 'Best Location 3',
      spaceId: '1236'
    })
    return result;
  }
}