import { makeAutoObservable } from "mobx";
import { ICreateProfile } from "./types";
import { getStorage, setStorage } from "@/shared/utils";

class Profile {
  nickname = ''
  name = ''
  description = ''
  picture = ''
  subscriptions = 0
  subscribers = 0
  isLoading = false
  isLoadingChange = false

  constructor() {
    makeAutoObservable(this)
  }

  setProfile({ nickname, name, description }: ICreateProfile) {
    this.nickname = nickname;
    this.name = name;
    this.description = description;
  }
  setPicture(picture: string) {
    this.picture = picture;
  }
  setIsLoading(payload: boolean) {
    this.isLoading = payload;
  }
  setIsLoadingChange(payload: boolean) {
    this.isLoadingChange = payload;
  }

  async changeProfile(data: ICreateProfile) {
    this.setIsLoadingChange(true);
    await setStorage('dataProfile', JSON.stringify(data));
    this.setIsLoadingChange(false);
    this.setProfile(data);
  }
  async changePicture(picture: string) {
    this.setIsLoading(true);
    await setStorage('pictureProfile', picture);
    this.setIsLoading(false);
    this.setPicture(picture);
  }
  async getDataProfile(): Promise<boolean> {
    this.setIsLoading(true);
    const persistedData = await getStorage('dataProfile');
    const persistedPicture = await getStorage('pictureProfile');
    this.setIsLoading(false);

    if (!persistedData) return false

    this.setProfile(JSON.parse(persistedData));
    this.setPicture(persistedPicture || '');
    
    return true
  }
};

const profileModel = new Profile();

export { profileModel };