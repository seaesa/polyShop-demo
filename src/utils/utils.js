export const getIpAddress = async () => {
  const response = await fetch('https://api.ipify.org/?format=json');
  const data = await response.json();
  return data.ip
}

export const genarateId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result.toUpperCase();
}