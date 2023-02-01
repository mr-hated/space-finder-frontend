import { ICreateSpaceState } from "../components/spaces/CreateSpaces";
import { Space } from "../model/Model";



export class DataService {

  public async createSpace(iCreateSpace: ICreateSpaceState) {
    return '123';
  }

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

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === '1234') {
      return('5555')  
    } else {
      return undefined
    }
  }
}