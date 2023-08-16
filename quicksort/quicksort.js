async function partition(low,high)
{
    var pivot=arr_sizes[low];
    var i=low+1;
    for(let j=low+1;j<=high;j++)
    {
        if(arr_sizes[j]<pivot)
        {
            change_color(arr[j],arr_sizes[j],"purple");
            await sleep(delay);
            change_color(arr[i],arr_sizes[i],"red");
            change_color(arr[j],arr_sizes[j],"red");
            var temp=arr_sizes[i];
            arr_sizes[i]=arr_sizes[j];
            arr_sizes[j]=temp;
            change_color(arr[i],arr_sizes[i],"red");
            change_color(arr[j],arr_sizes[j],"red");
            await sleep(delay);
            
            change_color(arr[i],arr_sizes[i],"white");
            change_color(arr[j],arr_sizes[j],"white");
            i++;
        }
    }
    await sleep(delay);
    change_color(arr[low],arr_sizes[low],"red");
    change_color(arr[i-1],arr_sizes[i-1],"red");
    temp=arr_sizes[low];
    arr_sizes[low]=arr_sizes[i-1];
    arr_sizes[i-1]=temp;
    await sleep(delay);
    change_color(arr[low],arr_sizes[low],"grey");
    change_color(arr[i-1],arr_sizes[i-1],"red");
    for(var k=low;k<=i;k++)
    {
      await sleep(delay);
      change_color(arr[k],arr_sizes[k],"green");
    } 
    return i-1;
}
async function quicksort(l,r)
{
    if(l<r)
    {
        var pi=await partition(l,r);
        await quicksort(l,pi-1);
        await quicksort(pi+1,r);
    }
}
var sort = document.getElementById("sort");
sort.addEventListener("click", play);
async function play() {
  disable_btn();
  if (!issort()) {
    await quicksort(0,size-1);
    gotsorted();
  } else {
    gotsorted();
  }
  enable_btn();
}