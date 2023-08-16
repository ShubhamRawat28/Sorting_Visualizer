async function bubblesort() {
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      change_color(arr[j], arr_sizes[j], "#301E67");
      if (arr_sizes[j] > arr_sizes[j + 1]) {
        change_color(arr[j], arr_sizes[j], "#301E67");
        change_color(arr[j + 1], arr_sizes[j + 1], "#D9ACF5");
        await sleep(delay);
        var temp = arr_sizes[j];
        arr_sizes[j] = arr_sizes[j + 1];
        arr_sizes[j + 1] = temp;
        
        change_color(arr[j], arr_sizes[j], "#301E67");
        change_color(arr[j + 1], arr_sizes[j + 1], "#D9ACF5"); 
      }
      await sleep(delay);
      change_color(arr[j], arr_sizes[j], "white"); 
    }
    change_color(arr[j], arr_sizes[j], "green"); 
  }
  change_color(arr[0], arr_sizes[0], "green");
  gotsorted();
}
var sort = document.getElementById("sort");
sort.addEventListener("click", play);
async function play() {
  disable_btn();
  if (!issort()) {
    await bubblesort();
    await gotsorted();
  } else {
    gotsorted();
  }
  enable_btn();
}