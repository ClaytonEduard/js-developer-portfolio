async function fetchProfileData() {
  const url =
    "https://github.com/ClaytonEduard/js-developer-portfolio/main/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  return profileData;
}
