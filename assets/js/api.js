async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/claytoneduard/js-developer-portfolio/main/data/profile.json";
  const response = await fetch(url);
  const profileData = await response.json();
  console.log(profileData);
  return profileData;
}
