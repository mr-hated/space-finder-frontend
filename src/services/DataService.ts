import { ICreateSpaceState } from "../components/spaces/CreateSpaces";
import { Space } from "../model/Model";
import { S3, config } from 'aws-sdk';
import { config as appConfig} from './config';

config.update({
  region: appConfig.REGION
})

export class DataService {

  public async createSpace(iCreateSpace: ICreateSpaceState) {
    if (iCreateSpace.photo) {
      const photoUrl = await this.uploadPublicFile(
        iCreateSpace.photo,
        appConfig.SPACES_PHOTOS_BUCKET
      )
      iCreateSpace.photoURL = photoUrl;
      iCreateSpace.photo = undefined;
    }
    const requestUrl = appConfig.api.spacesUrl;
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(iCreateSpace)
    }
    const result = await fetch(requestUrl, requestOptions);
    const resultJSON = await result.json();

    return JSON.stringify(resultJSON.id);
  }

  private async uploadPublicFile(file: File, bucket: string) {
    const fileName = file.name;
    const uploadResult = await new S3({region: appConfig.REGION}).upload({
      Bucket: bucket,
      Key: fileName,
      Body: file,
      ACL: 'public-read'
    }).promise()

    return uploadResult.Location;
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