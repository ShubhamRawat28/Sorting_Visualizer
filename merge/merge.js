async function merge(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;
    for(var i=start; i<=end; i++)
    {
      await sleep(delay);
      if(p>mid)
      {
        Arr[k++]=arr_sizes[q++];
        change_color(arr[q-1],arr_sizes[q-1],"red");//Color update
      }
      else if(q>end)
      {
        Arr[k++]=arr_sizes[p++];
        change_color(arr[p-1],arr_sizes[p-1],"red");//Color update
      }
      else if(arr_sizes[p]<arr_sizes[q])
      {
        Arr[k++]=arr_sizes[p++];
        change_color(arr[p-1],arr_sizes[p-1],"red");//Color update
      }
      else
      {
        Arr[k++]=arr_sizes[q++];
        change_color(arr[q-1],arr_sizes[q-1],"red");//Color update
      }
      await sleep(delay);
    }

    for(var t=0;t<k;t++)
    {
      await sleep(delay);
        arr_sizes[start++]=Arr[t];
        change_color(arr[start-1],arr_sizes[start-1],"green");//Color update
    }
}
async function mergesort(l,r)
{
  if(l<r)
  {
    var mid=parseInt(l+(r-l)/2);
    change_color(arr[mid],arr_sizes[mid],"red");
    await mergesort(l,mid);
    await mergesort(mid+1,r);
    await merge(l,mid,r);
  }
}
var sort = document.getElementById("sort");
sort.addEventListener("click", play);
async function play() {
  disable_btn();
  if (!issort()) {
    await mergesort(0,size-1);
    gotsorted();
  } else {
    gotsorted();
  }
  enable_btn();
}