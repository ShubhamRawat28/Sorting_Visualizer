async function selection_sort() {
  var min_index, i, j;
  for (i = 0; i < size - 1; i++) {
    change_color(arr[i], arr_sizes[i], "purple");
    min_index = i;
    for (j = i + 1; j < size; j++) {
      change_color(arr[j], arr_sizes[j], "cyan");
      if (arr_sizes[j] < arr_sizes[min_index]) {
        min_index = j;
        await sleep(delay);
        change_color(arr[min_index], arr_sizes[min_index], "purple");
      } else change_color(arr[j], arr_sizes[j], "white");
    }
    var temp = arr_sizes[i];
    arr_sizes[i] = arr_sizes[min_index];
    arr_sizes[min_index] = temp;
    await sleep(delay);
    change_color(arr[min_index], arr_sizes[min_index], "purple");
    change_color(arr[i], arr_sizes[i], "purple");
    change_color(arr[min_index], arr_sizes[min_index], "orange");
    await sleep(delay);
    change_color(arr[i], arr_sizes[i], "green");
  }
  change_color(arr[i], arr_sizes[i], "green");
}
var sort = document.getElementById("sort");
sort.addEventListener("click", play);
async function play() {
  disable_btn();
  if (!issort()) {
    await selection_sort();
    gotsorted();
  } else {
    gotsorted();
  }
  enable_btn();
}
