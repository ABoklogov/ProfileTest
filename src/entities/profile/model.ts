import { makeAutoObservable } from "mobx";
import { ICreateProfile } from "./types";

class Profile {
  nickname = ''
  name = ''
  description = ''
  picture = ''

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
};

const profileModel = new Profile();

export { profileModel };