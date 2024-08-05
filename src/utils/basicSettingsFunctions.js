import { deleteWhiteSpaces } from "../utils/stringUtils";

const changeImageToMen = () => {
  setBasicInfo({ ...basicInfo, img: "src/assets/icons/userMan.svg" });
};
const changeImageToWomen = () => {
  setBasicInfo({ ...basicInfo, img: "src/assets/icons/userWomen.svg" });
};

const changeFirstName = (e) => {
  setBasicInfo({
    ...basicInfo,
    firstName: deleteWhiteSpaces(e.target.value),
  });
};
const changeLastName = (e) => {
  setBasicInfo({ ...basicInfo, lastName: deleteWhiteSpaces(e.target.value) });
};
const changeJob = (e) => {
  setBasicInfo({ ...basicInfo, job: e.target.value });
};
const changeEmail = (e) => {
  setBasicInfo({ ...basicInfo, email: deleteWhiteSpaces(e.target.value) });
};
const changePhone = (e) => {
  setBasicInfo({ ...basicInfo, phoneNumber: e.target.value });
};
const changeWebsite = (e) => {
  setBasicInfo({ ...basicInfo, website: deleteWhiteSpaces(e.target.value) });
};
const changeBio = (e) => {
  setBasicInfo({ ...basicInfo, bio: e.target.value });
};

export const basicInfoFunctions = {
  changeImageToMen,
  changeImageToWomen,
  changeFirstName,
  changeLastName,
  changeJob,
  changeEmail,
  changePhone,
  changeWebsite,
  changeBio,
};
