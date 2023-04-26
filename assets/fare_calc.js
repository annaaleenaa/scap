function calculateFare(distance) {
  if (distance <= 1) {
    return 50;
  } else if (distance <= 3) {
    return 100;
  } else if (distance <= 5) {
    return 150;
  } else if (distance <= 7) {
    return 160;
  } else if (distance <= 9) {
    return 180;
  } else if (distance <= 11) {
    return 220;
  } else if (distance <= 12) {
    return 230;
  } else if (distance <= 14) {
    return 270;
  } else if (distance <= 16) {
    return 290;
  } else {
    return 290 + calculateFare(distance - 16);
  }
}
