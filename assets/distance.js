function distance(a1, a2) {
  const p1 = $("#stop1").val() || a1;
  const p2 = $("#stop2").val() || a2;
  const distance = Math.abs(parseInt(p1 || "") - parseInt(p2 || "") || 0);
  $("#distance").val(distance);
  return distance;
}
