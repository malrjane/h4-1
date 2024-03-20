export default function healthIndicator (character) {
  let result;
  if (character.health > 50) {
    result = "healthy";
  } else if (character.health > 15 && character.health < 50) {
    result = "wounded";
  } else {
    result = "critical";
  }
  console.log(result);
  return result;
}